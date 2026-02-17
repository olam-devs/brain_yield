import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Apply to Brain Yield Schools in Salasala, Dar es Salaam — Nursery, Primary, and Secondary admission with day and boarding options.",
};

const steps = [
  { step: "01", title: "Inquiry", description: "Contact us via phone (0754 947 370 / 0755 394 008), email, or visit our campus at Best One Road, Salasala." },
  { step: "02", title: "Application", description: "Complete the online application form or collect one from our office. Submit all required documents." },
  { step: "03", title: "Assessment", description: "Students undergo an age-appropriate assessment to determine readiness and placement level." },
  { step: "04", title: "Interview", description: "Parents and students meet with our admissions team for a brief interview and campus tour." },
  { step: "05", title: "Admission Offer", description: "Successful applicants receive an admission letter with enrollment details and fee information." },
  { step: "06", title: "Enrollment", description: "Complete registration, pay fees, choose day or boarding option, and prepare for an exciting learning journey!" },
];

const requirements = [
  "Completed application form",
  "Birth certificate (original and photocopy)",
  "Previous school reports / transcripts",
  "Transfer certificate (if applicable)",
  "4 recent passport photographs",
  "Immunization records",
  "Parent/Guardian identification",
  "Assessment / entrance results",
];

const fees = [
  { program: "Nursery (Ages 3–5)", dayTuition: "Contact School", boardingTuition: "—", total: "Contact School" },
  { program: "Primary (Std 1–7)", dayTuition: "Contact School", boardingTuition: "Contact School", total: "Contact School" },
  { program: "Secondary (Form 1–6)", dayTuition: "Contact School", boardingTuition: "Contact School", total: "Contact School" },
];

const faqs = [
  { question: "What is the admission process timeline?", answer: "The entire admission process typically takes 1-2 weeks from application submission to enrollment confirmation. Admissions are currently open for Nursery, Primary, and Secondary students." },
  { question: "Do you offer both day and boarding?", answer: "Yes! We offer flexible day and boarding options to accommodate different family needs. Boarding students stay in our well-supervised dormitories on campus." },
  { question: "Is there an entrance exam?", answer: "Yes, all applicants undergo an age-appropriate assessment. For Nursery, this is an informal readiness evaluation. For Primary and Secondary, it includes tests in core subjects." },
  { question: "Can my child join mid-term?", answer: "Mid-term admissions are considered on a case-by-case basis depending on available spaces. Please contact our admissions office at 0754 947 370 to discuss." },
  { question: "What are the school hours?", answer: "School hours are Monday to Friday, 7:30 AM to 3:00 PM. After-school activities run until 4:30 PM. Boarding students have supervised evening study sessions." },
  { question: "How can I visit the campus?", answer: "We welcome campus visits! You can visit us at Best One Road, Salasala, Kinondoni, Dar es Salaam. Call us at 0754 947 370 or 0755 394 008 to schedule a tour." },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Replace bgImage with your own: "/images/admissions-hero.jpg" */}
      <HeroSection
        title="Admissions"
        subtitle="Now Enrolling — Nursery, Primary & Secondary"
        description="Begin your child's journey to excellence. Day and boarding options available. Our admissions process is simple, transparent, and welcoming."
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1400&h=600&fit=crop"
      />

      {/* Admission Process */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">How It Works</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Admission Process</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="group relative rounded-2xl bg-bg p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <span className="mb-4 block text-5xl font-extrabold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.step}
              </span>
              <h3 className="mb-3 text-xl font-bold text-text">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-light">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Requirements */}
      <SectionWrapper bg="light">
        <div className="grid gap-16 items-center lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">What You Need</p>
            <h2 className="text-3xl font-bold text-text md:text-4xl mb-8">Admission Requirements</h2>
            <ul className="space-y-4">
              {requirements.map((req) => (
                <li key={req} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success/10">
                    <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-light">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=500&fit=crop"
              alt="Students at Brain Yield Schools"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Fee Structure */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Investment in Education</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Fee Structure</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">Contact us for detailed fee information for each program and option.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-8 py-5 text-left text-sm font-semibold">Program</th>
                  <th className="px-8 py-5 text-left text-sm font-semibold">Day Option</th>
                  <th className="px-8 py-5 text-left text-sm font-semibold">Boarding Option</th>
                  <th className="px-8 py-5 text-left text-sm font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, i) => (
                  <tr key={fee.program} className={`${i % 2 === 0 ? "bg-white" : "bg-bg"} border-t border-border/50`}>
                    <td className="px-8 py-5 font-semibold text-text">{fee.program}</td>
                    <td className="px-8 py-5 text-text-light">{fee.dayTuition}</td>
                    <td className="px-8 py-5 text-text-light">{fee.boardingTuition}</td>
                    <td className="px-8 py-5 font-medium text-primary">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-text-light">
            For detailed fee information, contact us at <strong className="text-text">0754 947 370</strong> or <strong className="text-text">0755 394 008</strong>
          </p>
          <p className="text-sm text-text-light">
            Email: <strong className="text-text">brainyieldschools@gmail.com</strong>
          </p>
        </div>
      </SectionWrapper>

      {/* Application Form */}
      <SectionWrapper bg="light">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Get Started</p>
            <h2 className="text-3xl font-bold text-text md:text-4xl">Online Inquiry Form</h2>
            <p className="mt-4 text-text-light">Fill out the form below and our admissions team will get in touch.</p>
          </div>
          <div className="rounded-2xl bg-white p-8 md:p-12 shadow-lg border border-border/50">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Got Questions?</p>
            <h2 className="text-3xl font-bold text-text md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </SectionWrapper>
    </>
  );
}
