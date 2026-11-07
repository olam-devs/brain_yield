import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import NewsCard from "@/components/NewsCard";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 3600;

const siteUrl = "https://brainyieldschools.sc.tz";
const fallbackImage = "/school%20pics/IMG_5977.webp";

type Params = { params: Promise<{ slug: string }> };

interface Story {
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
  publishedAt?: string;
  body?: PortableTextBlock[];
}

async function getStory(slug: string): Promise<Story | null> {
  try {
    return await client.fetch(
      `*[_type == "news" && slug.current == $slug][0]{ title, "slug": slug.current, excerpt, category, image, publishedAt, body }`,
      { slug }
    );
  } catch {
    return null;
  }
}

async function getMoreNews(slug: string): Promise<Story[]> {
  try {
    return await client.fetch(
      `*[_type == "news" && defined(slug.current) && slug.current != $slug] | order(publishedAt desc)[0...3]{ title, "slug": slug.current, excerpt, category, image, publishedAt }`,
      { slug }
    );
  } catch {
    return [];
  }
}

function formatDate(dateStr?: string, withDay = false) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", withDay
    ? { day: "numeric", month: "long", year: "numeric" }
    : { month: "long", year: "numeric" });
}

export async function generateStaticParams() {
  try {
    const slugs: string[] = await client.fetch(`*[_type == "news" && defined(slug.current)].slug.current`);
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) return { title: "News & Events" };

  // JPG rather than WebP so link previews work everywhere (e.g. WhatsApp).
  const shareImage = story.image ? urlFor(story.image).width(1200).format("jpg").url() : undefined;
  const url = `${siteUrl}/news/${story.slug}`;

  return {
    title: story.title,
    description: story.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: story.title,
      description: story.excerpt,
      type: "article",
      url,
      publishedTime: story.publishedAt,
      images: shareImage ? [{ url: shareImage, alt: story.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.excerpt,
      images: shareImage ? [shareImage] : undefined,
    },
  };
}

const storyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 text-lg leading-relaxed text-text-light">{children}</p>,
    h2: ({ children }) => <h2 className="mt-10 mb-4 text-2xl font-bold text-text md:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 mb-3 text-xl font-bold text-text">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-secondary pl-6 text-lg italic text-text">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 ml-6 list-disc space-y-2 text-lg text-text-light">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 ml-6 list-decimal space-y-2 text-lg text-text-light">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-text">{children}</strong>,
    link: ({ value, children }) => {
      const href: string = value?.href || "#";
      // Links to other websites open in a new tab; links to this site don't.
      const external = href.startsWith("http") && !href.startsWith(siteUrl);
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="font-medium text-primary underline underline-offset-2 hover:text-secondary"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <figure className="my-10">
          <img src={urlFor(value).width(1400).url()} alt={value.caption || ""} className="h-auto w-full rounded-2xl" />
          {value.caption && <figcaption className="mt-3 text-center text-sm text-text-light">{value.caption}</figcaption>}
        </figure>
      ) : null,
  },
};

export default async function NewsStoryPage({ params }: Params) {
  const { slug } = await params;
  const [story, more] = await Promise.all([getStory(slug), getMoreNews(slug)]);
  if (!story) notFound();

  return (
    <>
      <HeroSection
        title={story.title}
        subtitle={story.category || "News"}
        description={formatDate(story.publishedAt, true)}
        bgImage="/school%20pics/school%20view%202.webp"
      />

      <SectionWrapper>
        <article className="mx-auto max-w-3xl">
          <Link
            href="/news"
            className="mb-8 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All News &amp; Events
          </Link>

          {story.image && (
            <img
              src={urlFor(story.image).width(1600).url()}
              alt={story.title}
              className="mb-10 h-auto w-full rounded-3xl shadow-xl"
            />
          )}

          {story.body?.length ? (
            <PortableText value={story.body} components={storyComponents} />
          ) : (
            <p className="whitespace-pre-line text-lg leading-relaxed text-text-light">{story.excerpt}</p>
          )}
        </article>
      </SectionWrapper>

      {more.length > 0 && (
        <SectionWrapper bg="light">
          <h2 className="mb-12 text-center text-3xl font-bold text-text">More News &amp; Events</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {more.map((post) => (
              <NewsCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt || ""}
                date={formatDate(post.publishedAt)}
                category={post.category || "News"}
                image={post.image ? urlFor(post.image).width(800).url() : fallbackImage}
                href={`/news/${post.slug}`}
              />
            ))}
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
