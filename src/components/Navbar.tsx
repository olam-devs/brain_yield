"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const programLinks = [
  { href: "/academics#nursery", label: "Nursery" },
  { href: "/academics#primary", label: "Primary School" },
  { href: "/academics#secondary", label: "Secondary School" },
];

const admissionLinks = [
  { href: "/admissions?program=nursery", label: "Nursery Admission" },
  { href: "/admissions?program=primary", label: "Primary School Admission" },
  { href: "/admissions?program=secondary", label: "Secondary School Admission" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics", dropdown: programLinks },
  { href: "/admissions", label: "Admissions", dropdown: admissionLinks },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

function DropdownMenu({
  items,
  isOpen,
  onClose,
}: {
  items: { href: string; label: string }[];
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return (
    <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white py-2 shadow-xl border border-border/50 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block px-5 py-3 text-sm text-text hover:bg-secondary/10 hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Brain Yield Schools Logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold tracking-tight text-primary">
                Brain Yield
              </span>
              <span className="block text-xs font-medium text-secondary">
                Schools
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-text transition-all duration-200 hover:bg-secondary/10 hover:text-primary"
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.dropdown && (
                  <DropdownMenu
                    items={link.dropdown}
                    isOpen={openDropdown === link.label}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </div>
            ))}
            <Link
              href="/admissions"
              className="ml-4 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-border px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <div key={link.href}>
              <div className="flex items-center">
                <Link
                  href={link.href}
                  onClick={() => {
                    if (!link.dropdown) setIsOpen(false);
                  }}
                  className="flex-1 px-4 py-3 text-sm font-medium text-text rounded-lg hover:bg-secondary/10 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === link.label ? null : link.label)
                    }
                    className="px-3 py-3 text-text-light hover:text-primary"
                    aria-label={`Expand ${link.label}`}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileDropdown === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {link.dropdown && mobileDropdown === link.label && (
                <div className="ml-6 space-y-1 pb-2">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2.5 text-sm text-text-light rounded-lg hover:bg-secondary/10 hover:text-primary transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/admissions"
            onClick={() => setIsOpen(false)}
            className="block mx-4 mt-3 text-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
