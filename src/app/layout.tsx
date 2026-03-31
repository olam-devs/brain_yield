import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["School", "EducationalOrganization"],
  name: "Brain Yield Schools",
  alternateName: ["Brain Yield School", "BYS"],
  url: siteUrl,
  logo: `${siteUrl}/official-logo.jpeg`,
  image: `${siteUrl}/school pics/front view.PNG`,
  description:
    "Brain Yield Schools is a leading private educational institution located at Salasala, Kinondoni – Dar es Salaam, Tanzania. We offer quality education from Pre-Primary, Primary to Secondary levels, providing both Day and Boarding options.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Best One Road, Salasala",
    addressLocality: "Kinondoni",
    addressRegion: "Dar es Salaam",
    addressCountry: "TZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.8235,
    longitude: 39.2695,
  },
  telephone: ["+255754947370", "+255755394008"],
  email: "brainyieldschools@gmail.com",
  openingHours: ["Mo-Fr 07:30-16:00", "Sa 09:00-13:00"],
  hasMap: "https://maps.google.com/?q=Salasala,Dar+es+Salaam,Tanzania",
  sameAs: [
    "https://www.youtube.com/@brainyieldschools",
    "https://www.instagram.com/brainyieldschools",
    "https://www.facebook.com/brainyieldschools",
    "https://www.threads.net/@brainyieldschools",
    "https://www.tiktok.com/@brainyieldschools",
  ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
