import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

const siteUrl = "https://brainyieldschools.sc.tz";

export const revalidate = 3600;

async function getNewsStories(): Promise<MetadataRoute.Sitemap> {
  try {
    const stories: { slug: string; updatedAt: string }[] = await client.fetch(
      `*[_type == "news" && defined(slug.current)]{ "slug": slug.current, "updatedAt": _updatedAt }`
    );
    return stories.map((s) => ({
      url: `${siteUrl}/news/${s.slug}`,
      lastModified: new Date(s.updatedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const newsStories = await getNewsStories();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/academics`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/admissions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/facilities`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/news`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/testimonials`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...newsStories,
  ];
}
