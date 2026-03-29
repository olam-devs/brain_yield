import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Explore Brain Yield Schools' modern facilities — 4-story building, computer labs, boarding dormitories, and more in Salasala, Dar es Salaam.",
  alternates: {
    canonical: "https://brainyieldschools.sc.tz/facilities",
  },
};

const facilities = [
  { title: "4-Story Campus Building", description: "Our impressive 4-story building houses spacious, well-ventilated classrooms equipped with modern teaching aids and comfortable furniture designed for optimal learning.", image: "/school%20pics/IMG_6061.jpg" },
  { title: "Computer Laboratory", description: "Fully equipped computer lab for digital learning, providing students with hands-on experience in ICT, programming, and research from an early age.", image: "/school%20pics/IMG_6381.jpg" },
  { title: "Boarding Dormitories", description: "Well-supervised boarding dormitories with proper facilities and care, providing a safe and comfortable home-away-from-home for boarding students.", image: "/school%20pics/IMG_6354.jpg" },
  { title: "Science Laboratory", description: "Equipped science lab for hands-on experimental learning in physics, chemistry, and biology, bringing scientific concepts to life.", image: "/school%20pics/IMG_6300.jpg" },
  { title: "Library & Resource Center", description: "A growing library with textbooks, reference materials, and reading resources to support academic research and cultivate a love for reading.", image: "/school%20pics/IMG_6262.jpg" },
  { title: "School Garden", description: "Our School Garden Project fosters environmental awareness and teamwork, giving students hands-on experience in sustainability and agriculture.", image: "/school%20pics/IMG_6092.jpg" },
];

export default function FacilitiesPage() {
  return (
    <>
      <HeroSection
        title="Our Facilities"
        subtitle="Modern Campus — Salasala, Dar es Salaam"
        description="A 4-story campus with modern classrooms, computer labs, boarding dormitories, and more — designed for the best learning experience."
        bgImage="/school%20pics/school%20view%204.jpg"
      />

      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">What We Offer</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Campus Facilities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Our campus at Best One Road, Salasala is designed to inspire learning, creativity, and holistic development.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div key={facility.title} className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border/50">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-xl font-bold text-text">{facility.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
