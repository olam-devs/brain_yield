"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { HeroSlide } from "@/lib/content";

function splitHeading(heading: string) {
  const words = heading.trim().split(" ");
  if (words.length < 2) return { rest: heading, last: "" };
  return { rest: words.slice(0, -1).join(" "), last: words[words.length - 1] };
}

export default function HeroSlideshow({ slides, tagline }: { slides: HeroSlide[]; tagline?: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goTo = (delta: number) => {
    setCurrent((prev) => (prev + delta + slides.length) % slides.length);
  };

  const slide = slides[current];
  const { rest, last } = splitHeading(slide.heading);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden" aria-label={tagline}>
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={s.imageUrl} alt={s.heading} className="h-full w-full object-cover" />
          {/* Left-to-right gradient so left-aligned text stays readable while the photo shows through on the right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,10,20,0.75) 0%, rgba(10,10,20,0.45) 45%, rgba(10,10,20,0.15) 70%, rgba(10,10,20,0.05) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content — left-aligned, constrained width */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-8">
          <div className="max-w-2xl">
            <p
              key={`eyebrow-${current}`}
              className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-secondary animate-fade-in-up"
            >
              <BookOpen className="h-4 w-4" />
              {slide.eyebrow || tagline}
            </p>
            <h1
              key={current}
              className="text-4xl font-extrabold capitalize leading-tight text-white md:text-5xl lg:text-[54px] animate-fade-in-up"
            >
              {rest} {last && <span className="text-secondary">{last}</span>}
            </h1>
            <p
              key={`sub-${current}`}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              {slide.subheading}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-secondary-dark hover:shadow-xl"
                style={{ borderRadius: "50px 50px 50px 0px" }}
              >
                About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-text shadow-lg transition-all duration-300 hover:bg-white/90"
                style={{ borderRadius: "50px 50px 50px 0px" }}
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => goTo(-1)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-sm transition-colors hover:bg-white/15 md:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => goTo(1)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-sm transition-colors hover:bg-white/15 md:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </section>
  );
}
