import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-2xl md:px-16 md:py-24">
          {/* Background Image */}
          {/* Replace this URL with your own image: place in /public/images/ */}
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1400&h=600&fit=crop"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-dark/90" />

          {/* Decorative gold accents */}
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Give Your Child the Best Education?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Join the Brain Yield family and watch your child thrive in a nurturing,
              innovative, and excellence-driven environment. Day &amp; Boarding available.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/admissions"
                className="inline-flex items-center rounded-full bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-secondary-light hover:shadow-xl hover:-translate-y-1"
              >
                Start Application
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
