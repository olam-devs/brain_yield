/*
 * Converts every raster image in public/school pics to WebP (max width 2000px,
 * quality 78, EXIF-rotated, metadata stripped) and deletes the original once
 * the .webp sibling exists. Run once, then update code references separately.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const DIR = path.join(__dirname, "..", "public", "school pics");
const RASTER_EXT = /\.(jpe?g|png)$/i;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function unlinkWithRetry(p, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      fs.unlinkSync(p);
      return;
    } catch (err) {
      if (i === attempts - 1) throw err;
      await sleep(300);
    }
  }
}

async function run() {
  const files = fs.readdirSync(DIR).filter((f) => RASTER_EXT.test(f));
  let totalBefore = 0;
  let totalAfter = 0;
  const report = [];
  const srcPaths = [];

  for (const file of files) {
    const srcPath = path.join(DIR, file);
    const base = file.replace(RASTER_EXT, "");
    const destPath = path.join(DIR, `${base}.webp`);
    const before = fs.statSync(srcPath).size;

    await sharp(srcPath)
      .rotate() // apply EXIF orientation
      .resize({ width: 2000, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(destPath);

    const after = fs.statSync(destPath).size;
    totalBefore += before;
    totalAfter += after;
    report.push({ file, before, after });
    srcPaths.push(srcPath);
  }

  // Delete originals in a second pass, after all sharp file handles are closed.
  await sleep(500);
  for (const srcPath of srcPaths) {
    await unlinkWithRetry(srcPath);
  }

  report.sort((a, b) => b.before - a.before);
  for (const r of report) {
    console.log(
      `${r.file} -> ${(r.before / 1024).toFixed(0)}KB -> ${(r.after / 1024).toFixed(0)}KB`
    );
  }
  console.log(
    `\nTOTAL: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB (${files.length} files)`
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
