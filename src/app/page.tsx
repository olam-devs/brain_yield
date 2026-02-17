import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import StatsCounter from "@/components/StatsCounter";
import SectionWrapper from "@/components/SectionWrapper";
import TestimonialCard from "@/components/TestimonialCard";
import NewsCard from "@/components/NewsCard";
import CTABanner from "@/components/CTABanner";

/*
 * ===========================================
 * HOW TO REPLACE IMAGES:
 * Update image URLs below with your own paths.
 * Place images in /public/images/ folder, then use:
 *   image: "/images/your-image.jpg"
 * ===========================================
 */

const programs = [
  {
    title: "Nursery",
    description: "Early childhood development for ages 3–5, focusing on play-based learning, foundational skills, and nurturing curiosity in a safe environment.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    href: "/academics#nursery",
  },
  {
    title: "Primary School",
    description: "Standards 1–7, emphasizing core subjects, character development, and thorough preparation for secondary education with personalized learning.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    href: "/academics#primary",
  },
  {
    title: "Secondary School",
    description: "Forms 1–6, preparing students for national examinations and higher education with modern facilities, dedicated teachers, and career guidance.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=400&fit=crop",
    href: "/academics#secondary",
  },
];

const features = [
  { icon: "🎓", title: "Dedicated Teachers", description: "Highly qualified and passionate educators committed to every student's success." },
  { icon: "📚", title: "Personalized Learning", description: "Tailored educational approaches that meet each child where they are and help them excel." },
  { icon: "🏫", title: "Modern 4-Story Campus", description: "Spacious classrooms, equipped labs, and boarding dormitories in our state-of-the-art facility." },
  { icon: "🌍", title: "Holistic Development", description: "Academics, extracurriculars, and community engagement for well-rounded growth." },
  { icon: "🏠", title: "Day & Boarding Options", description: "Flexible day and boarding arrangements to accommodate every family's needs." },
  { icon: "🏆", title: "Proven Academic Results", description: "Consistently outstanding performance in national examinations with top grades across subjects." },
];

const testimonials = [
  { name: "Mrs. Sarah Mwangi", role: "Parent — Primary School", rating: 5, quote: "Brain Yield Schools has transformed my child's learning experience. The teachers are dedicated and the environment is truly nurturing. My daughter now looks forward to school every morning." },
  { name: "Joseph Kimaro", role: "Alumni — Form 4 Graduate", rating: 5, quote: "The foundation I received at Brain Yield prepared me well for my national examinations and beyond. The personalized attention from teachers made all the difference." },
  { name: "Mrs. Fatima Hassan", role: "Parent — Boarding Student", rating: 5, quote: "The boarding facilities are well-supervised and the holistic approach to education is remarkable. My children have grown academically, socially, and in character." },
];

const news = [
  { title: "Outstanding PSLE Results 2024", excerpt: "All students passed across all subjects in the PESNO Grade Seven Mock Examination, with top grades in Kiswahili, Mathematics, Science, and English.", date: "March 2024", category: "Achievements", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop" },
  { title: "New Computer Lab Grand Opening", excerpt: "We are thrilled to unveil our fully equipped computer lab for digital learning, bringing modern technology to every student.", date: "January 2026", category: "News", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" },
  { title: "School Garden Project Launch", excerpt: "Students are fostering environmental awareness and teamwork through our new School Garden Project, learning sustainability firsthand.", date: "February 2026", category: "Community", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" },
];

export default function Home() {
  return (
    <>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Stats */}
      <StatsCounter />

      {/* Featured Programs */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Our Programs</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Nursery to Secondary Education</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Comprehensive programs with both day and boarding options, designed to nurture every stage of your child&apos;s development.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border/50">
              <div className="relative h-56 overflow-hidden">
                <img src={program.image} alt={program.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{program.title}</h3>
              </div>
              <div className="p-8">
                <p className="mb-6 text-text-light leading-relaxed">{program.description}</p>
                <Link href={program.href} className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-secondary">
                  Learn More
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Why Brain Yield</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Why Choose Our School</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            We go beyond academics to develop well-rounded individuals ready for the future.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group rounded-2xl bg-bg p-8 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl transition-all duration-300 group-hover:bg-secondary/15 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-text">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-text-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Testimonials</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">What Parents & Students Say</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/testimonials" className="inline-flex items-center rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white">
            View All Testimonials
          </Link>
        </div>
      </SectionWrapper>

      {/* Latest News */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Stay Updated</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Latest News & Events</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/news" className="inline-flex items-center rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white">
            View All News
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
