/*
 * ===========================================
 * HOW TO REPLACE HERO IMAGES:
 * Each page passes a `bgImage` prop. To change
 * the background, update the URL in the page file
 * or place your image in /public/images/ and use:
 *   bgImage="/images/your-image.jpg"
 * ===========================================
 */

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  bgImage?: string;
}

const defaultBg = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&h=600&fit=crop";

export default function HeroSection({
  title,
  subtitle,
  description,
  bgImage,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 min-h-[420px] flex items-center">
      {/* Background Image */}
      <img
        src={bgImage || defaultBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay with school colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/70 to-primary-dark/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center w-full">
        {subtitle && (
          <p className="mb-4 inline-block rounded-full bg-secondary/25 px-6 py-2 text-sm font-medium text-secondary-light backdrop-blur-sm border border-secondary/20">
            {subtitle}
          </p>
        )}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
