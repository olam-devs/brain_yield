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
  { Icon: Phone, title: "Call Us", details: ["Director: +255 754 947 370", "Manager: +255 755 394 008", "Head Pre & Primary:\n+255 657 337 849", "Head Secondary:\n+255 620 839 096"] },
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
                <p key={detail} className="text-sm text-text-light whitespace-pre-line">{detail}</p>
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
              <iframe
                src="https://maps.google.com/maps?q=6699%2BV83+Dar+es+Salaam&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brain Yield Schools Location"
                className="w-full min-h-[450px]"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
