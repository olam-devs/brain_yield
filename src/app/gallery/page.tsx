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
  { src: "/school%20pics/Main%20gate.PNG", alt: "Brain Yield Schools main entrance gate", category: "Campus" },
  { src: "/school%20pics/school%20view%207.jpg", alt: "School campus view", category: "Campus" },
  { src: "/school%20pics/school%20view%208.jpg", alt: "School campus exterior", category: "Campus" },
  { src: "/school%20pics/school%20view%209.jpg", alt: "Campus grounds", category: "Campus" },
  { src: "/school%20pics/school%20bus.jpg", alt: "Brain Yield Schools bus", category: "Campus" },
  { src: "/school%20pics/swings%20for%20kids.PNG", alt: "Playground swings for young learners", category: "Campus" },
  { src: "/school%20pics/sports%20-%20football.PNG", alt: "Students playing football", category: "Sports" },
  { src: "/school%20pics/rope%20pulling%20playground.PNG", alt: "Rope pulling activity on the playground", category: "Sports" },
  { src: "/school%20pics/IMG_5966.jpg", alt: "Full school assembly", category: "Events" },
  { src: "/school%20pics/IMG_5973.jpg", alt: "Students marching band performance", category: "Events" },
  { src: "/school%20pics/IMG_5977.jpg", alt: "School assembly with all students", category: "Events" },
  { src: "/school%20pics/IMG_5980.jpg", alt: "Students in outdoor assembly", category: "Events" },
  { src: "/school%20pics/IMG_6007.jpg", alt: "Primary students group photo", category: "Events" },
  { src: "/school%20pics/IMG_6045.jpg", alt: "Kindergarten graduation ceremony", category: "Events" },
  { src: "/school%20pics/IMG_5988.jpg", alt: "Campus corridor and playground", category: "Campus" },
  { src: "/school%20pics/IMG_6061.jpg", alt: "4-story school building with students on balconies", category: "Campus" },
  { src: "/school%20pics/IMG_6092.jpg", alt: "Students working in the school garden", category: "Campus" },
  { src: "/school%20pics/IMG_6096.jpg", alt: "Students harvesting in school garden", category: "Campus" },
  { src: "/school%20pics/IMG_6350.jpg", alt: "Kindergarten nap room", category: "Campus" },
  { src: "/school%20pics/IMG_6685.jpg", alt: "Children on playground equipment", category: "Campus" },
  { src: "/school%20pics/IMG_6126.jpg", alt: "Students in home economics — baking class", category: "Academics" },
  { src: "/school%20pics/IMG_6134.jpg", alt: "Students learning baking skills", category: "Academics" },
  { src: "/school%20pics/IMG_6179.jpg", alt: "Nursery classroom activity", category: "Academics" },
  { src: "/school%20pics/IMG_6188.jpg", alt: "Pre-primary students playing", category: "Academics" },
  { src: "/school%20pics/IMG_6190.jpg", alt: "Pre-primary student at play", category: "Academics" },
  { src: "/school%20pics/IMG_6191.jpg", alt: "Teacher at blackboard with nursery class", category: "Academics" },
  { src: "/school%20pics/IMG_6215.jpg", alt: "Students in cooking class", category: "Academics" },
  { src: "/school%20pics/IMG_6262.jpg", alt: "Students reading in the school library", category: "Academics" },
  { src: "/school%20pics/IMG_6264.jpg", alt: "Library reading session with teacher", category: "Academics" },
  { src: "/school%20pics/IMG_6279.jpg", alt: "Students using voltmeter in science lab", category: "Academics" },
  { src: "/school%20pics/IMG_6300.jpg", alt: "Students studying anatomy model in science lab", category: "Academics" },
  { src: "/school%20pics/IMG_6303.jpg", alt: "Science lab — human body model", category: "Academics" },
  { src: "/school%20pics/IMG_6354.jpg", alt: "Kindergarten nap time", category: "Academics" },
  { src: "/school%20pics/IMG_6381.jpg", alt: "Teacher and students in computer lab", category: "Academics" },
  { src: "/school%20pics/IMG_6410.jpg", alt: "Students using computers in ICT lab", category: "Academics" },
  { src: "/school%20pics/IMG_6417.jpg", alt: "ICT teacher supervising students", category: "Academics" },
  { src: "/school%20pics/IMG_6422.jpg", alt: "Students working on computers with teacher", category: "Academics" },
  { src: "/school%20pics/IMG_6576.jpg", alt: "Students in sports bibs on the field", category: "Sports" },
  { src: "/school%20pics/IMG_6626.jpg", alt: "Female sports team", category: "Sports" },
  { src: "/school%20pics/IMG_6631.jpg", alt: "Students exercising on sports field", category: "Sports" },
  { src: "/school%20pics/IMG_6640.jpg", alt: "Young students in sports kit", category: "Sports" },
  { src: "/school%20pics/IMG_6643.jpg", alt: "Students cheering at sports day", category: "Sports" },
  { src: "/school%20pics/IMG_6647.jpg", alt: "Students jumping during athletics", category: "Sports" },
  { src: "/school%20pics/IMG_6720.jpg", alt: "Football match action", category: "Sports" },
  { src: "/school%20pics/IMG_6656.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6658.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6663.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6667.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6688.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6695.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6703.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6708.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6713.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6717.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6721.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6722.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6724.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6735.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6736.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6760.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6779.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6801.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6805.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6817.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6830.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6839.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6843.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6845.jpg", alt: "School life at Brain Yield", category: "School Life" },
  { src: "/school%20pics/IMG_6853.jpg", alt: "School life at Brain Yield", category: "School Life" },
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
  const allImages = [...sanityImages, ...localImages];

  return (
    <>
      <HeroSection
        title="Photo Gallery"
        subtitle="Life at Brain Yield"
        description="A glimpse into the vibrant life, events, and activities at Brain Yield Schools."
        bgImage="/school%20pics/school%20view%208.jpg"
      />
      <SectionWrapper>
        <GalleryGrid images={allImages} />
      </SectionWrapper>
    </>
  );
}
