import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import { getAboutPageContent, getCoreValues } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Brain Yield Schools at Salasala, Dar es Salaam — our history, mission, vision, and core values.",
  alternates: {
    canonical: "https://brainyieldschools.sc.tz/about",
  },
};

// Leadership Team section is temporarily removed from this page (no real
// staff photos yet — the `leadershipTeam` Sanity schema and its documents
// are untouched, so this can be reinstated later without re-entering data.
// See src/components/ProgramSlideshow.tsx-era commit history for the
// removed JSX if needed, or just re-fetch `leadershipTeam` and re-add the
// section below Core Values.

export default async function AboutPage() {
  const [about, values] = await Promise.all([
    getAboutPageContent(),
    getCoreValues(),
  ]);

  return (
    <>
      <HeroSection
        title={about.heroTitle}
        subtitle={about.heroSubtitle}
        description={about.heroDescription}
        bgImage={about.heroImageUrl || "/school%20pics/front%20view.webp"}
      />

      {/* History */}
      <SectionWrapper>
        <div className="grid gap-16 items-center lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">{about.historyTag}</p>
            <h2 className="text-3xl font-bold text-text md:text-4xl mb-6">{about.historyHeading}</h2>
            <div className="space-y-4 text-text-light leading-relaxed">
              {about.historyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={about.historyImageUrl || "/school%20pics/school%20buildings.webp"}
              alt="Brain Yield Schools campus"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-secondary px-8 py-6 text-white shadow-xl">
              <p className="text-4xl font-bold">{about.statBadgeNumber}</p>
              <p className="text-sm font-medium">{about.statBadgeLabel}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/* Mission & Vision */}
      <SectionWrapper bg="light">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-10 shadow-lg border border-border/50">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text">Our Mission</h3>
            <p className="text-text-light leading-relaxed">{about.missionText}</p>
          </div>
          <div className="rounded-2xl bg-white p-10 shadow-lg border border-border/50">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
              <Eye className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text">Our Vision</h3>
            <p className="text-text-light leading-relaxed">{about.visionText}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">What We Stand For</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Our Core Values</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = getIcon(value.icon);
            return (
              <div key={value.title} className="group rounded-2xl bg-bg p-8 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-text">{value.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{value.description}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
