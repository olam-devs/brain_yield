/*
 * Uploads the final "Message from the Head of School" video + poster to
 * Sanity and sets them on the homePage document.
 *
 * Run with: node scripts/upload-video.js <path-to-video.mp4> <path-to-poster.jpg>
 */
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");

const root = path.join(__dirname, "..");
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

const videoPath = process.argv[2];
const posterPath = process.argv[3];

async function run() {
  console.log("Uploading video (this can take a couple of minutes for a ~30MB file)...");
  const videoBuffer = fs.readFileSync(videoPath);
  const videoAsset = await client.assets.upload("file", videoBuffer, {
    filename: "brain-yield-head-of-school-message.mp4",
    contentType: "video/mp4",
  });
  console.log("Video uploaded:", videoAsset._id);

  console.log("Uploading poster image...");
  const posterBuffer = fs.readFileSync(posterPath);
  const posterAsset = await client.assets.upload("image", posterBuffer, {
    filename: "video-poster.jpg",
  });
  console.log("Poster uploaded:", posterAsset._id);

  await client
    .patch("homePage")
    .set({
      video: { _type: "file", asset: { _type: "reference", _ref: videoAsset._id } },
      videoPoster: { _type: "image", asset: { _type: "reference", _ref: posterAsset._id } },
    })
    .commit();
  console.log("homePage document updated with video + poster.");
}

run().catch((err) => {
  console.error("FAILED:", err.message);
  process.exit(1);
});
