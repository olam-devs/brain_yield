/*
 * Integrates the user-supplied "recent photos" zip drops: swaps program,
 * facility, and hero images for more current shots, and adds a curated
 * selection to the Gallery. Rerunnable (createOrReplace / patch).
 *
 * Run with: node scripts/seed-new-photos.js
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
  // ---------- Program image swaps ----------
  await client.patch("program-nursery").set({ image: await img("by-nursery-play.webp") }).commit();
  await client.patch("program-primary").set({ image: await img("by-primary-class.webp") }).commit();
  await client.patch("program-secondary").set({ image: await img("by-secondary-lab.webp") }).commit();
  console.log("\n  Program images updated (nursery, primary, secondary)");

  // ---------- Facility image swaps ----------
  await client.patch("facility-1").set({ image: await img("by-building.webp") }).commit(); // 4-Story Campus Building
  await client.patch("facility-2").set({ image: await img("by-computerlab.webp") }).commit(); // Computer Laboratory
  await client.patch("facility-3").set({ image: await img("by-dorm.webp") }).commit(); // Boarding Dormitories
  await client.patch("facility-4").set({ image: await img("by-sciencelab.webp") }).commit(); // Science Laboratory
  await client.patch("facility-6").set({ image: await img("by-garden.webp") }).commit(); // School Garden
  console.log("  Facility images updated (building, computer lab, dorm, science lab, garden)");

  // ---------- Hero slide refresh ----------
  await client.patch("heroSlide-2").set({ image: await img("by-hero-nurture.webp") }).commit();
  await client.patch("heroSlide-4").set({ image: await img("by-hero-assembly.webp") }).commit();
  console.log("  Hero slides 2 & 4 refreshed");

  // ---------- Curated gallery additions ----------
  const gallery = [
    // Campus
    { file: "by-gallery-campus-01.webp", title: "Pre-primary playground", category: "Campus" },
    { file: "by-gallery-campus-02.webp", title: "Playground equipment", category: "Campus" },
    { file: "by-gallery-campus-03.webp", title: "Campus building exterior", category: "Campus" },
    { file: "by-gallery-campus-04.webp", title: "Campus building exterior", category: "Campus" },
    { file: "by-gallery-campus-05.webp", title: "Secondary campus building", category: "Campus" },
    { file: "by-gallery-campus-06.webp", title: "Secondary campus building", category: "Campus" },
    { file: "by-gallery-campus-07.webp", title: "Boarding dormitory", category: "Campus" },
    { file: "by-gallery-campus-08.webp", title: "Boarding dormitory", category: "Campus" },
    { file: "by-gallery-campus-09.webp", title: "Secondary boarding house", category: "Campus" },
    { file: "by-gallery-campus-10.webp", title: "School Garden Project", category: "Campus" },
    { file: "by-gallery-campus-11.webp", title: "Brain Yield Schools bus", category: "Campus" },
    { file: "by-gallery-campus-12.webp", title: "Students on the playground swings", category: "Campus" },
    // Academics
    { file: "by-gallery-academics-01.webp", title: "Pre-primary computer lab", category: "Academics" },
    { file: "by-gallery-academics-02.webp", title: "Pre-primary computer lab", category: "Academics" },
    { file: "by-gallery-academics-03.webp", title: "Primary classroom", category: "Academics" },
    { file: "by-gallery-academics-04.webp", title: "Student at the blackboard", category: "Academics" },
    { file: "by-gallery-academics-05.webp", title: "Teacher leading a lesson", category: "Academics" },
    { file: "by-gallery-academics-06.webp", title: "Students answering in class", category: "Academics" },
    { file: "by-gallery-academics-07.webp", title: "Secondary classroom", category: "Academics" },
    { file: "by-gallery-academics-08.webp", title: "Secondary student in class", category: "Academics" },
    { file: "by-gallery-academics-09.webp", title: "Geography lesson with globe", category: "Academics" },
    { file: "by-gallery-academics-10.webp", title: "Science laboratory experiment", category: "Academics" },
    { file: "by-gallery-academics-11.webp", title: "Chemistry experiment", category: "Academics" },
    { file: "by-gallery-academics-12.webp", title: "Computer lab session", category: "Academics" },
    { file: "by-gallery-academics-13.webp", title: "Computer lab session", category: "Academics" },
    // School Life
    { file: "by-gallery-life-01.webp", title: "Kindergarten nap room", category: "School Life" },
    { file: "by-gallery-life-02.webp", title: "Kindergarten play room", category: "School Life" },
    { file: "by-gallery-life-03.webp", title: "Pre-primary class at play", category: "School Life" },
    { file: "by-gallery-life-04.webp", title: "Full school assembly", category: "School Life" },
    { file: "by-gallery-life-05.webp", title: "Full school assembly", category: "School Life" },
    { file: "by-gallery-life-06.webp", title: "Students at school", category: "School Life" },
    { file: "by-gallery-life-07.webp", title: "Classroom candid moment", category: "School Life" },
    { file: "by-gallery-life-08.webp", title: "Student portrait", category: "School Life" },
    { file: "by-gallery-life-09.webp", title: "Playground slide", category: "School Life" },
    { file: "by-gallery-life-10.webp", title: "Playground slide", category: "School Life" },
    // Sports
    { file: "by-gallery-sports-01.webp", title: "Students jogging outdoors", category: "Sports" },
    { file: "by-gallery-sports-02.webp", title: "Students jogging outdoors", category: "Sports" },
  ];

  for (let i = 0; i < gallery.length; i++) {
    const g = gallery[i];
    await client.createOrReplace({
      _id: `galleryImage-new-${i + 1}`,
      _type: "galleryImage",
      title: g.title,
      image: await img(g.file),
      category: g.category,
      order: 100 + i,
    });
  }
  console.log(`\n  ${gallery.length} new curated gallery photos added`);

  console.log("\nDone.");
}

run().catch((err) => {
  console.error("\nFAILED:", err.message);
  process.exit(1);
});
