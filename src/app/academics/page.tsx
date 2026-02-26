import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Academic Programs",
  description: "Explore Brain Yield Schools' academic programs — Nursery, Primary, and Secondary education with day and boarding options in Dar es Salaam.",
};

const programs = [
  {
    id: "nursery",
    title: "Pre-Primary (Nursery & Kindergarten)",
    subtitle: "Ages 3 – 5",
    description: "Our Pre-Primary program provides a safe, warm, and nurturing environment where young learners develop foundational skills. We focus on early literacy, numeracy, communication skills, and social development — giving every child the strong start they deserve.",
    curriculum: [
      "Early literacy and reading readiness",
      "Numeracy and number awareness",
      "Communication and language skills",
      "Social and emotional development",
      "Creative arts, music, and movement",
      "Physical development and motor skills",
      "Kiswahili and English foundations",
      "Environmental and nature awareness",
    ],
    option: "Day & Boarding options available",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=700&h=500&fit=crop",
  },
  {
    id: "primary",
    title: "Primary School",
    subtitle: "Standard 1 – 7",
    description: "Our Primary program follows the Tanzanian National Curriculum and builds strong academic foundations across all core subjects. We integrate ICT into learning and thoroughly prepare students for the Primary School Leaving Examination (PSLE), with both Day and Boarding options available.",
    curriculum: [
      "English Language",
      "Kiswahili Language",
      "Mathematics",
      "Science and Technology",
      "Social Studies",
      "Civic and Moral Education",
      "ICT and Computer Studies",
      "Creative and Cultural Arts",
    ],
    option: "Day & Boarding options available",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&h=500&fit=crop",
  },
  {
    id: "secondary",
    title: "Secondary School",
    subtitle: "Form 1 – 4 (O-Level)",
    description: "Our Secondary program follows the National O-Level Curriculum. With qualified and experienced teachers, we offer Science and Arts subject combinations and provide thorough preparation for the Certificate of Secondary Education Examination (CSEE). Both Day and Boarding options are available.",
    curriculum: [
      "Kiswahili and English Language",
      "Mathematics",
      "Physics, Chemistry, and Biology",
      "History and Geography",
      "Civics and General Studies",
      "Computer Science and ICT",
      "Commerce and Book Keeping",
      "Career Guidance and Counseling",
    ],
    option: "Day & Boarding options available",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=700&h=500&fit=crop",
  },
];

export default function AcademicsPage() {
  return (
    <>
      {/* Replace bgImage with your own: "/images/academics-hero.jpg" */}
      <HeroSection
        title="Academic Programs"
        subtitle="Nursery to Secondary — Day & Boarding"
        description="Comprehensive, personalized programs designed to nurture intellectual curiosity, build character, and prepare students for national examinations and beyond."
        bgImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1400&h=600&fit=crop"
      />

      {/* Academic Performance Highlight */}
      <SectionWrapper>
        <div className="rounded-3xl bg-gradient-to-r from-secondary/10 to-primary/10 p-8 md:p-12 text-center border border-secondary/20">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-secondary">Proven Results</p>
          <h2 className="text-2xl font-bold text-text md:text-3xl mb-4">100% Pass Rate — PESNO Mock Examination 2024</h2>
          <p className="mx-auto max-w-3xl text-text-light leading-relaxed">
            All students passed across all subjects including Kiswahili, Mathematics, Social Studies,
            English, Science, and Civic &amp; Moral Education, with a school average of 39.097 marks.
            High percentages of students achieved top grades (A and B), reflecting consistent academic excellence.
          </p>
        </div>
      </SectionWrapper>

      {programs.map((program, index) => (
        <SectionWrapper key={program.id} id={program.id} bg={index % 2 === 0 ? "light" : "white"}>
          <div className={`grid gap-16 items-center lg:grid-cols-2`}>
            <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">{program.subtitle}</p>
              <h2 className="text-3xl font-bold text-text md:text-4xl mb-4">{program.title}</h2>
              <span className="inline-block mb-6 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                {program.option}
              </span>
              <p className="mb-8 text-text-light leading-relaxed text-lg">{program.description}</p>
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
                  src={program.image}
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
