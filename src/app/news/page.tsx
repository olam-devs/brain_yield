import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Stay updated with the latest news, events, and announcements from Brain Yield Schools, Salasala, Dar es Salaam.",
};

const featuredPost = {
  title: "100% Pass Rate in PESNO Grade Seven Mock Examination 2024",
  excerpt: "We are proud to announce that all Brain Yield Schools students passed across all subjects in the PESNO Grade Seven Mock Examination March 2024. Subjects include Kiswahili, Mathematics, Social Studies, English, Science, and Civic & Moral Education, with a school average of 39.097 marks. High percentages of students achieved top grades (A and B), reflecting our commitment to academic excellence and personalized learning.",
  date: "March 2024",
  category: "Achievements",
  image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1200&h=600&fit=crop",
};

const posts = [
  { title: "School Garden Project Launches", excerpt: "Students are fostering environmental awareness and teamwork through our new School Garden Project, learning sustainability and agriculture firsthand.", date: "February 2026", category: "Community", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" },
  { title: "New Computer Lab Fully Equipped", excerpt: "Our state-of-the-art computer lab is now fully operational, bringing digital learning opportunities to every student from Nursery to Secondary.", date: "January 2026", category: "News", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" },
  { title: "Admissions Now Open for 2026", excerpt: "Brain Yield Schools is now accepting applications for Nursery, Primary, and Secondary students. Both day and boarding options are available.", date: "January 2026", category: "Admissions", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" },
  { title: "Parent-Teacher Conference Success", excerpt: "Our recent PTA meeting brought together parents and educators to discuss student progress, new initiatives, and plans for the academic year.", date: "December 2025", category: "Events", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" },
  { title: "Sports Day & Cultural Celebration", excerpt: "Students celebrated diversity and sportsmanship through athletics, team sports, traditional dance, and cultural exhibitions at our annual event.", date: "November 2025", category: "Events", image: "https://images.unsplash.com/photo-1461896836934-bd45ba3b23e0?w=600&h=400&fit=crop" },
  { title: "Boarding Facilities Upgraded", excerpt: "We have improved our boarding dormitories with better supervision, improved facilities, and enhanced comfort for all boarding students.", date: "October 2025", category: "News", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop" },
];

const categories = ["All", "News", "Events", "Achievements", "Community", "Admissions"];

export default function NewsPage() {
  return (
    <>
      {/* Replace bgImage with your own: "/images/news-hero.jpg" */}
      <HeroSection
        title="News & Events"
        subtitle="Stay Informed"
        description="The latest happenings, achievements, and upcoming events at Brain Yield Schools, Salasala."
        bgImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1400&h=600&fit=crop"
      />

      {/* Featured Post */}
      <SectionWrapper>
        <div className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-border/50">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-6 left-6 rounded-full bg-secondary px-5 py-1.5 text-sm font-semibold text-white">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <span className="mb-2 text-sm font-medium text-secondary">{featuredPost.category}</span>
              <h2 className="mb-4 text-2xl font-bold text-text lg:text-3xl">{featuredPost.title}</h2>
              <p className="mb-6 text-text-light leading-relaxed">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-light">{featuredPost.date}</span>
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
            <button
              key={cat}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                cat === "All"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-text-light border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <NewsCard key={post.title} {...post} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
