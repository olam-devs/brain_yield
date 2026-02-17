import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const programs = [
  { href: "/academics#nursery", label: "Nursery" },
  { href: "/academics#primary", label: "Primary School" },
  { href: "/academics#secondary", label: "Secondary School" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Brain Yield Schools Logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-lg bg-white p-1 object-contain"
              />
              <div>
                <span className="text-xl font-bold">Brain Yield</span>
                <span className="block text-xs text-white/70">Schools</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Together We Make The Difference With Excellence. Nurturing confident,
              responsible leaders through quality education in Dar es Salaam, Tanzania.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", letter: "F" },
                { label: "YouTube", letter: "Y" },
                { label: "Instagram", letter: "I" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium transition-all duration-300 hover:bg-secondary hover:scale-110"
                  aria-label={social.label}
                >
                  {social.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-xs text-white/50">Day &amp; Boarding options available</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-secondary">&#9906;</span>
                <span>Best One Road, Salasala, Kinondoni, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">&#9742;</span>
                <span>0754 947 370 / 0755 394 008</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">&#9993;</span>
                <span>brainyieldschools@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">&#127760;</span>
                <span>brainyieldschools.ac.tz</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-secondary">&#9200;</span>
                <span>Mon - Fri: 7:30 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Brain Yield Schools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
