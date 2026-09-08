import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import StatsCounter from "@/components/StatsCounter";
import SectionWrapper from "@/components/SectionWrapper";
import TestimonialCard from "@/components/TestimonialCard";
import NewsCard from "@/components/NewsCard";
import CTABanner from "@/components/CTABanner";
import { getIcon } from "@/lib/icons";
import {
  getSiteSettings,
  getHomePageContent,
  getHeroSlides,
  getPrograms,
  getFeatureItems,
  getActivityItems,
  getEvents,
} from "@/lib/content";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 3600;

async function getHomeTestimonials() {
  try {
    const results = await client.fetch(
      `*[_type == "testimonial"] | order(_createdAt asc)[0...3] { name, role, quote, rating }`
    );
    if (results?.length) return results;
  } catch {
    // fall through to default
  }
  return [
    { name: "Mrs. Sarah Mwangi", role: "Parent — Primary School", rating: 5, quote: "Brain Yield Schools has transformed my child's learning experience. The teachers are dedicated and the environment is truly nurturing. My daughter now looks forward to school every morning." },
    { name: "Joseph Kimaro", role: "Alumni — Form 4 Graduate", rating: 5, quote: "The foundation I received at Brain Yield prepared me well for my national examinations and beyond. The personalized attention from teachers made all the difference." },
    { name: "Mrs. Fatima Hassan", role: "Parent — Boarding Student", rating: 5, quote: "The boarding facilities are well-supervised and the holistic approach to education is remarkable. My children have grown academically, socially, and in character." },
  ];
}

async function getHomeNews() {
  try {
    const results = await client.fetch(
      `*[_type == "news"] | order(publishedAt desc)[0...3] { title, excerpt, category, image, publishedAt }`
    );
    if (results?.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return results.map((item: any) => ({
        title: item.title,
        excerpt: item.excerpt || "",
        date: item.publishedAt
          ? new Date(item.publishedAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" })
          : "",
        category: item.category || "News",
        image: item.image ? urlFor(item.image).width(800).url() : "/school%20pics/IMG_5977.webp",
      }));
    }
  } catch {
    // fall through to default
  }
  return [
    { title: "Admissions Open for 2026 Academic Year", excerpt: "Brain Yield Schools is now accepting applications for Pre-Primary, Primary, and Secondary students for the 2026 academic year. Both day and boarding options are available. Early application is encouraged.", date: "February 2026", category: "Admissions", image: "/school%20pics/Main%20gate.webp" },
    { title: "ICT & Computer Lab Program Expansion", excerpt: "We are expanding our ICT and Computer Lab programs to bring enhanced digital learning opportunities to students across all levels, from Pre-Primary to Secondary.", date: "January 2026", category: "News", image: "/school%20pics/IMG_6410.webp" },
    { title: "PSLE 2024 Results — 100% Pass Rate", excerpt: "Brain Yield Schools achieved a 100% pass rate in the 2024 Primary School Leaving Examination (PSLE). View our official NECTA results and celebrate this outstanding achievement with us.", date: "March 2024", category: "Achievements", image: "/school%20pics/IMG_5966.webp", href: "https://onlinesys.necta.go.tz/results/2024/psle/results/shl_ps0203170.htm" },
  ];
}

export default async function Home() {
  const [settings, home, slides, allPrograms, features, activities, testimonials, news, events] = await Promise.all([
    getSiteSettings(),
    getHomePageContent(),
    getHeroSlides(),
    getPrograms(),
    getFeatureItems(),
    getActivityItems(),
    getHomeTestimonials(),
    getHomeNews(),
    getEvents(),
  ]);

  const programs = allPrograms.filter((p) => p.showOnHome).slice(0, 3);

  return (
    <>
      {/* Hero Slideshow */}
      <HeroSlideshow slides={slides} tagline={`Welcome to ${settings.schoolName} — ${settings.addressLocality}, ${settings.addressRegion}`} />

      {/* Stats */}
      <StatsCounter stats={settings.stats} />

      {/* Welcome Introduction */}
      <SectionWrapper bg="light">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">{home.welcomeTag}</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl mb-6">{home.welcomeHeading}</h2>
          <p className="text-lg text-text-light leading-relaxed mb-4">{home.welcomeParagraph1}</p>
          <p className="text-text-light leading-relaxed">{home.welcomeParagraph2}</p>
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
                <img src={program.imageUrl} alt={program.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{program.title}</h3>
              </div>
              <div className="p-8">
                <p className="mb-6 text-text-light leading-relaxed">{program.homeSummary}</p>
                <Link href={`/academics#${program.slug}`} className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-secondary">
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
          {features.map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <div key={feature.title} className="group rounded-2xl bg-bg p-8 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-secondary/15 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-text">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{feature.description}</p>
              </div>
            );
          })}
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
          {activities.map((activity) => {
            const Icon = getIcon(activity.icon);
            return (
              <div key={activity.title} className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-text">{activity.title}</h3>
                  <p className="text-sm leading-relaxed text-text-light">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Events & Activities */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Events & Activities</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Upcoming & Past School Events</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Stay updated with our vibrant campus life, academic competitions, sports days, and special celebrations.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <NewsCard key={event.title} title={event.title} excerpt={event.excerpt} date={event.date} category="Event" image={event.imageUrl} />
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
          {testimonials.map((t: { name: string; role: string; quote: string; rating: number }) => (
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
          {news.map((item: { title: string; excerpt: string; date: string; category: string; image: string; href?: string }) => (
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
      <CTABanner
        heading={home.ctaHeading}
        description={home.ctaDescription}
        imageUrl={home.ctaImageUrl}
        button1Text={home.ctaButton1Text}
        button2Text={home.ctaButton2Text}
      />
    </>
  );
}
