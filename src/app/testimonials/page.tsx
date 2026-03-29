import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import { client } from "@/lib/sanity";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what parents, students, and alumni say about their experience at Brain Yield Schools.",
  alternates: {
    canonical: "https://brainyieldschools.sc.tz/testimonials",
  },
};

const fallbackTestimonials = [
  { name: "Mrs. Adunni Bakare", role: "Parent — Primary School", rating: 5, quote: "Brain Yield Schools has transformed my child's learning experience. The teachers are dedicated and the environment is truly nurturing. My daughter now looks forward to school every morning." },
  { name: "David Okonkwo", role: "Alumni — Class of 2020", rating: 5, quote: "The foundation I received at Brain Yield prepared me for university and beyond. The critical thinking skills and values instilled in me continue to guide my academic journey." },
  { name: "Mrs. Fatima Hassan", role: "Parent — Secondary School", rating: 5, quote: "The holistic approach to education here is remarkable. My children have grown academically, socially, and in character. The school truly lives up to its promise of nurturing excellence." },
  { name: "Chinedu Nwosu", role: "Alumni — Class of 2019", rating: 5, quote: "Brain Yield gave me the confidence to pursue my dreams. The teachers believed in me even when I doubted myself. Today, I'm studying engineering at a top university, and I owe it to my foundation here." },
  { name: "Mrs. Blessing Ogundimu", role: "Parent — Pre-School", rating: 4, quote: "Watching my 3-year-old thrive at Brain Yield has been a joy. The pre-school program is exceptional — creative, engaging, and perfectly paced for young learners." },
  { name: "Amara Eze", role: "Current Student — SS2", rating: 5, quote: "I love how our school encourages us to think beyond textbooks. The debate club, science fairs, and leadership programs have shaped me into a more confident person." },
  { name: "Mr. Tunde Adeleke", role: "Parent — Primary & Secondary", rating: 5, quote: "We've had two children go through Brain Yield, and the consistency of quality education has been impressive. The investment in our children's future has been worth every penny." },
  { name: "Ngozi Obi", role: "Alumni — Class of 2021", rating: 5, quote: "The STEM program at Brain Yield was ahead of its time. Learning coding and robotics in secondary school gave me a massive head start in my computer science degree." },
  { name: "Mrs. Aisha Yusuf", role: "Parent — Pre-School", rating: 5, quote: "The care and attention given to the youngest learners is outstanding. The teachers are patient, loving, and professional. My child has blossomed since joining Brain Yield." },
];

async function getTestimonials() {
  try {
    const results = await client.fetch(
      `*[_type == "testimonial"] | order(_createdAt asc) { name, role, quote, rating }`
    );
    return results.length > 0 ? results : fallbackTestimonials;
  } catch {
    return fallbackTestimonials;
  }
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      <HeroSection
        title="Testimonials"
        subtitle="Voices of Our Community"
        description="Hear from the parents, students, and alumni who make Brain Yield Schools a vibrant learning community."
        bgImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&h=600&fit=crop"
      />
      <SectionWrapper>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t: { name: string; role: string; quote: string; rating: number }) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
