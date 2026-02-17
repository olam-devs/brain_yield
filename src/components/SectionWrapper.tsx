interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "light" | "primary" | "warm";
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "white",
}: SectionWrapperProps) {
  const bgClasses = {
    white: "bg-white",
    light: "bg-bg",
    primary: "bg-primary text-white",
    warm: "bg-gradient-to-br from-secondary/5 to-primary/5",
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${bgClasses[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
