import Link from "next/link";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug?: string;
}

export default function NewsCard({
  title,
  excerpt,
  date,
  category,
  image,
}: NewsCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/50">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="mb-2 text-sm text-text-light">{date}</p>
        <h3 className="mb-3 text-lg font-bold text-text group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-text-light line-clamp-2">
          {excerpt}
        </p>
        <Link
          href="/news"
          className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-secondary"
        >
          Read More
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
