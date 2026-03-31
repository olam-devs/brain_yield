import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, Clock, Facebook, Youtube, Instagram } from "lucide-react";

// TikTok and Threads don't have icons in lucide-react, so we use inline SVGs
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.751-2.042 1.31-1.326 1.7-3.12 1.795-4.082-1.073.054-2.222.04-3.344-.065-2.479-.215-4.485-1.025-5.605-2.273-.652-.727-.964-1.586-.928-2.566.082-2.193 1.905-3.547 4.957-3.77.532-.039 1.085-.06 1.651-.06h.217c2.29 0 4.053.404 5.305 1.21 1.298.832 2.021 2.088 2.15 3.726.145 1.848-.354 3.49-1.443 4.737-.882 1.01-2.122 1.762-3.694 2.24.13.372.201.762.201 1.162 0 2.051-1.668 3.719-3.719 3.719zm2.28-9.616c-1.7.147-2.675.647-2.71 1.351-.018.38.128.72.44 1.066.685.763 2.155 1.28 3.968 1.432.898.078 1.837.096 2.736.056-.128-1.2-.529-2.082-1.194-2.618-.72-.581-1.837-.898-3.24-.898v.611z"/>
  </svg>
);

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
                src="/official-logo.jpeg"
                alt="Brain Yield Schools Official Logo"
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
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@brainyieldschools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-secondary hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/brainyieldschools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-secondary hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/brainyieldschools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-secondary hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.threads.net/@brainyieldschools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-secondary hover:scale-110"
                aria-label="Threads"
              >
                <ThreadsIcon />
              </a>
              <a
                href="https://www.tiktok.com/@brainyieldschools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-secondary hover:scale-110"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
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
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>Best One Road, Salasala, Kinondoni, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>
                  Director: +255 754 947 370<br />
                  Manager: +255 755 394 008<br />
                  Head Pre &amp; Primary: +255 657 337 849<br />
                  Head Secondary: +255 620 839 096
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span>brainyield.schools2020@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-secondary" />
                <span>brainyieldschools.sc.tz</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
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
