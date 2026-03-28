import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import NewsCard from "@/components/NewsCard";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "News & Events",
  description: "Stay updated with the latest news, events, and announcements from Brain Yield Schools, Salasala, Dar es Salaam.",
};

const fallbackFeatured = {
  title: "100% Pass Rate in PESNO Grade Seven Mock Examination 2024",
  excerpt: "We are proud to announce that all Brain Yield Schools students passed across all subjects in the PESNO Grade Seven Mock Examination March 2024.",
  date: "March 2024",
  category: "Achievements",
  image: "/school%20pics/IMG_5977.jpg",
};

const fallbackPosts = [
  { title: "Admissions Open for 2026 Academic Year", excerpt: "Brain Yield Schools is now accepting applications for Pre-Primary, Primary, and Secondary students for the 2026 academic year. Both day and boarding options are available.", date: "February 2026", category: "Admissions", image: "/school%20pics/Main%20gate.PNG" },
  { title: "Ongoing Improvement of Learning Facilities", excerpt: "We continue to invest in our campus, upgrading classrooms, dormitories, and common areas to provide the best possible learning environment for every student.", date: "February 2026", category: "News", image: "/school%20pics/school%20buildings.PNG" },
  { title: "Expansion of ICT & Computer Lab Programs", excerpt: "Our ICT programs continue to grow with the expansion of computer lab facilities across all levels. Every student now benefits from enhanced digital learning.", date: "January 2026", category: "News", image: "/school%20pics/IMG_6417.jpg" },
  { title: "Continued Strong National Examination Performance", excerpt: "Brain Yield Schools maintains its proud record of outstanding national examination results.", date: "March 2024", category: "Achievements", image: "/school%20pics/IMG_5966.jpg" },
  { title: "Parent-Teacher Conference Success", excerpt: "Our recent PTA meeting brought together parents and educators to discuss student progress and plans for the academic year ahead.", date: "December 2025", category: "Events", image: "/school%20pics/front%20view.PNG" },
  { title: "Sports Day & Cultural Celebration", excerpt: "Students celebrated diversity and sportsmanship through athletics, team sports, traditional dance, and cultural exhibitions.", date: "November 2025", category: "Events", image: "/school%20pics/sports%20-%20football.PNG" },
];

const categories = ["All", "Admissions", "News", "Achievements", "Events", "Sports", "Milestone"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  } catch {
    return dateStr;
  }
}

async function getNews() {
  try {
    const results = await client.fetch(
      `*[_type == "news"] | order(publishedAt desc) { title, "slug": slug.current, excerpt, category, image, publishedAt, featured }`
    );
    if (!results || results.length === 0) return { featured: fallbackFeatured, posts: fallbackPosts };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formatted = results.map((item: any) => ({
      title: item.title,
      excerpt: item.excerpt || "",
      date: item.publishedAt ? formatDate(item.publishedAt) : "",
      category: item.category || "News",
      image: item.image ? urlFor(item.image).width(800).url() : "/school%20pics/IMG_5977.jpg",
      featured: item.featured || false,
    }));

    const featured = formatted.find((p: { featured: boolean }) => p.featured) || formatted[0];
    const posts = formatted.filter((p: { title: string }) => p.title !== featured.title);

    return { featured, posts };
  } catch {
    return { featured: fallbackFeatured, posts: fallbackPosts };
  }
}

export default async function NewsPage() {
  const { featured, posts } = await getNews();

  return (
    <>
      <HeroSection
        title="News & Events"
        subtitle="Stay Informed"
        description="The latest happenings, achievements, and updates from Brain Yield Schools, Salasala, Kinondoni — Dar es Salaam."
        bgImage="/school%20pics/school%20view%202.jpg"
      />

      {/* Featured Post */}
      <SectionWrapper>
        <div className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-border/50">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute top-6 left-6 rounded-full bg-secondary px-5 py-1.5 text-sm font-semibold text-white">Featured</span>
            </div>
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <span className="mb-2 text-sm font-medium text-secondary">{featured.category}</span>
              <h2 className="mb-4 text-2xl font-bold text-text lg:text-3xl">{featured.title}</h2>
              <p className="mb-6 text-text-light leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-light">{featured.date}</span>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  Read Full Story
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Category Filter + Posts */}
      <SectionWrapper bg="light">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button key={cat} className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${cat === "All" ? "bg-primary text-white shadow-lg" : "bg-white text-text-light border border-border hover:border-primary hover:text-primary"}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: { title: string; excerpt: string; date: string; category: string; image: string }) => (
            <NewsCard key={post.title} {...post} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
