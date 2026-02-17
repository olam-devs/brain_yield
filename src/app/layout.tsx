import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Brain Yield Schools — Together We Make The Difference With Excellence",
    template: "%s | Brain Yield Schools",
  },
  description:
    "Brain Yield Schools in Salasala, Dar es Salaam offers quality education from Nursery to Secondary level with day and boarding options. Nurturing confident, responsible leaders.",
  keywords: [
    "Brain Yield Schools",
    "Salasala",
    "Dar es Salaam",
    "Tanzania",
    "nursery",
    "primary school",
    "secondary school",
    "boarding school",
    "education",
  ],
  openGraph: {
    title: "Brain Yield Schools — Together We Make The Difference With Excellence",
    description:
      "Quality education from Nursery to Secondary in Salasala, Dar es Salaam. Day and boarding options available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
