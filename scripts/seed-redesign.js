/*
 * Adds the real reference-site photos (nursery/primary/secondary program
 * shots, extra gallery photos, event photos) plus the "Form One Admissions
 * 2027" announcement that's genuinely live on brainyieldschools.ac.tz today.
 * Rerunnable — uses createOrReplace / patch with fixed IDs.
 *
 * Run with: node scripts/seed-redesign.js
 */
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const envLines = fs.readFileSync(path.join(root, ".env.local"), "utf8").split(/\r?\n/);
for (const line of envLines) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) process.env[m[1]] = m[2];
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const assetCache = new Map();
async function img(relPath) {
  if (assetCache.has(relPath)) return assetCache.get(relPath);
  const absPath = path.join(publicDir, "school pics", relPath);
  const buffer = fs.readFileSync(absPath);
  const asset = await client.assets.upload("image", buffer, { filename: relPath });
  const ref = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  assetCache.set(relPath, ref);
  process.stdout.write(".");
  return ref;
}

async function run() {
  // Swap program images for the real assembly photos from the school's own campus
  await client.patch("program-nursery").set({ image: await img("ref-program nursery.webp") }).commit();
  console.log("\n  program-nursery image updated");
  await client.patch("program-primary").set({ image: await img("ref-program primary.webp") }).commit();
  console.log("  program-primary image updated");
  // Skipped program-secondary: the reference site's "03.jpg" actually shows a
  // younger marching band, not O-Level students — kept our existing photo.

  // Refresh the two existing Events-category news items with the real event photos
  await client.patch("news-5").set({ image: await img("ref-event 3.webp") }).commit();
  console.log("  news-5 (Parent-Teacher Conference) image updated");
  await client.patch("news-6").set({ image: await img("ref-event 1.webp") }).commit();
  console.log("  news-6 (Sports Day) image updated");

  // New Events-category news item
  await client.createOrReplace({
    _id: "news-8",
    _type: "news",
    title: "Kindergarten Graduation Ceremony",
    slug: { _type: "slug", current: "kindergarten-graduation-ceremony" },
    excerpt: "Our youngest learners celebrated the end of their pre-primary journey with a joyful graduation ceremony attended by proud parents.",
    category: "Events",
    image: await img("ref-event 2.webp"),
    publishedAt: new Date("2025-12-15").toISOString(),
    featured: false,
  });
  console.log("  news-8 (Kindergarten Graduation) created");

  // The announcement currently live on brainyieldschools.ac.tz
  await client.createOrReplace({
    _id: "announcement-1",
    _type: "announcement",
    title: "Form One Admissions 2027 Now Open",
    body: "Brain Yield Secondary School is pleased to announce that applications for Form One admission for the 2027 academic year are now open. Application forms are available at the school. Parents and guardians are warmly invited to visit the school and secure an application form for their child.",
    category: "General Notice",
    publishedAt: new Date("2026-09-03").toISOString(),
    active: true,
  });
  console.log("  announcement-1 (Form One Admissions 2027) created");

  // Extra real campus photos into the Gallery
  const extraGallery = [
    { file: "ref-student playground.webp", title: "Pre-primary student on playground equipment", category: "Campus" },
    { file: "ref-about 2.webp", title: "Students at Brain Yield Schools", category: "School Life" },
    { file: "ref-about 3.webp", title: "Students at Brain Yield Schools", category: "School Life" },
    { file: "ref-gallery classroom fun.webp", title: "Pre-primary class having fun in the classroom", category: "Academics" },
    { file: "ref-gallery 2.webp", title: "Students on campus", category: "School Life" },
    { file: "ref-gallery 3.webp", title: "Students on campus", category: "School Life" },
    { file: "ref-gallery 4.webp", title: "Students on campus", category: "School Life" },
    { file: "ref-gallery 5.webp", title: "Students on campus", category: "Campus" },
    { file: "ref-gallery 6.webp", title: "Students on campus", category: "Campus" },
    { file: "ref-gallery 7.webp", title: "Students on campus", category: "School Life" },
    { file: "ref-program secondary.webp", title: "Marching band performance in the school courtyard", category: "Events" },
  ];
  for (let i = 0; i < extraGallery.length; i++) {
    const g = extraGallery[i];
    await client.createOrReplace({
      _id: `galleryImage-ref-${i + 1}`,
      _type: "galleryImage",
      title: g.title,
      image: await img(g.file),
      category: g.category,
      order: 70 + i,
    });
  }
  console.log("\n  10 extra gallery photos added");

  console.log("\nDone.");
}

run().catch((err) => {
  console.error("\nFAILED:", err.message);
  process.exit(1);
});
