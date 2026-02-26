import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Brain Yield Schools — visit us at Salasala, Dar es Salaam. Call 0754 947 370 or email brainyieldschools@gmail.com.",
};

const contactInfo = [
  { Icon: MapPin, title: "Visit Us", details: ["Best One Road, Salasala", "Kinondoni, Dar es Salaam", "Tanzania"] },
  { Icon: Phone, title: "Call Us", details: ["0754 947 370", "0755 394 008"] },
  { Icon: Mail, title: "Email Us", details: ["brainyieldschools@gmail.com"] },
  { Icon: Clock, title: "Office Hours", details: ["Monday - Friday: 7:30 AM - 4:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"] },
];

export default function ContactPage() {
  return (
    <>
      {/* Replace bgImage with your own: "/images/contact-hero.jpg" */}
      <HeroSection
        title="Contact Us"
        subtitle="Get In Touch — Salasala, Dar es Salaam"
        description="We'd love to hear from you. Reach out with any questions about admissions, programs, or to schedule a campus visit."
        bgImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1400&h=600&fit=crop"
      />

      {/* Contact Info Cards */}
      <SectionWrapper>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => (
            <div key={info.title} className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/50">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                <info.Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-text">{info.title}</h3>
              {info.details.map((detail) => (
                <p key={detail} className="text-sm text-text-light">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Form + Map */}
      <SectionWrapper bg="light">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Send a Message</p>
            <h2 className="text-3xl font-bold text-text md:text-4xl mb-8">We&apos;d Love to Hear From You</h2>
            <div className="rounded-2xl bg-white p-8 md:p-10 shadow-lg border border-border/50">
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Find Us</p>
            <h2 className="text-3xl font-bold text-text md:text-4xl mb-8">Our Location</h2>
            <div className="overflow-hidden rounded-2xl shadow-lg border border-border/50">
              <div className="relative h-[400px] lg:h-full min-h-[400px] bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">Brain Yield Schools</h3>
                  <p className="text-sm text-text-light mb-1">Best One Road, Salasala</p>
                  <p className="text-sm text-text-light mb-1">Kinondoni, Dar es Salaam</p>
                  <p className="text-sm text-text-light mb-4">Tanzania</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-primary">0754 947 370</p>
                    <p className="text-sm font-medium text-primary">0755 394 008</p>
                  </div>
                  <p className="mt-4 text-sm text-text-light">brainyieldschools@gmail.com</p>
                  <p className="mt-1 text-sm text-secondary font-medium">brainyieldschools.ac.tz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
