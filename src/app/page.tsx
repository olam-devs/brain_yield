import Link from "next/link";
import {
  GraduationCap, BookOpen, Building2, Globe, Home as HomeIcon, Trophy,
  ClipboardList, Dumbbell, Mic2, Monitor, Award,
} from "lucide-react";
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
    title: "Pre-Primary",
    description: "Early childhood education for ages 3–5, focusing on literacy, numeracy, communication skills, and social development in a safe and nurturing environment. Available as Day and Boarding.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    href: "/academics#nursery",
  },
  {
    title: "Primary School",
    description: "Standards 1–7 following the Tanzanian National Curriculum. Strong foundation in English, Kiswahili, Mathematics, Science & Technology, Social Studies, and ICT — with preparation for the PSLE. Day and Boarding available.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    href: "/academics#primary",
  },
  {
    title: "Secondary School",
    description: "Forms 1–4 following the National O-Level Curriculum. Qualified and experienced teachers, Science and Arts subject combinations, and thorough preparation for the CSEE. Day and Boarding available.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=400&fit=crop",
    href: "/academics#secondary",
  },
];

const features = [
  { Icon: GraduationCap, title: "Dedicated Teachers", description: "Highly qualified and passionate educators committed to every student's success." },
  { Icon: BookOpen, title: "Personalized Learning", description: "Tailored educational approaches that meet each child where they are and help them excel." },
  { Icon: Building2, title: "Modern 4-Story Campus", description: "Spacious classrooms, equipped labs, and boarding dormitories in our state-of-the-art facility." },
  { Icon: Globe, title: "Holistic Development", description: "Academics, extracurriculars, and community engagement for well-rounded growth." },
  { Icon: HomeIcon, title: "Day & Boarding Options", description: "Flexible day and boarding arrangements to accommodate every family's needs." },
  { Icon: Trophy, title: "Proven Academic Results", description: "Consistently outstanding performance in national examinations with top grades across subjects." },
];

const testimonials = [
  { name: "Mrs. Sarah Mwangi", role: "Parent — Primary School", rating: 5, quote: "Brain Yield Schools has transformed my child's learning experience. The teachers are dedicated and the environment is truly nurturing. My daughter now looks forward to school every morning." },
  { name: "Joseph Kimaro", role: "Alumni — Form 4 Graduate", rating: 5, quote: "The foundation I received at Brain Yield prepared me well for my national examinations and beyond. The personalized attention from teachers made all the difference." },
  { name: "Mrs. Fatima Hassan", role: "Parent — Boarding Student", rating: 5, quote: "The boarding facilities are well-supervised and the holistic approach to education is remarkable. My children have grown academically, socially, and in character." },
];

const news = [
  { title: "Admissions Open for 2026 Academic Year", excerpt: "Brain Yield Schools is now accepting applications for Pre-Primary, Primary, and Secondary students for the 2026 academic year. Both day and boarding options are available. Early application is encouraged.", date: "February 2026", category: "Admissions", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" },
  { title: "ICT & Computer Lab Program Expansion", excerpt: "We are expanding our ICT and Computer Lab programs to bring enhanced digital learning opportunities to students across all levels, from Pre-Primary to Secondary.", date: "January 2026", category: "News", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" },
  { title: "Continued Strong National Examination Performance", excerpt: "Brain Yield Schools maintains its proud record of outstanding results in national examinations, with students achieving excellent grades across all subjects — a testament to our dedicated teachers and learners.", date: "March 2024", category: "Achievements", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop" },
];

const activities = [
  { Icon: ClipboardList, title: "Weekly Academic Assessments", description: "Regular assessments to monitor every student's progress and ensure they stay on track across all subjects." },
  { Icon: Dumbbell, title: "Sports & Athletics", description: "Structured sports programs that build teamwork, fitness, discipline, and a healthy competitive spirit." },
  { Icon: Mic2, title: "Debate & Academic Clubs", description: "Clubs that sharpen critical thinking, public speaking, and leadership skills through regular debates and competitions." },
  { Icon: Monitor, title: "ICT & Computer Training", description: "Regular computer sessions equipping students with essential digital literacy and technology skills for the modern world." },
  { Icon: Award, title: "Leadership & Character Seminars", description: "Dedicated programs that build integrity, responsibility, and leadership qualities in every learner." },
];

export default function Home() {
  return (
    <>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Stats */}
      <StatsCounter />

      {/* Welcome Introduction */}
      <SectionWrapper bg="light">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">About Us</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl mb-6">Welcome to Brain Yield Schools</h2>
          <p className="text-lg text-text-light leading-relaxed mb-4">
            Brain Yield Schools is a leading private educational institution located in Salasala, Kinondoni – Dar es Salaam, Tanzania.
            We offer quality education from Pre-Primary, Primary to Secondary levels, providing both Day and Boarding options.
          </p>
          <p className="text-text-light leading-relaxed">
            Our commitment is to nurture academic excellence, strong character, creativity, and leadership skills in every learner.
          </p>
        </div>
      </SectionWrapper>

      {/* Featured Programs */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Our Programs</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Pre-Primary to Secondary Education</h2>
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
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-secondary/15 group-hover:scale-110">
                <feature.Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-text">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-text-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* School Activities */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">School Life</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Regular School Activities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            A vibrant, structured school life that develops every student beyond the classroom.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity.title} className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <activity.Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-text">{activity.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
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
          <h2 className="text-3xl font-bold text-text md:text-4xl">Latest News & Updates</h2>
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
