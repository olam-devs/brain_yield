/*
 * Adds sports team photos + more secondary-classroom photos to the Gallery
 * (addressing the secondary/sports imbalance), and sets each program's
 * `gallery` array so the Academics page can show a slideshow per program.
 * Rerunnable.
 *
 * Run with: node scripts/seed-batch3.js
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
  // ---------- Gallery additions ----------
  const gallery = [
    { file: "by-sports-netball-1.webp", title: "Secondary netball team", category: "Sports" },
    { file: "by-sports-football-1.webp", title: "Secondary football team", category: "Sports" },
    { file: "by-sports-netball-2.webp", title: "Secondary netball team", category: "Sports" },
    { file: "by-sports-netball-3.webp", title: "Secondary netball team", category: "Sports" },
    { file: "by-secondary-01.webp", title: "Secondary science laboratory", category: "Academics" },
    { file: "by-secondary-02.webp", title: "Secondary student in class", category: "Academics" },
    { file: "by-secondary-03.webp", title: "Secondary laboratory session", category: "Academics" },
    { file: "by-secondary-04.webp", title: "Secondary classroom", category: "Academics" },
    { file: "by-secondary-05.webp", title: "Secondary student in class", category: "Academics" },
    { file: "by-secondary-06.webp", title: "Secondary student portrait", category: "Academics" },
    { file: "by-secondary-07.webp", title: "Secondary student in class", category: "Academics" },
    { file: "by-secondary-08.webp", title: "Secondary science laboratory", category: "Academics" },
    { file: "by-secondary-09.webp", title: "Secondary laboratory group work", category: "Academics" },
    { file: "by-secondary-10.webp", title: "Secondary chemistry experiment", category: "Academics" },
  ];
  for (let i = 0; i < gallery.length; i++) {
    const g = gallery[i];
    await client.createOrReplace({
      _id: `galleryImage-batch3-${i + 1}`,
      _type: "galleryImage",
      title: g.title,
      image: await img(g.file),
      category: g.category,
      order: 200 + i,
    });
  }
  console.log(`\n  ${gallery.length} new gallery photos added (sports + secondary)`);

  // ---------- Program slideshows ----------
  const nurseryGallery = [
    "by-nursery-play.webp",
    "by-gallery-campus-01.webp",
    "by-gallery-campus-02.webp",
    "by-gallery-academics-01.webp",
    "by-gallery-life-01.webp",
  ];
  const primaryGallery = [
    "by-primary-class.webp",
    "by-gallery-academics-03.webp",
    "by-gallery-academics-04.webp",
    "by-gallery-academics-05.webp",
    "by-gallery-academics-06.webp",
  ];
  const secondaryGallery = [
    "by-secondary-lab.webp",
    "by-secondary-01.webp",
    "by-secondary-04.webp",
    "by-gallery-academics-09.webp",
    "by-sports-football-1.webp",
    "by-sports-netball-1.webp",
  ];

  async function setGallery(id, files) {
    const refs = [];
    for (const f of files) refs.push(await img(f));
    await client.patch(id).set({ gallery: refs }).commit();
  }

  await setGallery("program-nursery", nurseryGallery);
  await setGallery("program-primary", primaryGallery);
  await setGallery("program-secondary", secondaryGallery);
  console.log("\n  Program slideshows set (nursery, primary, secondary)");

  console.log("\nDone.");
}

run().catch((err) => {
  console.error("\nFAILED:", err.message);
  process.exit(1);
});
