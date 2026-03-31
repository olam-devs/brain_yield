"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/*
 * ===========================================
 * HOW TO REPLACE IMAGES:
 * Update the `src` field in each slide below
 * with your own image path, e.g.:
 *   src: "/images/hero-1.jpg"
 * Place your images in the /public/images/ folder.
 * ===========================================
 */
const slides = [
  {
    src: "/school%20pics/school%20view%201.jpg",
    alt: "Brain Yield Schools campus building",
    heading: "Together We Make The Difference With Excellence",
    subheading: "Quality education from Nursery to Secondary at Salasala, Dar es Salaam",
  },
  {
    src: "/school%20pics/pre%20primary%20in%20assembly.PNG",
    alt: "Pre-primary students in assembly",
    heading: "Nurturing Confident, Responsible Leaders",
    subheading: "Personalized learning with both day and boarding options for every family",
  },
  {
    src: "/school%20pics/school%20view%202.jpg",
    alt: "Brain Yield Schools campus",
    heading: "100% Pass Rate — PSLE 2024",
    subheading: "Proven academic excellence with top grades across all subjects",
  },
  {
    src: "/school%20pics/school%20view%203.jpg",
    alt: "Modern campus facilities",
    heading: "Modern Facilities, Holistic Development",
    subheading: "4-story campus with computer labs, boarding dormitories, and a school garden",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
          {/* Dark overlay with school colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary-dark/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-20">
          <p className="mb-4 inline-block rounded-full bg-secondary/30 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm border border-secondary/30">
            Welcome to Brain Yield Schools — Salasala, Kinondoni, Dar es Salaam
          </p>
          <h1
            key={current}
            className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl animate-fade-in-up"
          >
            {slides[current].heading}
          </h1>
          <p
            key={`sub-${current}`}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {slides[current].subheading}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center rounded-full bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-secondary-light hover:shadow-xl hover:-translate-y-1"
            >
              Apply Now
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/60"
            >
              Learn More
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className="mt-12 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-10 bg-secondary"
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-8 animate-bounce">
            <svg className="mx-auto h-7 w-7 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
