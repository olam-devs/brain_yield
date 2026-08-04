/*
 * One-time (rerunnable) seed script: populates the Sanity dataset with the
 * content that is currently live on brainyieldschools.sc.tz (via hardcoded
 * fallbacks in the Next.js app), so the CMS Studio has real, editable
 * documents instead of an empty schema. Uses createOrReplace with fixed
 * document IDs, so it's safe to run again — it won't create duplicates.
 *
 * Run with: node scripts/seed.js
 */
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

// --- env ---
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

// --- image upload with cache (avoid re-uploading the same file twice) ---
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

async function put(doc) {
  await client.createOrReplace(doc);
  console.log(`  ${doc._type} / ${doc._id}`);
}

async function run() {
  console.log("Uploading images (this takes a few minutes for ~90 files)...");

  // ---------- Site Settings ----------
  await put({
    _id: "siteSettings",
    _type: "siteSettings",
    schoolName: "Brain Yield Schools",
    tagline: "Together We Make The Difference With Excellence",
    footerBlurb:
      "Together We Make The Difference With Excellence. Nurturing confident, responsible leaders through quality education in Dar es Salaam, Tanzania.",
    address: "Best One Road, Salasala",
    addressLocality: "Kinondoni",
    addressRegion: "Dar es Salaam",
    addressCountry: "Tanzania",
    phones: [
      { _key: "p1", label: "Director", number: "+255 754 947 370" },
      { _key: "p2", label: "Manager", number: "+255 755 394 008" },
      { _key: "p3", label: "Head Pre & Primary", number: "+255 657 337 849" },
      { _key: "p4", label: "Head Secondary", number: "+255 620 839 096" },
    ],
    email: "brainyield.schools2020@gmail.com",
    officeHours: [
      { _key: "h1", label: "Monday - Friday", hours: "7:30 AM - 4:00 PM" },
      { _key: "h2", label: "Saturday", hours: "9:00 AM - 1:00 PM" },
      { _key: "h3", label: "Sunday", hours: "Closed" },
    ],
    mapEmbedUrl: "https://maps.google.com/maps?q=75WH%2BR5+Dar+es+Salaam&output=embed",
    youtubeUrl: "https://www.youtube.com/@brainyieldschools",
    instagramUrl: "https://www.instagram.com/brainyieldschools",
    facebookUrl: "https://www.facebook.com/brainyieldschools",
    threadsUrl: "https://www.threads.net/@brainyieldschools",
    tiktokUrl: "https://www.tiktok.com/@brainyieldschools",
    stats: [
      { _key: "s1", value: 100, suffix: "%", label: "PSLE Pass Rate 2024" },
      { _key: "s2", value: 3, suffix: "", label: "Programs: Nursery, Primary, Secondary" },
      { _key: "s3", value: 4, suffix: "-Story", label: "Modern Campus Building" },
      { _key: "s4", value: 2, suffix: "", label: "Options: Day & Boarding" },
    ],
    performanceHighlightTag: "Proven Results",
    performanceHighlightHeading: "100% Pass Rate — PESNO Mock Examination 2024",
    performanceHighlightText:
      "All students passed across all subjects including Kiswahili, Mathematics, Social Studies, English, Science, and Civic & Moral Education, with a school average of 39.097 marks. High percentages of students achieved top grades (A and B), reflecting consistent academic excellence.",
  });

  // ---------- Home Page ----------
  await put({
    _id: "homePage",
    _type: "homePage",
    welcomeTag: "About Us",
    welcomeHeading: "Welcome to Brain Yield Schools",
    welcomeParagraph1:
      "Brain Yield Schools is a leading private educational institution located at Salasala, Kinondoni – Dar es Salaam, Tanzania. We offer quality education from Pre-Primary, Primary to Secondary levels, providing both Day and Boarding options.",
    welcomeParagraph2:
      "Our commitment is to nurture academic excellence, strong character, creativity, and leadership skills in every learner.",
    ctaHeading: "Ready to Give Your Child the Best Education?",
    ctaDescription:
      "Join the Brain Yield family and watch your child thrive in a nurturing, innovative, and excellence-driven environment. Day & Boarding available.",
    ctaButton1Text: "Start Application",
    ctaButton2Text: "Schedule a Visit",
  });

  // ---------- About Page ----------
  await put({
    _id: "aboutPage",
    _type: "aboutPage",
    heroTitle: "About Brain Yield Schools",
    heroSubtitle: "Our Story — Salasala, Dar es Salaam",
    heroDescription:
      "Building a legacy of educational excellence in Tanzania, shaping young minds and transforming futures through personalized learning.",
    heroImage: await img("front view.webp"),
    historyTag: "Our Journey",
    historyHeading: "A Growing Legacy of Excellence",
    historyParagraphs: [
      "Located at Best One Road, Salasala, Kinondoni, Dar es Salaam, Brain Yield Schools was founded with a powerful vision: to create a learning institution where every child could discover their unique potential and develop into a confident, responsible leader.",
      "From Nursery through Secondary education, we provide comprehensive programs with both day and boarding options. Our modern 4-story campus features spacious classrooms, fully equipped computer labs for digital learning, and well-supervised boarding dormitories.",
      "Our commitment to personalized learning has delivered remarkable results. In the PESNO Grade Seven Mock Examination (March 2024), all our students passed across all subjects — Kiswahili, Mathematics, Social Studies, English, Science, and Civic & Moral Education — with high percentages achieving top grades (A and B).",
    ],
    historyImage: await img("school buildings.webp"),
    statBadgeNumber: "100%",
    statBadgeLabel: "Pass Rate — PSLE 2024",
    missionText:
      "Every child to develop a curiosity of learning, discover their interests and grow in love of learning. We also desire to have strong families through parent support / fellowship and skills training.",
    visionText:
      "Excellent care to children while fostering each child's intellectual, social, physical and moral development in an academic-rich environment.",
  });

  // ---------- Admissions Page ----------
  await put({
    _id: "admissionsPage",
    _type: "admissionsPage",
    heroDescription:
      "Begin your child's journey to excellence. Day and boarding options available. Our admissions process is simple, transparent, and welcoming.",
    steps: [
      { _key: "st1", title: "Download & Print Form", description: "Download the application form below, or collect one at the school campus at Salasala, Kinondoni." },
      { _key: "st2", title: "Submit Documents", description: "Complete and return the admission form together with required documents: a copy of the birth certificate, passport-size photos, and previous academic reports." },
      { _key: "st3", title: "Pay Registration Fee", description: "Complete the registration process by paying the required registration fee at the school office." },
      { _key: "st4", title: "Receive Confirmation", description: "Successful applicants will receive their admission confirmation letter with full enrollment details from our admissions team." },
    ],
    requirements: [
      "Completed admission form",
      "Copy of birth certificate",
      "Passport-size photographs",
      "Previous academic reports / school reports",
    ],
    fees: [
      { _key: "f1", program: "Pre-Primary (Ages 3–5)", dayOption: "Contact School", boardingOption: "Contact School", details: "Contact School" },
      { _key: "f2", program: "Primary (Standard 1–7)", dayOption: "Contact School", boardingOption: "Contact School", details: "Contact School" },
      { _key: "f3", program: "Secondary (Form 1–4)", dayOption: "Contact School", boardingOption: "Contact School", details: "Contact School" },
    ],
    feesNote: "Contact us for detailed fee information for each program and option.",
    dayFeatures: [
      "Structured daily academic schedule",
      "Supervised study sessions",
      "Participation in clubs and sports",
      "School transport services available on selected routes",
    ],
    boardingFeatures: [
      "Secure and well-supervised dormitories",
      "Balanced and nutritious meal programs",
      "Evening prep and academic support sessions",
      "24/7 pastoral care and supervision",
      "Structured daily routine for discipline and independence",
    ],
  });

  // ---------- Hero Slides ----------
  const heroSlides = [
    { file: "school view 1.webp", heading: "Together We Make The Difference With Excellence", subheading: "Quality education from Nursery to Secondary at Salasala, Dar es Salaam" },
    { file: "pre primary in assembly.webp", heading: "Nurturing Confident, Responsible Leaders", subheading: "Personalized learning with both day and boarding options for every family" },
    { file: "school view 2.webp", heading: "100% Pass Rate — PSLE 2024", subheading: "Proven academic excellence with top grades across all subjects" },
    { file: "school view 3.webp", heading: "Modern Facilities, Holistic Development", subheading: "4-story campus with computer labs, boarding dormitories, and a school garden" },
  ];
  for (let i = 0; i < heroSlides.length; i++) {
    const s = heroSlides[i];
    await put({
      _id: `heroSlide-${i + 1}`,
      _type: "heroSlide",
      heading: s.heading,
      subheading: s.subheading,
      image: await img(s.file),
      order: i + 1,
    });
  }

  // ---------- Programs ----------
  const programs = [
    {
      id: "nursery",
      title: "Pre-Primary (Nursery & Kindergarten)",
      subtitle: "Ages 3 – 5",
      description: "Our Pre-Primary program provides a safe, warm, and nurturing environment where young learners develop foundational skills. We focus on early literacy, numeracy, communication skills, and social development — giving every child the strong start they deserve.",
      homeSummary: "Early childhood education for ages 3–5, focusing on literacy, numeracy, communication skills, and social development in a safe and nurturing environment. Available as Day and Boarding.",
      curriculum: ["Early literacy and reading readiness", "Numeracy and number awareness", "Communication and language skills", "Social and emotional development", "Creative arts, music, and movement", "Physical development and motor skills", "Kiswahili and English foundations", "Environmental and nature awareness"],
      file: "IMG_6191.webp",
    },
    {
      id: "primary",
      title: "Primary School",
      subtitle: "Standard 1 – 7",
      description: "Our Primary program follows the Tanzanian National Curriculum and builds strong academic foundations across all core subjects. We integrate ICT into learning and thoroughly prepare students for the Primary School Leaving Examination (PSLE), with both Day and Boarding options available.",
      homeSummary: "Standards 1–7 following the Tanzanian National Curriculum. Strong foundation in English, Kiswahili, Mathematics, Science & Technology, Social Studies, and ICT — with preparation for the PSLE. Day and Boarding available.",
      curriculum: ["English Language", "Kiswahili Language", "Mathematics", "Science and Technology", "Social Studies", "Civic and Moral Education", "ICT and Computer Studies", "Creative and Cultural Arts"],
      file: "school view 7.webp",
    },
    {
      id: "secondary",
      title: "Secondary School",
      subtitle: "Form 1 – 4 (O-Level)",
      description: "Our Secondary program follows the National O-Level Curriculum. With qualified and experienced teachers, we offer Science and Arts subject combinations and provide thorough preparation for the Certificate of Secondary Education Examination (CSEE). Both Day and Boarding options are available.",
      homeSummary: "Forms 1–4 following the National O-Level Curriculum. Qualified and experienced teachers, Science and Arts subject combinations, and thorough preparation for the CSEE. Day and Boarding available.",
      curriculum: ["Kiswahili and English Language", "Mathematics", "Physics, Chemistry, and Biology", "History and Geography", "Civics and General Studies", "Computer Science and ICT", "Commerce and Book Keeping", "Career Guidance and Counseling"],
      file: "school view 8.webp",
    },
  ];
  for (let i = 0; i < programs.length; i++) {
    const p = programs[i];
    await put({
      _id: `program-${p.id}`,
      _type: "program",
      title: p.title,
      slug: { _type: "slug", current: p.id },
      subtitle: p.subtitle,
      description: p.description,
      homeSummary: p.homeSummary,
      curriculum: p.curriculum,
      optionText: "Day & Boarding options available",
      image: await img(p.file),
      showOnHome: true,
      order: i + 1,
    });
  }

  // ---------- Facilities ----------
  const facilities = [
    { title: "4-Story Campus Building", description: "Our impressive 4-story building houses spacious, well-ventilated classrooms equipped with modern teaching aids and comfortable furniture designed for optimal learning.", file: "IMG_6061.webp" },
    { title: "Computer Laboratory", description: "Fully equipped computer lab for digital learning, providing students with hands-on experience in ICT, programming, and research from an early age.", file: "IMG_6381.webp" },
    { title: "Boarding Dormitories", description: "Well-supervised boarding dormitories with proper facilities and care, providing a safe and comfortable home-away-from-home for boarding students.", file: "IMG_6354.webp" },
    { title: "Science Laboratory", description: "Equipped science lab for hands-on experimental learning in physics, chemistry, and biology, bringing scientific concepts to life.", file: "IMG_6300.webp" },
    { title: "Library & Resource Center", description: "A growing library with textbooks, reference materials, and reading resources to support academic research and cultivate a love for reading.", file: "IMG_6262.webp" },
    { title: "School Garden", description: "Our School Garden Project fosters environmental awareness and teamwork, giving students hands-on experience in sustainability and agriculture.", file: "IMG_6092.webp" },
  ];
  for (let i = 0; i < facilities.length; i++) {
    const f = facilities[i];
    await put({
      _id: `facility-${i + 1}`,
      _type: "facility",
      title: f.title,
      description: f.description,
      image: await img(f.file),
      order: i + 1,
    });
  }

  // ---------- Why Choose Us (featureItem) ----------
  const features = [
    { icon: "GraduationCap", title: "Dedicated Teachers", description: "Highly qualified and passionate educators committed to every student's success." },
    { icon: "BookOpen", title: "Personalized Learning", description: "Tailored educational approaches that meet each child where they are and help them excel." },
    { icon: "Building2", title: "Modern 4-Story Campus", description: "Spacious classrooms, equipped labs, and boarding dormitories in our state-of-the-art facility." },
    { icon: "Globe", title: "Holistic Development", description: "Academics, extracurriculars, and community engagement for well-rounded growth." },
    { icon: "Home", title: "Day & Boarding Options", description: "Flexible day and boarding arrangements to accommodate every family's needs." },
    { icon: "Trophy", title: "Proven Academic Results", description: "Consistently outstanding performance in national examinations with top grades across subjects." },
  ];
  for (let i = 0; i < features.length; i++) {
    await put({ _id: `featureItem-${i + 1}`, _type: "featureItem", ...features[i], order: i + 1 });
  }

  // ---------- School Activities ----------
  const activities = [
    { icon: "ClipboardList", title: "Monthly Academic Assessments", description: "Regular assessments to monitor every student's progress and ensure they stay on track across all subjects." },
    { icon: "Dumbbell", title: "Sports & Athletics", description: "Structured sports programs that build teamwork, fitness, discipline, and a healthy competitive spirit." },
    { icon: "Mic2", title: "Debate & Academic Clubs", description: "Clubs that sharpen critical thinking, public speaking, and leadership skills through regular debates and competitions." },
    { icon: "Monitor", title: "ICT & Computer Training", description: "Regular computer sessions equipping students with essential digital literacy and technology skills for the modern world." },
    { icon: "Award", title: "Leadership & Character Seminars", description: "Dedicated programs that build integrity, responsibility, and leadership qualities in every learner." },
  ];
  for (let i = 0; i < activities.length; i++) {
    await put({ _id: `activityItem-${i + 1}`, _type: "activityItem", ...activities[i], order: i + 1 });
  }

  // ---------- Core Values ----------
  const values = [
    { icon: "Star", title: "Excellence", description: "We strive for the highest standards in everything we do, from teaching to character development." },
    { icon: "Shield", title: "Integrity", description: "We uphold honesty, transparency, and ethical behavior in all our interactions." },
    { icon: "Lightbulb", title: "Innovation", description: "We embrace modern approaches, digital learning, and creative thinking in education." },
    { icon: "Handshake", title: "Respect", description: "We value diversity and treat every member of our community with dignity." },
    { icon: "Sprout", title: "Responsibility", description: "We develop students who are accountable, caring, and socially conscious leaders." },
    { icon: "Users", title: "Community", description: "We foster teamwork, environmental awareness, and active engagement with the wider community." },
  ];
  for (let i = 0; i < values.length; i++) {
    await put({ _id: `coreValue-${i + 1}`, _type: "coreValue", ...values[i], order: i + 1 });
  }

  // ---------- FAQs ----------
  const faqs = [
    { question: "Does the school offer both Day and Boarding?", answer: "Yes, Brain Yield Schools offers both Day and Boarding options at Pre-Primary, Primary, and Secondary levels. Boarding students reside in well-supervised, secure dormitories on campus." },
    { question: "Are admissions open throughout the year?", answer: "Admissions are open depending on space availability. Early application is encouraged to secure a place for your child." },
    { question: "Does the school provide transport?", answer: "Yes, school transport services are available for Day students in selected areas, offering safe and reliable routes." },
    { question: "What curriculum does the school follow?", answer: "Brain Yield Schools follows the Tanzanian National Curriculum across all levels — Pre-Primary, Primary (Standard 1–7), and Secondary (Form 1–4, O-Level)." },
    { question: "Are extracurricular activities offered?", answer: "Yes. Students actively participate in sports and athletics, debate and academic clubs, ICT and computer training sessions, and leadership and character-building seminars." },
  ];
  for (let i = 0; i < faqs.length; i++) {
    await put({ _id: `faq-${i + 1}`, _type: "faq", page: "Admissions", order: i + 1, ...faqs[i] });
  }

  // ---------- Testimonials (only the ones already shown on the live homepage —
  // see chat summary re: the /testimonials page's extra placeholder entries) ----------
  const testimonials = [
    { name: "Mrs. Sarah Mwangi", role: "Parent — Primary School", rating: 5, quote: "Brain Yield Schools has transformed my child's learning experience. The teachers are dedicated and the environment is truly nurturing. My daughter now looks forward to school every morning." },
    { name: "Joseph Kimaro", role: "Alumni — Form 4 Graduate", rating: 5, quote: "The foundation I received at Brain Yield prepared me well for my national examinations and beyond. The personalized attention from teachers made all the difference." },
    { name: "Mrs. Fatima Hassan", role: "Parent — Boarding Student", rating: 5, quote: "The boarding facilities are well-supervised and the holistic approach to education is remarkable. My children have grown academically, socially, and in character." },
  ];
  for (let i = 0; i < testimonials.length; i++) {
    await put({ _id: `testimonial-${i + 1}`, _type: "testimonial", ...testimonials[i] });
  }

  // ---------- News ----------
  const news = [
    { title: "100% Pass Rate in PESNO Grade Seven Mock Examination 2024", excerpt: "We are proud to announce that all Brain Yield Schools students passed across all subjects in the PESNO Grade Seven Mock Examination March 2024.", category: "Achievements", file: "IMG_5977.webp", publishedAt: "2024-03-15", featured: true },
    { title: "Admissions Open for 2026 Academic Year", excerpt: "Brain Yield Schools is now accepting applications for Pre-Primary, Primary, and Secondary students for the 2026 academic year. Both day and boarding options are available.", category: "Admissions", file: "Main gate.webp", publishedAt: "2026-02-10" },
    { title: "Ongoing Improvement of Learning Facilities", excerpt: "We continue to invest in our campus, upgrading classrooms, dormitories, and common areas to provide the best possible learning environment for every student.", category: "News", file: "school buildings.webp", publishedAt: "2026-02-01" },
    { title: "Expansion of ICT & Computer Lab Programs", excerpt: "Our ICT programs continue to grow with the expansion of computer lab facilities across all levels. Every student now benefits from enhanced digital learning.", category: "News", file: "IMG_6417.webp", publishedAt: "2026-01-15" },
    { title: "Continued Strong National Examination Performance", excerpt: "Brain Yield Schools maintains its proud record of outstanding national examination results.", category: "Achievements", file: "IMG_5966.webp", publishedAt: "2024-03-10" },
    { title: "Parent-Teacher Conference Success", excerpt: "Our recent PTA meeting brought together parents and educators to discuss student progress and plans for the academic year ahead.", category: "Events", file: "front view.webp", publishedAt: "2025-12-05" },
    { title: "Sports Day & Cultural Celebration", excerpt: "Students celebrated diversity and sportsmanship through athletics, team sports, traditional dance, and cultural exhibitions.", category: "Events", file: "sports - football.webp", publishedAt: "2025-11-20" },
  ];
  for (let i = 0; i < news.length; i++) {
    const n = news[i];
    await put({
      _id: `news-${i + 1}`,
      _type: "news",
      title: n.title,
      slug: { _type: "slug", current: n.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 90) },
      excerpt: n.excerpt,
      category: n.category,
      image: await img(n.file),
      publishedAt: new Date(n.publishedAt).toISOString(),
      featured: !!n.featured,
    });
  }

  // ---------- Leadership Team (text only — see chat summary re: stock photos) ----------
  const leaders = [
    { name: "School Director", position: "Founder / Director", bio: "Our founder established Brain Yield Schools with a vision to create a quality learning institution at Salasala that nurtures every child's potential and builds confident, responsible leaders." },
    { name: "Head of Academics", position: "Academic Director", bio: "Overseeing curriculum development and ensuring academic excellence across Nursery, Primary, and Secondary programs with personalized learning approaches." },
    { name: "Head of Administration", position: "Administrative Director", bio: "Ensuring smooth operations, safe boarding facilities, and a conducive learning environment across our 4-story campus." },
    { name: "Head of Student Affairs", position: "Student Welfare Director", bio: "Coordinating extracurricular activities, boarding supervision, the School Garden Project, and holistic student development programs." },
  ];
  for (let i = 0; i < leaders.length; i++) {
    await put({ _id: `leadershipTeam-${i + 1}`, _type: "leadershipTeam", order: i + 1, ...leaders[i] });
  }

  // ---------- Gallery ----------
  const gallery = [
    { file: "Main gate.webp", title: "Brain Yield Schools main entrance gate", category: "Campus" },
    { file: "school view 7.webp", title: "School campus view", category: "Campus" },
    { file: "school view 8.webp", title: "School campus exterior", category: "Campus" },
    { file: "school view 9.webp", title: "Campus grounds", category: "Campus" },
    { file: "school bus.webp", title: "Brain Yield Schools bus", category: "Campus" },
    { file: "swings for kids.webp", title: "Playground swings for young learners", category: "Campus" },
    { file: "sports - football.webp", title: "Students playing football", category: "Sports" },
    { file: "rope pulling playground.webp", title: "Rope pulling activity on the playground", category: "Sports" },
    { file: "IMG_5966.webp", title: "Full school assembly", category: "Events" },
    { file: "IMG_5973.webp", title: "Students marching band performance", category: "Events" },
    { file: "IMG_5977.webp", title: "School assembly with all students", category: "Events" },
    { file: "IMG_5980.webp", title: "Students in outdoor assembly", category: "Events" },
    { file: "IMG_6007.webp", title: "Primary students group photo", category: "Events" },
    { file: "IMG_6045.webp", title: "Kindergarten graduation ceremony", category: "Events" },
    { file: "IMG_5988.webp", title: "Campus corridor and playground", category: "Campus" },
    { file: "IMG_6061.webp", title: "4-story school building with students on balconies", category: "Campus" },
    { file: "IMG_6092.webp", title: "Students working in the school garden", category: "Campus" },
    { file: "IMG_6096.webp", title: "Students harvesting in school garden", category: "Campus" },
    { file: "IMG_6350.webp", title: "Kindergarten nap room", category: "Campus" },
    { file: "IMG_6685.webp", title: "Children on playground equipment", category: "Campus" },
    { file: "IMG_6126.webp", title: "Students in home economics — baking class", category: "Academics" },
    { file: "IMG_6134.webp", title: "Students learning baking skills", category: "Academics" },
    { file: "IMG_6179.webp", title: "Nursery classroom activity", category: "Academics" },
    { file: "IMG_6188.webp", title: "Pre-primary students playing", category: "Academics" },
    { file: "IMG_6190.webp", title: "Pre-primary student at play", category: "Academics" },
    { file: "IMG_6191.webp", title: "Teacher at blackboard with nursery class", category: "Academics" },
    { file: "IMG_6215.webp", title: "Students in cooking class", category: "Academics" },
    { file: "IMG_6262.webp", title: "Students reading in the school library", category: "Academics" },
    { file: "IMG_6264.webp", title: "Library reading session with teacher", category: "Academics" },
    { file: "IMG_6279.webp", title: "Students using voltmeter in science lab", category: "Academics" },
    { file: "IMG_6300.webp", title: "Students studying anatomy model in science lab", category: "Academics" },
    { file: "IMG_6303.webp", title: "Science lab — human body model", category: "Academics" },
    { file: "IMG_6354.webp", title: "Kindergarten nap time", category: "Academics" },
    { file: "IMG_6381.webp", title: "Teacher and students in computer lab", category: "Academics" },
    { file: "IMG_6410.webp", title: "Students using computers in ICT lab", category: "Academics" },
    { file: "IMG_6417.webp", title: "ICT teacher supervising students", category: "Academics" },
    { file: "IMG_6422.webp", title: "Students working on computers with teacher", category: "Academics" },
    { file: "IMG_6576.webp", title: "Students in sports bibs on the field", category: "Sports" },
    { file: "IMG_6626.webp", title: "Female sports team", category: "Sports" },
    { file: "IMG_6631.webp", title: "Students exercising on sports field", category: "Sports" },
    { file: "IMG_6640.webp", title: "Young students in sports kit", category: "Sports" },
    { file: "IMG_6643.webp", title: "Students cheering at sports day", category: "Sports" },
    { file: "IMG_6647.webp", title: "Students jumping during athletics", category: "Sports" },
    { file: "IMG_6720.webp", title: "Football match action", category: "Sports" },
    { file: "IMG_6656.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6658.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6663.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6667.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6688.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6695.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6703.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6708.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6713.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6717.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6721.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6722.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6724.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6735.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6736.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6760.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6779.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6801.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6805.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6817.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6830.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6839.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6843.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6845.webp", title: "School life at Brain Yield", category: "School Life" },
    { file: "IMG_6853.webp", title: "School life at Brain Yield", category: "School Life" },
  ];
  for (let i = 0; i < gallery.length; i++) {
    const g = gallery[i];
    await put({
      _id: `galleryImage-${i + 1}`,
      _type: "galleryImage",
      title: g.title,
      image: await img(g.file),
      category: g.category,
      order: i + 1,
    });
  }

  console.log("\nSeed complete.");
}

run().catch((err) => {
  console.error("\nSEED FAILED:", err.message);
  process.exit(1);
});
