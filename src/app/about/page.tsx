import type { Metadata } from "next";
import { Star, Shield, Lightbulb, Handshake, Sprout, Users, Target, Eye } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Brain Yield Schools at Salasala, Dar es Salaam — our history, mission, vision, core values, and leadership team.",
};

const values = [
  { Icon: Star, title: "Excellence", description: "We strive for the highest standards in everything we do, from teaching to character development." },
  { Icon: Shield, title: "Integrity", description: "We uphold honesty, transparency, and ethical behavior in all our interactions." },
  { Icon: Lightbulb, title: "Innovation", description: "We embrace modern approaches, digital learning, and creative thinking in education." },
  { Icon: Handshake, title: "Respect", description: "We value diversity and treat every member of our community with dignity." },
  { Icon: Sprout, title: "Responsibility", description: "We develop students who are accountable, caring, and socially conscious leaders." },
  { Icon: Users, title: "Community", description: "We foster teamwork, environmental awareness, and active engagement with the wider community." },
];

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
  const leaders = await getLeaders();
  return (
    <>
      <HeroSection
        title="About Brain Yield Schools"
        subtitle="Our Story — Salasala, Dar es Salaam"
        description="Building a legacy of educational excellence in Tanzania, shaping young minds and transforming futures through personalized learning."
        bgImage="/school%20pics/front%20view.PNG"
      />

      {/* History */}
      <SectionWrapper>
        <div className="grid gap-16 items-center lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Our Journey</p>
            <h2 className="text-3xl font-bold text-text md:text-4xl mb-6">A Growing Legacy of Excellence</h2>
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                Located at Best One Road, Salasala, Kinondoni, Dar es Salaam, Brain Yield Schools was
                founded with a powerful vision: to create a learning institution where every child could
                discover their unique potential and develop into a confident, responsible leader.
              </p>
              <p>
                From Nursery through Secondary education, we provide comprehensive programs with both
                day and boarding options. Our modern 4-story campus features spacious classrooms, fully
                equipped computer labs for digital learning, and well-supervised boarding dormitories.
              </p>
              <p>
                Our commitment to personalized learning has delivered remarkable results. In the PESNO
                Grade Seven Mock Examination (March 2024), all our students passed across all subjects
                — Kiswahili, Mathematics, Social Studies, English, Science, and Civic &amp; Moral Education
                — with high percentages achieving top grades (A and B).
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/school%20pics/school%20buildings.PNG"
              alt="Brain Yield Schools campus"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-secondary px-8 py-6 text-white shadow-xl">
              <p className="text-4xl font-bold">100%</p>
              <p className="text-sm font-medium">Pass Rate — PSLE 2024</p>
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
            <p className="text-text-light leading-relaxed">
              Every child to develop a curiosity of learning, discover their interests and grow 
              in love of learning.
              We also desire to have strong families through parent support / fellowship 
              and skills training.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-10 shadow-lg border border-border/50">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
              <Eye className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text">Our Vision</h3>
            <p className="text-text-light leading-relaxed">
              Excellent care to children while fostering each child's
              intellectual, social, physical and moral development in an academic-rich environment. 
            </p>
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
          {values.map((value) => (
            <div key={value.title} className="group rounded-2xl bg-bg p-8 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                <value.Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-text">{value.title}</h3>
              <p className="text-sm leading-relaxed text-text-light">{value.description}</p>
            </div>
          ))}
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
          {leaders.map((leader: any) => (
            <div key={leader.name} className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={leader.image && typeof leader.image === "object" ? urlFor(leader.image).width(400).height(400).url() : leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-text">{leader.name}</h4>
                <p className="mb-3 text-sm font-medium text-secondary">{leader.position}</p>
                <p className="text-xs leading-relaxed text-text-light">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
