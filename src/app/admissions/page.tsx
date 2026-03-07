import type { Metadata } from "next";
import { Building2, Home, Phone, Mail, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Apply to Brain Yield Schools at Salasala, Dar es Salaam — Nursery, Primary, and Secondary admission with day and boarding options.",
};

const steps = [
  { step: "01", title: "Collect Admission Form", description: "Obtain an admission form at the school campus at Salasala, Kinondoni, or request one through the Admission Office." },
  { step: "02", title: "Submit Documents", description: "Complete and return the admission form together with required documents: a copy of the birth certificate, passport-size photos, and previous academic reports." },
  { step: "03", title: "Pay Registration Fee", description: "Complete the registration process by paying the required registration fee at the school office." },
  { step: "04", title: "Receive Confirmation", description: "Successful applicants will receive their admission confirmation letter with full enrollment details from our admissions team." },
];

const requirements = [
  "Completed admission form",
  "Copy of birth certificate",
  "Passport-size photographs",
  "Previous academic reports / school reports",
];

const fees = [
  { program: "Pre-Primary (Ages 3–5)", dayTuition: "Contact School", boardingTuition: "Contact School", total: "Contact School" },
  { program: "Primary (Standard 1–7)", dayTuition: "Contact School", boardingTuition: "Contact School", total: "Contact School" },
  { program: "Secondary (Form 1–4)", dayTuition: "Contact School", boardingTuition: "Contact School", total: "Contact School" },
];

const faqs = [
  { question: "Does the school offer both Day and Boarding?", answer: "Yes, Brain Yield Schools offers both Day and Boarding options at Pre-Primary, Primary, and Secondary levels. Boarding students reside in well-supervised, secure dormitories on campus." },
  { question: "Are admissions open throughout the year?", answer: "Admissions are open depending on space availability. Early application is encouraged to secure a place for your child." },
  { question: "Does the school provide transport?", answer: "Yes, school transport services are available for Day students in selected areas, offering safe and reliable routes." },
  { question: "What curriculum does the school follow?", answer: "Brain Yield Schools follows the Tanzanian National Curriculum across all levels — Pre-Primary, Primary (Standard 1–7), and Secondary (Form 1–4, O-Level)." },
  { question: "Are extracurricular activities offered?", answer: "Yes. Students actively participate in sports and athletics, debate and academic clubs, ICT and computer training sessions, and leadership and character-building seminars." },
];

export default function AdmissionsPage() {
  return (
    <>
      <HeroSection
        title="Admissions"
        subtitle="Now Enrolling — Pre-Primary, Primary & Secondary"
        description="Begin your child's journey to excellence. Day and boarding options available. Our admissions process is simple, transparent, and welcoming."
        bgImage="/school%20pics/Main%20gate.PNG"
      />

      {/* Admission Process */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">How It Works</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Admission Process</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              src="/school%20pics/school%20view%209.jpg"
              alt="Brain Yield Schools campus"
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
            For detailed fee information, contact us at <strong className="text-text">+255 754 947 370</strong>, <strong className="text-text">+255 755 394 008</strong>, or <strong className="text-text">+255 684 071 399</strong>
          </p>
          <p className="text-sm text-text-light">
            Email: <strong className="text-text">brainyieldschools@gmail.com</strong>
          </p>
        </div>
      </SectionWrapper>

      {/* Day & Boarding */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Flexible Options</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl">Day & Boarding School</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            We offer both Day and Boarding options at Pre-Primary, Primary, and Secondary levels — designed to accommodate every family&apos;s needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Day School */}
          <div className="rounded-2xl bg-white p-10 shadow-lg border border-border/50">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text">Day School</h3>
            <p className="mb-6 text-text-light leading-relaxed">Students attending as Day Scholars enjoy a structured and supportive academic experience each day.</p>
            <ul className="space-y-3">
              {[
                "Structured daily academic schedule",
                "Supervised study sessions",
                "Participation in clubs and sports",
                "School transport services available on selected routes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Boarding School */}
          <div className="rounded-2xl bg-white p-10 shadow-lg border border-border/50">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
              <Home className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text">Boarding School</h3>
            <p className="mb-6 text-text-light leading-relaxed">Boarding students thrive in a secure, well-supervised environment that promotes discipline and independence.</p>
            <ul className="space-y-3">
              {[
                "Secure and well-supervised dormitories",
                "Balanced and nutritious meal programs",
                "Evening prep and academic support sessions",
                "24/7 pastoral care and supervision",
                "Structured daily routine for discipline and independence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Admission Office Contact */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Get In Touch</p>
            <h2 className="text-3xl font-bold text-text md:text-4xl">Admission Office Contact</h2>
            <p className="mt-4 text-text-light">Reach our dedicated Admissions team directly for enquiries, form requests, and any questions.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            <div className="rounded-2xl bg-bg p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-3 font-bold text-text">Phone / WhatsApp</h4>
              <p className="text-sm text-text-light">+255 754 947 370</p>
              <p className="text-sm text-text-light">+255 755 394 008</p>
              <p className="text-sm text-text-light">+255 684 071 399</p>
            </div>
            <div className="rounded-2xl bg-bg p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-3 font-bold text-text">Email</h4>
              <p className="text-sm text-text-light break-all">brainyieldschools@gmail.com</p>
            </div>
            <div className="rounded-2xl bg-bg p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-3 font-bold text-text">Location</h4>
              <p className="text-sm text-text-light">Salasala, Kinondoni</p>
              <p className="text-sm text-text-light">Dar es Salaam, Tanzania</p>
            </div>
          </div>
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
