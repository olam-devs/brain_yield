import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import GalleryGrid from "@/components/GalleryGrid";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos from Brain Yield Schools — campus life, events, academics, sports, and more.",
  alternates: {
    canonical: "https://brainyieldschools.sc.tz/gallery",
  },
};

const localImages = [
  { src: "/school%20pics/Main%20gate.webp", alt: "Brain Yield Schools main entrance gate", category: "Campus" },
  { src: "/school%20pics/school%20view%207.webp", alt: "School campus view", category: "Campus" },
  { src: "/school%20pics/school%20view%208.webp", alt: "School campus exterior", category: "Campus" },
  { src: "/school%20pics/school%20view%209.webp", alt: "Campus grounds", category: "Campus" },
  { src: "/school%20pics/school%20bus.webp", alt: "Brain Yield Schools bus", category: "Campus" },
  { src: "/school%20pics/swings%20for%20kids.webp", alt: "Playground swings for young learners", category: "Campus" },
  { src: "/school%20pics/sports%20-%20football.webp", alt: "Students playing football", category: "Sports" },
  { src: "/school%20pics/rope%20pulling%20playground.webp", alt: "Rope pulling activity on the playground", category: "Sports" },
  { src: "/school%20pics/IMG_5966.webp", alt: "Full school assembly", category: "Events" },
  { src: "/school%20pics/IMG_5973.webp", alt: "Students marching band performance", category: "Events" },
  { src: "/school%20pics/IMG_5977.webp", alt: "School assembly with all students", category: "Events" },
  { src: "/school%20pics/IMG_5980.webp", alt: "Students in outdoor assembly", category: "Events" },
  { src: "/school%20pics/IMG_6007.webp", alt: "Primary students group photo", category: "Events" },
  { src: "/school%20pics/IMG_6045.webp", alt: "Kindergarten graduation ceremony", category: "Events" },
  { src: "/school%20pics/IMG_5988.webp", alt: "Campus corridor and playground", category: "Campus" },
  { src: "/school%20pics/IMG_6061.webp", alt: "4-story school building with students on balconies", category: "Campus" },
  { src: "/school%20pics/IMG_6092.webp", alt: "Students working in the school garden", category: "Campus" },
  { src: "/school%20pics/IMG_6096.webp", alt: "Students harvesting in school garden", category: "Campus" },
  { src: "/school%20pics/IMG_6350.webp", alt: "Kindergarten nap room", category: "Campus" },
  { src: "/school%20pics/IMG_6685.webp", alt: "Children on playground equipment", category: "Campus" },
  { src: "/school%20pics/IMG_6126.webp", alt: "Students in home economics — baking class", category: "Academics" },
  { src: "/school%20pics/IMG_6134.webp", alt: "Students learning baking skills", category: "Academics" },
  { src: "/school%20pics/IMG_6179.webp", alt: "Nursery classroom activity", category: "Academics" },
  { src: "/school%20pics/IMG_6188.webp", alt: "Pre-primary students playing", category: "Academics" },
  { src: "/school%20pics/IMG_6190.webp", alt: "Pre-primary student at play", category: "Academics" },
  { src: "/school%20pics/IMG_6191.webp", alt: "Teacher at blackboard with nursery class", category: "Academics" },
  { src: "/school%20pics/IMG_6215.webp", alt: "Students in cooking class", category: "Academics" },
  { src: "/school%20pics/IMG_6262.webp", alt: "Students reading in the school library", category: "Academics" },
  { src: "/school%20pics/IMG_6264.webp", alt: "Library reading session with teacher", category: "Academics" },
  { src: "/school%20pics/IMG_6279.webp", alt: "Students using voltmeter in science lab", category: "Academics" },
  { src: "/school%20pics/IMG_6300.webp", alt: "Students studying anatomy model in science lab", category: "Academics" },
  { src: "/school%20pics/IMG_6303.webp", alt: "Science lab — human body model", category: "Academics" },
  { src: "/school%20pics/IMG_6354.webp", alt: "Kindergarten nap time", category: "Academics" },
  { src: "/school%20pics/IMG_6381.webp", alt: "Teacher and students in computer lab", category: "Academics" },
  { src: "/school%20pics/IMG_6410.webp", alt: "Students using computers in ICT lab", category: "Academics" },
  { src: "/school%20pics/IMG_6417.webp", alt: "ICT teacher supervising students", category: "Academics" },
  { src: "/school%20pics/IMG_6422.webp", alt: "Students working on computers with teacher", category: "Academics" },
  { src: "/school%20pics/IMG_6576.webp", alt: "Students in sports bibs on the field", category: "Sports" },
  { src: "/school%20pics/IMG_6626.webp", alt: "Female sports team", category: "Sports" },
  { src: "/school%20pics/IMG_6631.webp", alt: "Students exercising on sports field", category: "Sports" },
  { src: "/school%20pics/IMG_6640.webp", alt: "Young students in sports kit", category: "Sports" },
  { src: "/school%20pics/IMG_6643.webp", alt: "Students cheering at sports day", category: "Sports" },
  { src: "/school%20pics/IMG_6647.webp", alt: "Students jumping during athletics", category: "Sports" },
  { src: "/school%20pics/IMG_6720.webp", alt: "Football match action", category: "Sports" },
  { src: "/school%20pics/IMG_6656.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6658.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6663.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6667.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6688.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6695.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6703.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6708.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6713.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6717.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6721.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6722.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6724.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6735.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6736.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6760.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6779.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6801.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6805.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6817.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6830.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6839.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6843.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6845.webp", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6853.webp", alt: "School life at Brain Yield", category: "School Life" },
];

async function getSanityImages() {
  try {
    const results = await client.fetch(
      `*[_type == "galleryImage"] | order(order asc) { title, image, category }`
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return results.map((item: any) => ({
      src: urlFor(item.image).width(1200).url(),
      alt: item.title || "Brain Yield Schools",
      category: item.category || "Campus",
    }));
  } catch {
    return [];
  }
}

export default async function GalleryPage() {
  const sanityImages = await getSanityImages();
  const allImages = sanityImages.length > 0 ? sanityImages : localImages;

  return (
    <>
      <HeroSection
        title="Photo Gallery"
        subtitle="Life at Brain Yield"
        description="A glimpse into the vibrant life, events, and activities at Brain Yield Schools."
        bgImage="/school%20pics/school%20view%208.webp"
      />
      <SectionWrapper>
        <GalleryGrid images={allImages} />
      </SectionWrapper>
    </>
  );
}
