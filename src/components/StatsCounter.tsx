"use client";

import { useEffect, useState, useRef } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 100, suffix: "%", label: "PSLE Pass Rate 2024" },
  { value: 3, suffix: "", label: "Programs: Nursery, Primary, Secondary" },
  { value: 4, suffix: "-Story", label: "Modern Campus Building" },
  { value: 2, suffix: "", label: "Options: Day & Boarding" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-4 md:p-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-primary">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm font-medium text-text-light">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
