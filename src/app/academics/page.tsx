import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import { getPrograms, getSiteSettings } from "@/lib/content";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Academic Programs",
  description: "Explore Brain Yield Schools' academic programs — Nursery, Primary, and Secondary education with day and boarding options in Dar es Salaam.",
  alternates: {
    canonical: "https://brainyieldschools.sc.tz/academics",
  },
};

export default async function AcademicsPage() {
  const [programs, settings] = await Promise.all([getPrograms(), getSiteSettings()]);

  return (
    <>
      <HeroSection
        title="Academic Programs"
        subtitle="Nursery to Secondary — Day & Boarding"
        description="Comprehensive, personalized programs designed to nurture intellectual curiosity, build character, and prepare students for national examinations and beyond."
        bgImage="/school%20pics/school%20view%201.jpg"
      />

      {/* Academic Performance Highlight */}
      <SectionWrapper>
        <div className="rounded-3xl bg-gradient-to-r from-secondary/10 to-primary/10 p-8 md:p-12 text-center border border-secondary/20">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-secondary">{settings.performanceHighlightTag}</p>
          <h2 className="text-2xl font-bold text-text md:text-3xl mb-4">{settings.performanceHighlightHeading}</h2>
          <p className="mx-auto max-w-3xl text-text-light leading-relaxed">{settings.performanceHighlightText}</p>
        </div>
      </SectionWrapper>

      {programs.map((program, index) => (
        <SectionWrapper key={program.slug} id={program.slug} bg={index % 2 === 0 ? "light" : "white"}>
          <div className={`grid gap-16 items-center lg:grid-cols-2`}>
            <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">{program.subtitle}</p>
              <h2 className="text-3xl font-bold text-text md:text-4xl mb-4">{program.title}</h2>
              <span className="inline-block mb-6 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                {program.optionText}
              </span>
              <p className="mb-8 text-text-light leading-relaxed text-lg">{program.description}</p>
              {program.curriculum.length > 0 && (
                <>
                  <h4 className="mb-4 text-lg font-semibold text-text">Curriculum Highlights</h4>
                  <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                    {program.curriculum.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-text-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <Link
                href="/admissions"
                className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:-translate-y-0.5"
              >
                Apply for {program.title}
              </Link>
            </div>
            <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
              <div className="relative">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-secondary/30 -z-10" />
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}

      <CTABanner />
    </>
  );
}
