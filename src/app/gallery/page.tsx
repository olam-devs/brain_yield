import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos from Brain Yield Schools — campus life, events, academics, sports, and more.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop", alt: "Students in classroom", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=500&fit=crop", alt: "Graduation ceremony", category: "Events" },
  { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=350&fit=crop", alt: "Science laboratory", category: "Academics" },
  { src: "https://images.unsplash.com/photo-1461896836934-bd45ba3b23e0?w=600&h=450&fit=crop", alt: "Sports day", category: "Sports" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop", alt: "Debate competition", category: "Events" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=500&fit=crop", alt: "Library reading", category: "Academics" },
  { src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=350&fit=crop", alt: "ICT lab session", category: "Academics" },
  { src: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&h=450&fit=crop", alt: "Pre-school activities", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop", alt: "Art class", category: "Academics" },
  { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=500&fit=crop", alt: "Campus grounds", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=350&fit=crop", alt: "Cultural day celebration", category: "Events" },
  { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=450&fit=crop", alt: "School library", category: "Campus" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Replace bgImage with your own: "/images/gallery-hero.jpg" */}
      <HeroSection
        title="Photo Gallery"
        subtitle="Life at Brain Yield"
        description="A glimpse into the vibrant life, events, and activities at Brain Yield Schools."
        bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&h=600&fit=crop"
      />

      <SectionWrapper>
        <GalleryGrid images={galleryImages} />
      </SectionWrapper>
    </>
  );
}
