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
  image: "/school%20pics/IMG_5977.jpg",
};

const posts = [
  { title: "Admissions Open for 2026 Academic Year", excerpt: "Brain Yield Schools is now accepting applications for Pre-Primary, Primary, and Secondary students for the 2026 academic year. Both day and boarding options are available. Early application is strongly encouraged to secure your child's place.", date: "February 2026", category: "Admissions", image: "/school%20pics/Main%20gate.PNG" },
  { title: "Ongoing Improvement of Learning Facilities", excerpt: "We continue to invest in our campus, upgrading classrooms, dormitories, and common areas to provide the best possible learning environment for every student at Brain Yield Schools.", date: "February 2026", category: "News", image: "/school%20pics/school%20buildings.PNG" },
  { title: "Expansion of ICT & Computer Lab Programs", excerpt: "Our ICT programs continue to grow with the expansion of computer lab facilities across all levels. Every student from Pre-Primary to Secondary now benefits from enhanced digital learning and computer training sessions.", date: "January 2026", category: "News", image: "/school%20pics/IMG_6417.jpg" },
  { title: "Continued Strong National Examination Performance", excerpt: "Brain Yield Schools maintains its proud record of outstanding national examination results. Students continue to achieve excellent grades, reflecting the dedication of our teachers and the determination of our learners.", date: "March 2024", category: "Achievements", image: "/school%20pics/IMG_5966.jpg" },
  { title: "Parent-Teacher Conference Success", excerpt: "Our recent PTA meeting brought together parents and educators to discuss student progress, new initiatives, and plans for the academic year ahead.", date: "December 2025", category: "Events", image: "/school%20pics/front%20view.PNG" },
  { title: "Sports Day & Cultural Celebration", excerpt: "Students celebrated diversity and sportsmanship through athletics, team sports, traditional dance, and cultural exhibitions at our annual Sports Day event.", date: "November 2025", category: "Events", image: "/school%20pics/sports%20-%20football.PNG" },
];

const categories = ["All", "Admissions", "News", "Achievements", "Events"];

export default function NewsPage() {
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
