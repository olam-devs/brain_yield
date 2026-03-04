"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    boardingOption: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", program: "", boardingOption: "", subject: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-5 py-3.5 text-text transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-5 py-3.5 text-text transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-5 py-3.5 text-text transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            placeholder="+255 000 000 000"
          />
        </div>
        <div>
          <label htmlFor="program" className="mb-2 block text-sm font-medium text-text">
            Program of Interest *
          </label>
          <select
            id="program"
            required
            value={formData.program}
            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-5 py-3.5 text-text transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          >
            <option value="">Select a program</option>
            <option value="nursery">Nursery (Ages 3–5)</option>
            <option value="primary">Primary School (Std 1–7)</option>
            <option value="secondary">Secondary School (Form 1–6)</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="boardingOption" className="mb-2 block text-sm font-medium text-text">
            Preferred Option *
          </label>
          <select
            id="boardingOption"
            required
            value={formData.boardingOption}
            onChange={(e) => setFormData({ ...formData, boardingOption: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-5 py-3.5 text-text transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          >
            <option value="">Select day or boarding</option>
            <option value="day">Day Student</option>
            <option value="boarding">Boarding Student</option>
          </select>
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text">
            Subject *
          </label>
          <select
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-5 py-3.5 text-text transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          >
            <option value="">Select a subject</option>
            <option value="admissions">Admissions Inquiry</option>
            <option value="academics">Academic Programs</option>
            <option value="fees">Fee Structure</option>
            <option value="visit">Schedule a Visit</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-xl border border-border bg-white px-5 py-3.5 text-text transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none"
          placeholder="How can we help you?"
        />
      </div>

      {status === "success" && (
        <div className="rounded-xl bg-green-50 border border-green-200 px-5 py-4 text-sm text-green-700 font-medium">
          Thank you! Your message has been sent. We will get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-5 py-4 text-sm text-red-700 font-medium">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
    </form>
  );
}
