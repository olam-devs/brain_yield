import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { getSiteSettings, getAnnouncements } from "@/lib/content";

export const revalidate = 3600;

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-inter",
});

const siteUrl = "https://brainyieldschools.sc.tz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brain Yield Schools | Official School Website — Together We Make The Difference With Excellence",
    template: "%s | Brain Yield Schools — Official Website",
  },
  description:
    "Official website of Brain Yield Schools — Quality education from Nursery to Secondary at Salasala, Dar es Salaam. Day and boarding options available. Nurturing confident, responsible leaders.",
  keywords: [
    "Brain Yield Schools official website",
    "Brain Yield Schools",
    "Brain Yield School",
    "brainyieldschools official",
    "brainyieldschools",
    "Brain Yield official",
    "Brain Yield",
    "Salasala school",
    "Salasala",
    "Dar es Salaam school",
    "Dar es Salaam",
    "Tanzania",
    "Tanzania school",
    "nursery school Tanzania",
    "primary school Tanzania",
    "secondary school Tanzania",
    "boarding school Tanzania",
    "boarding school Dar es Salaam",
    "private school Dar es Salaam",
    "private school Tanzania",
    "best school Dar es Salaam",
    "best school Tanzania",
    "school Salasala",
    "Kinondoni school",
    "pre-primary school",
    "O-Level Tanzania",
    "day and boarding school",
    "education Tanzania",
    "quality education Tanzania",
    "school fees Tanzania",
    "admissions Tanzania",
  ],
  icons: {
    icon: "/official-logo.jpeg",
    shortcut: "/official-logo.jpeg",
    apple: "/official-logo.jpeg",
  },
  authors: [{ name: "Brain Yield Schools", url: siteUrl }],
  creator: "Brain Yield Schools",
  publisher: "Brain Yield Schools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "oKgSv0v2D67hMiNJbgVD7KmkLxRVQZao2B_h_TmZHS8",
  },
  openGraph: {
    title: "Brain Yield Schools | Official School Website — Together We Make The Difference With Excellence",
    description:
      "Official website of Brain Yield Schools. Quality education from Nursery to Secondary at Salasala, Dar es Salaam. Day and boarding options available.",
    type: "website",
    url: siteUrl,
    siteName: "Brain Yield Schools — Official Website",
    locale: "en_TZ",
    images: [
      {
        url: "/official-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Brain Yield Schools Official Logo — Salasala, Dar es Salaam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain Yield Schools | Official School Website — Together We Make The Difference With Excellence",
    description:
      "Official website of Brain Yield Schools. Quality education from Nursery to Secondary at Salasala, Dar es Salaam. Day and boarding options available.",
    images: ["/official-logo.jpeg"],
  },
  category: "education",
};

import type { SiteSettings } from "@/lib/content";

function buildJsonLd(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": ["School", "EducationalOrganization"],
    name: settings.schoolName,
    alternateName: ["Brain Yield School", "BYS"],
    url: siteUrl,
    logo: `${siteUrl}/official-logo.jpeg`,
    image: `${siteUrl}/school pics/front view.webp`,
    description:
      "Brain Yield Schools is a leading private educational institution located at Salasala, Kinondoni – Dar es Salaam, Tanzania. We offer quality education from Pre-Primary, Primary to Secondary levels, providing both Day and Boarding options.",
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address,
      addressLocality: settings.addressLocality,
      addressRegion: settings.addressRegion,
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.8235,
      longitude: 39.2695,
    },
    telephone: settings.phones.map((p) => p.number.replace(/\s+/g, "")),
    email: settings.email,
    openingHours: ["Mo-Fr 07:30-16:00", "Sa 09:00-13:00"],
    hasMap: "https://maps.google.com/?q=Salasala,Dar+es+Salaam,Tanzania",
    sameAs: [
      settings.youtubeUrl,
      settings.instagramUrl,
      settings.facebookUrl,
      settings.threadsUrl,
      settings.tiktokUrl,
    ].filter(Boolean),
    creator: {
      "@type": "Person",
      name: "Dionis Edward Lenga",
      alternateName: "diolenga",
      url: "https://diolenga.tech",
    },
    educationalCredentialAwarded: [
      "Pre-Primary Certificate",
      "Primary Education Certificate",
      "O-Level Certificate (CSEE)",
    ],
    teaches: [
      "Pre-Primary Education (Nursery & Kindergarten)",
      "Primary Education (Standard 1–7)",
      "Secondary Education (Form 1–4, O-Level)",
    ],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, announcements] = await Promise.all([getSiteSettings(), getAnnouncements()]);
  const jsonLd = buildJsonLd(settings);

  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
        <AnnouncementBar announcements={announcements} />
      </body>
    </html>
  );
}
