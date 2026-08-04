import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import { client, urlFor } from "@/lib/sanity";
import { getAboutPageContent, getCoreValues } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Brain Yield Schools at Salasala, Dar es Salaam — our history, mission, vision, core values, and leadership team.",
  alternates: {
    canonical: "https://brainyieldschools.sc.tz/about",
  },
};

const fallbackLeaders = [
  { name: "School Director", position: "Founder / Director", bio: "Our founder established Brain Yield Schools with a vision to create a quality learning institution at Salasala that nurtures every child's potential and builds confident, responsible leaders.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face" },
  { name: "Head of Academics", position: "Academic Director", bio: "Overseeing curriculum development and ensuring academic excellence across Nursery, Primary, and Secondary programs with personalized learning approaches.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face" },
  { name: "Head of Administration", position: "Administrative Director", bio: "Ensuring smooth operations, safe boarding facilities, and a conducive learning environment across our 4-story campus.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
  { name: "Head of Student Affairs", position: "Student Welfare Director", bio: "Coordinating extracurricular activities, boarding supervision, the School Garden Project, and holistic student development programs.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face" },
];

async function getLeaders() {
  try {
    const results = await client.fetch(
      `*[_type == "leadershipTeam"] | order(order asc) { name, position, bio, image }`
    );
    return results.length > 0 ? results : fallbackLeaders;
  } catch {
    return fallbackLeaders;
  }
}

export default async function AboutPage() {
  const [about, values, leaders] = await Promise.all([
    getAboutPageContent(),
    getCoreValues(),
    getLeaders(),
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

      {/* Leadership Team */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Meet Our Team</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Leadership Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Experienced educators and administrators dedicated to providing the best learning experience.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {leaders.map((leader: any) => {
            const photoUrl = leader.image && typeof leader.image === "object"
              ? urlFor(leader.image).width(400).height(400).url()
              : leader.image;
            const initials = leader.name.split(" ").map((w: string) => w[0]).slice(0, 2).join("");
            return (
              <div key={leader.name} className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/50">
                <div className="relative h-64 overflow-hidden">
                  {photoUrl ? (
                    <img
                      src={photoUrl}
                      alt={leader.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/10">
                      <span className="text-4xl font-bold text-primary/40">{initials}</span>
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-text">{leader.name}</h4>
                  <p className="mb-3 text-sm font-medium text-secondary">{leader.position}</p>
                  <p className="text-xs leading-relaxed text-text-light">{leader.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
