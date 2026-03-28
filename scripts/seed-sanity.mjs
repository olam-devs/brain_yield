/**
 * Seed script — pushes all hardcoded data into Sanity.
 * Run once: node scripts/seed-sanity.mjs
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ptwk8eo0",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "sknYztVgrENudvzZWHTmuaIZW5GJ2Ldlzw7frOCsYnKuGPbS53dneWTozoGEBxbjT7rtqtoIYUX1O0CEy9R9IjPrFZYvttbl5YidJaQbW1ceZPc2qKaEu43uMwTjgPGSykVoWGwFDmAwvgzwBxNNUxEOJ7lG9KvaqXRuthGbAP7gZ3Hm98YJ",
  useCdn: false,
});

// ── TESTIMONIALS ────────────────────────────────────────────────
const testimonials = [
  { name: "Mrs. Sarah Mwangi",      role: "Parent — Primary School",     rating: 5, quote: "Brain Yield Schools has transformed my child's learning experience. The teachers are dedicated and the environment is truly nurturing. My daughter now looks forward to school every morning." },
  { name: "Joseph Kimaro",          role: "Alumni — Form 4 Graduate",     rating: 5, quote: "The foundation I received at Brain Yield prepared me well for my national examinations and beyond. The personalized attention from teachers made all the difference." },
  { name: "Mrs. Fatima Hassan",     role: "Parent — Boarding Student",    rating: 5, quote: "The boarding facilities are well-supervised and the holistic approach to education is remarkable. My children have grown academically, socially, and in character." },
  { name: "Mrs. Adunni Bakare",     role: "Parent — Primary School",      rating: 5, quote: "Brain Yield Schools has transformed my child's learning experience. The teachers are dedicated and the environment is truly nurturing. My daughter now looks forward to school every morning." },
  { name: "David Okonkwo",          role: "Alumni — Class of 2020",       rating: 5, quote: "The foundation I received at Brain Yield prepared me for university and beyond. The critical thinking skills and values instilled in me continue to guide my academic journey." },
  { name: "Chinedu Nwosu",          role: "Alumni — Class of 2019",       rating: 5, quote: "Brain Yield gave me the confidence to pursue my dreams. The teachers believed in me even when I doubted myself. Today, I'm studying engineering at a top university, and I owe it to my foundation here." },
  { name: "Mrs. Blessing Ogundimu", role: "Parent — Pre-School",          rating: 4, quote: "Watching my 3-year-old thrive at Brain Yield has been a joy. The pre-school program is exceptional — creative, engaging, and perfectly paced for young learners." },
  { name: "Amara Eze",              role: "Current Student — SS2",        rating: 5, quote: "I love how our school encourages us to think beyond textbooks. The debate club, science fairs, and leadership programs have shaped me into a more confident person." },
  { name: "Mr. Tunde Adeleke",      role: "Parent — Primary & Secondary", rating: 5, quote: "We've had two children go through Brain Yield, and the consistency of quality education has been impressive. The investment in our children's future has been worth every penny." },
  { name: "Ngozi Obi",              role: "Alumni — Class of 2021",       rating: 5, quote: "The STEM program at Brain Yield was ahead of its time. Learning coding and robotics in secondary school gave me a massive head start in my computer science degree." },
  { name: "Mrs. Aisha Yusuf",       role: "Parent — Pre-School",          rating: 5, quote: "The care and attention given to the youngest learners is outstanding. The teachers are patient, loving, and professional. My child has blossomed since joining Brain Yield." },
];

// ── LEADERSHIP ──────────────────────────────────────────────────
const leaders = [
  { name: "School Director",      position: "Founder / Director",        order: 1, bio: "Our founder established Brain Yield Schools with a vision to create a quality learning institution at Salasala that nurtures every child's potential and builds confident, responsible leaders." },
  { name: "Head of Academics",    position: "Academic Director",         order: 2, bio: "Overseeing curriculum development and ensuring academic excellence across Nursery, Primary, and Secondary programs with personalized learning approaches." },
  { name: "Head of Administration", position: "Administrative Director", order: 3, bio: "Ensuring smooth operations, safe boarding facilities, and a conducive learning environment across our 4-story campus." },
  { name: "Head of Student Affairs", position: "Student Welfare Director", order: 4, bio: "Coordinating extracurricular activities, boarding supervision, the School Garden Project, and holistic student development programs." },
];

// ── NEWS ────────────────────────────────────────────────────────
const news = [
  { title: "100% Pass Rate in PESNO Grade Seven Mock Examination 2024", excerpt: "We are proud to announce that all Brain Yield Schools students passed across all subjects in the PESNO Grade Seven Mock Examination March 2024.", category: "Achievements", publishedAt: "2024-03-01T00:00:00Z", featured: true },
  { title: "Admissions Open for 2026 Academic Year",                    excerpt: "Brain Yield Schools is now accepting applications for Pre-Primary, Primary, and Secondary students for the 2026 academic year. Both day and boarding options are available.", category: "Admissions",  publishedAt: "2026-02-01T00:00:00Z", featured: false },
  { title: "Ongoing Improvement of Learning Facilities",                excerpt: "We continue to invest in our campus, upgrading classrooms, dormitories, and common areas to provide the best possible learning environment for every student.", category: "News",        publishedAt: "2026-02-01T00:00:00Z", featured: false },
  { title: "Expansion of ICT & Computer Lab Programs",                  excerpt: "Our ICT programs continue to grow with the expansion of computer lab facilities across all levels. Every student now benefits from enhanced digital learning.", category: "News",        publishedAt: "2026-01-01T00:00:00Z", featured: false },
  { title: "Continued Strong National Examination Performance",         excerpt: "Brain Yield Schools maintains its proud record of outstanding national examination results.", category: "Achievements", publishedAt: "2024-03-01T00:00:00Z", featured: false },
  { title: "Parent-Teacher Conference Success",                         excerpt: "Our recent PTA meeting brought together parents and educators to discuss student progress and plans for the academic year ahead.", category: "Events", publishedAt: "2025-12-01T00:00:00Z", featured: false },
  { title: "Sports Day & Cultural Celebration",                         excerpt: "Students celebrated diversity and sportsmanship through athletics, team sports, traditional dance, and cultural exhibitions.", category: "Events", publishedAt: "2025-11-01T00:00:00Z", featured: false },
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function checkExisting(type) {
  const count = await client.fetch(`count(*[_type == "${type}"])`);
  return count;
}

async function seedTestimonials() {
  const existing = await checkExisting("testimonial");
  if (existing > 0) {
    console.log(`⚠️  Testimonials already exist (${existing} found) — skipping.`);
    return;
  }
  console.log("Seeding testimonials...");
  for (const t of testimonials) {
    await client.create({ _type: "testimonial", ...t });
    process.stdout.write(".");
  }
  console.log(`\n✅ ${testimonials.length} testimonials created.`);
}

async function seedNews() {
  const existing = await checkExisting("news");
  if (existing > 0) {
    console.log(`⚠️  News already exist (${existing} found) — skipping.`);
    return;
  }
  console.log("Seeding news...");
  for (const n of news) {
    await client.create({
      _type: "news",
      title: n.title,
      slug: { _type: "slug", current: slugify(n.title) },
      excerpt: n.excerpt,
      category: n.category,
      publishedAt: n.publishedAt,
      featured: n.featured,
    });
    process.stdout.write(".");
  }
  console.log(`\n✅ ${news.length} news posts created.`);
}

async function seedLeaders() {
  const existing = await checkExisting("leadershipTeam");
  if (existing > 0) {
    console.log(`⚠️  Leadership team already exists (${existing} found) — skipping.`);
    return;
  }
  console.log("Seeding leadership team...");
  for (const l of leaders) {
    await client.create({ _type: "leadershipTeam", ...l });
    process.stdout.write(".");
  }
  console.log(`\n✅ ${leaders.length} leaders created.`);
}

async function main() {
  console.log("🚀 Seeding Sanity dataset...\n");
  await seedTestimonials();
  await seedNews();
  await seedLeaders();
  console.log("\n🎉 Done! Gallery images and Application Forms must be uploaded manually (they require image/file assets).");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
