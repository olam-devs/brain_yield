import { client, urlFor } from "@/lib/sanity";

/* ---------------------------------------------------------------------- */
/* Types                                                                   */
/* ---------------------------------------------------------------------- */

export interface Phone {
  label?: string;
  number: string;
}

export interface OfficeHour {
  label: string;
  hours: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface SiteSettings {
  schoolName: string;
  tagline: string;
  footerBlurb: string;
  logoUrl: string | null;
  address: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  phones: Phone[];
  email: string;
  officeHours: OfficeHour[];
  mapEmbedUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  threadsUrl: string;
  tiktokUrl: string;
  stats: StatItem[];
  performanceHighlightTag: string;
  performanceHighlightHeading: string;
  performanceHighlightText: string;
}

export interface HomePageContent {
  welcomeTag: string;
  welcomeHeading: string;
  welcomeParagraph1: string;
  welcomeParagraph2: string;
  videoHeading: string;
  videoDescription: string;
  videoUrl: string | null;
  videoPosterUrl: string | null;
  ctaHeading: string;
  ctaDescription: string;
  ctaImageUrl: string | null;
  ctaButton1Text: string;
  ctaButton2Text: string;
}

export interface AboutPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImageUrl: string | null;
  historyTag: string;
  historyHeading: string;
  historyParagraphs: string[];
  historyImageUrl: string | null;
  statBadgeNumber: string;
  statBadgeLabel: string;
  missionText: string;
  visionText: string;
}

export interface FeeRow {
  program: string;
  dayOption: string;
  boardingOption: string;
  details: string;
}

export interface AdmissionStep {
  title: string;
  description: string;
}

export interface AdmissionsPageContent {
  heroDescription: string;
  steps: AdmissionStep[];
  requirements: string[];
  fees: FeeRow[];
  feesNote: string;
  dayFeatures: string[];
  boardingFeatures: string[];
}

export interface HeroSlide {
  eyebrow: string;
  heading: string;
  subheading: string;
  imageUrl: string;
}

export interface Program {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  homeSummary: string;
  curriculum: string[];
  optionText: string;
  imageUrl: string;
  images: string[];
  showOnHome: boolean;
}

export interface Facility {
  title: string;
  description: string;
  imageUrl: string;
}

export interface IconItem {
  icon: string;
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
  page: string;
}

/* ---------------------------------------------------------------------- */
/* Fallback defaults — mirrors what was previously hardcoded on each page */
/* ---------------------------------------------------------------------- */

const defaultSiteSettings: SiteSettings = {
  schoolName: "Brain Yield Schools",
  tagline: "Together We Make The Difference With Excellence",
  footerBlurb:
    "Together We Make The Difference With Excellence. Nurturing confident, responsible leaders through quality education in Dar es Salaam, Tanzania.",
  logoUrl: null,
  address: "Best One Road, Salasala",
  addressLocality: "Kinondoni",
  addressRegion: "Dar es Salaam",
  addressCountry: "Tanzania",
  phones: [
    { label: "Director", number: "+255 754 947 370" },
    { label: "Manager", number: "+255 755 394 008" },
    { label: "Head Pre & Primary", number: "+255 657 337 849" },
    { label: "Head Secondary", number: "+255 620 839 096" },
  ],
  email: "brainyield.schools2020@gmail.com",
  officeHours: [
    { label: "Monday - Friday", hours: "7:30 AM - 4:00 PM" },
    { label: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { label: "Sunday", hours: "Closed" },
  ],
  mapEmbedUrl: "https://maps.google.com/maps?q=75WH%2BR5+Dar+es+Salaam&output=embed",
  youtubeUrl: "https://www.youtube.com/@brainyieldschools",
  instagramUrl: "https://www.instagram.com/brainyieldschools",
  facebookUrl: "https://www.facebook.com/brainyieldschools",
  threadsUrl: "https://www.threads.net/@brainyieldschools",
  tiktokUrl: "https://www.tiktok.com/@brainyieldschools",
  stats: [
    { value: 100, suffix: "%", label: "PSLE Pass Rate 2024" },
    { value: 3, suffix: "", label: "Programs: Nursery, Primary, Secondary" },
    { value: 4, suffix: "-Story", label: "Modern Campus Building" },
    { value: 2, suffix: "", label: "Options: Day & Boarding" },
  ],
  performanceHighlightTag: "Proven Results",
  performanceHighlightHeading: "100% Pass Rate — PESNO Mock Examination 2024",
  performanceHighlightText:
    "All students passed across all subjects including Kiswahili, Mathematics, Social Studies, English, Science, and Civic & Moral Education, with a school average of 39.097 marks. High percentages of students achieved top grades (A and B), reflecting consistent academic excellence.",
};

const defaultHomePage: HomePageContent = {
  welcomeTag: "About Us",
  welcomeHeading: "Welcome to Brain Yield Schools",
  welcomeParagraph1:
    "Brain Yield Schools is a leading private educational institution located at Salasala, Kinondoni – Dar es Salaam, Tanzania. We offer quality education from Pre-Primary, Primary to Secondary levels, providing both Day and Boarding options.",
  welcomeParagraph2:
    "Our commitment is to nurture academic excellence, strong character, creativity, and leadership skills in every learner.",
  videoHeading: "A Message From Our Head of School",
  videoDescription: "Hear directly from our Head of School about what makes Brain Yield Schools special — our values, our programs, and our commitment to every learner.",
  videoUrl: null,
  videoPosterUrl: null,
  ctaHeading: "Ready to Give Your Child the Best Education?",
  ctaDescription:
    "Join the Brain Yield family and watch your child thrive in a nurturing, innovative, and excellence-driven environment. Day & Boarding available.",
  ctaImageUrl: null,
  ctaButton1Text: "Start Application",
  ctaButton2Text: "Schedule a Visit",
};

const defaultAboutPage: AboutPageContent = {
  heroTitle: "About Brain Yield Schools",
  heroSubtitle: "Our Story — Salasala, Dar es Salaam",
  heroDescription:
    "Building a legacy of educational excellence in Tanzania, shaping young minds and transforming futures through personalized learning.",
  heroImageUrl: null,
  historyTag: "Our Journey",
  historyHeading: "A Growing Legacy of Excellence",
  historyParagraphs: [
    "Located at Best One Road, Salasala, Kinondoni, Dar es Salaam, Brain Yield Schools was founded with a powerful vision: to create a learning institution where every child could discover their unique potential and develop into a confident, responsible leader.",
    "From Nursery through Secondary education, we provide comprehensive programs with both day and boarding options. Our modern 4-story campus features spacious classrooms, fully equipped computer labs for digital learning, and well-supervised boarding dormitories.",
    "Our commitment to personalized learning has delivered remarkable results. In the PESNO Grade Seven Mock Examination (March 2024), all our students passed across all subjects — Kiswahili, Mathematics, Social Studies, English, Science, and Civic & Moral Education — with high percentages achieving top grades (A and B).",
  ],
  historyImageUrl: null,
  statBadgeNumber: "100%",
  statBadgeLabel: "Pass Rate — PSLE 2024",
  missionText:
    "Every child to develop a curiosity of learning, discover their interests and grow in love of learning. We also desire to have strong families through parent support / fellowship and skills training.",
  visionText:
    "Excellent care to children while fostering each child's intellectual, social, physical and moral development in an academic-rich environment.",
};

const defaultAdmissionsPage: AdmissionsPageContent = {
  heroDescription:
    "Begin your child's journey to excellence. Day and boarding options available. Our admissions process is simple, transparent, and welcoming.",
  steps: [
    { title: "Download & Print Form", description: "Download the application form below, or collect one at the school campus at Salasala, Kinondoni." },
    { title: "Submit Documents", description: "Complete and return the admission form together with required documents: a copy of the birth certificate, passport-size photos, and previous academic reports." },
    { title: "Pay Registration Fee", description: "Complete the registration process by paying the required registration fee at the school office." },
    { title: "Receive Confirmation", description: "Successful applicants will receive their admission confirmation letter with full enrollment details from our admissions team." },
  ],
  requirements: [
    "Completed admission form",
    "Copy of birth certificate",
    "Passport-size photographs",
    "Previous academic reports / school reports",
  ],
  fees: [
    { program: "Pre-Primary (Ages 3–5)", dayOption: "Contact School", boardingOption: "Contact School", details: "Contact School" },
    { program: "Primary (Standard 1–7)", dayOption: "Contact School", boardingOption: "Contact School", details: "Contact School" },
    { program: "Secondary (Form 1–4)", dayOption: "Contact School", boardingOption: "Contact School", details: "Contact School" },
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
};

const defaultHeroSlides: HeroSlide[] = [
  { eyebrow: "Quality & Discipline", imageUrl: "/school%20pics/school%20view%201.webp", heading: "Together We Make The Difference With Excellence", subheading: "Quality education from Nursery to Secondary at Salasala, Dar es Salaam" },
  { eyebrow: "Nurturing Young Minds", imageUrl: "/school%20pics/by-hero-nurture.webp", heading: "Nurturing Confident, Responsible Leaders", subheading: "Personalized learning with both day and boarding options for every family" },
  { eyebrow: "Excellence In Education", imageUrl: "/school%20pics/school%20view%202.webp", heading: "100% Pass Rate — PSLE 2024", subheading: "Proven academic excellence with top grades across all subjects" },
  { eyebrow: "Modern Learning Facilities", imageUrl: "/school%20pics/by-hero-assembly.webp", heading: "Modern Facilities, Holistic Development", subheading: "4-story campus with computer labs, boarding dormitories, and a school garden" },
];

const defaultPrograms: Program[] = [
  {
    title: "Pre-Primary (Nursery & Kindergarten)",
    slug: "nursery",
    subtitle: "Ages 3 – 5",
    description: "Our Pre-Primary program provides a safe, warm, and nurturing environment where young learners develop foundational skills. We focus on early literacy, numeracy, communication skills, and social development — giving every child the strong start they deserve.",
    homeSummary: "Early childhood education for ages 3–5, focusing on literacy, numeracy, communication skills, and social development in a safe and nurturing environment. Available as Day and Boarding.",
    curriculum: ["Early literacy and reading readiness", "Numeracy and number awareness", "Communication and language skills", "Social and emotional development", "Creative arts, music, and movement", "Physical development and motor skills", "Kiswahili and English foundations", "Environmental and nature awareness"],
    optionText: "Day & Boarding options available",
    imageUrl: "/school%20pics/by-nursery-play.webp",
    images: [
      "/school%20pics/by-nursery-play.webp",
      "/school%20pics/by-gallery-campus-01.webp",
      "/school%20pics/by-gallery-campus-02.webp",
      "/school%20pics/by-gallery-academics-01.webp",
      "/school%20pics/by-gallery-life-01.webp",
    ],
    showOnHome: true,
  },
  {
    title: "Primary School",
    slug: "primary",
    subtitle: "Standard 1 – 7",
    description: "Our Primary program follows the Tanzanian National Curriculum and builds strong academic foundations across all core subjects. We integrate ICT into learning and thoroughly prepare students for the Primary School Leaving Examination (PSLE), with both Day and Boarding options available.",
    homeSummary: "Standards 1–7 following the Tanzanian National Curriculum. Strong foundation in English, Kiswahili, Mathematics, Science & Technology, Social Studies, and ICT — with preparation for the PSLE. Day and Boarding available.",
    curriculum: ["English Language", "Kiswahili Language", "Mathematics", "Science and Technology", "Social Studies", "Civic and Moral Education", "ICT and Computer Studies", "Creative and Cultural Arts"],
    optionText: "Day & Boarding options available",
    imageUrl: "/school%20pics/by-primary-class.webp",
    images: [
      "/school%20pics/by-primary-class.webp",
      "/school%20pics/by-gallery-academics-03.webp",
      "/school%20pics/by-gallery-academics-04.webp",
      "/school%20pics/by-gallery-academics-05.webp",
      "/school%20pics/by-gallery-academics-06.webp",
    ],
    showOnHome: true,
  },
  {
    title: "Secondary School",
    slug: "secondary",
    subtitle: "Form 1 – 4 (O-Level)",
    description: "Our Secondary program follows the National O-Level Curriculum. With qualified and experienced teachers, we offer Science and Arts subject combinations and provide thorough preparation for the Certificate of Secondary Education Examination (CSEE). Both Day and Boarding options are available.",
    homeSummary: "Forms 1–4 following the National O-Level Curriculum. Qualified and experienced teachers, Science and Arts subject combinations, and thorough preparation for the CSEE. Day and Boarding available.",
    curriculum: ["Kiswahili and English Language", "Mathematics", "Physics, Chemistry, and Biology", "History and Geography", "Civics and General Studies", "Computer Science and ICT", "Commerce and Book Keeping", "Career Guidance and Counseling"],
    optionText: "Day & Boarding options available",
    imageUrl: "/school%20pics/by-secondary-lab.webp",
    images: [
      "/school%20pics/by-secondary-lab.webp",
      "/school%20pics/by-secondary-01.webp",
      "/school%20pics/by-secondary-04.webp",
      "/school%20pics/by-gallery-academics-09.webp",
      "/school%20pics/by-sports-football-1.webp",
    ],
    showOnHome: true,
  },
];

const defaultFacilities: Facility[] = [
  { title: "4-Story Campus Building", description: "Our impressive 4-story building houses spacious, well-ventilated classrooms equipped with modern teaching aids and comfortable furniture designed for optimal learning.", imageUrl: "/school%20pics/by-building.webp" },
  { title: "Computer Laboratory", description: "Fully equipped computer lab for digital learning, providing students with hands-on experience in ICT, programming, and research from an early age.", imageUrl: "/school%20pics/by-computerlab.webp" },
  { title: "Boarding Dormitories", description: "Well-supervised boarding dormitories with proper facilities and care, providing a safe and comfortable home-away-from-home for boarding students.", imageUrl: "/school%20pics/by-dorm.webp" },
  { title: "Science Laboratory", description: "Equipped science lab for hands-on experimental learning in physics, chemistry, and biology, bringing scientific concepts to life.", imageUrl: "/school%20pics/by-sciencelab.webp" },
  { title: "Library & Resource Center", description: "A growing library with textbooks, reference materials, and reading resources to support academic research and cultivate a love for reading.", imageUrl: "/school%20pics/IMG_6262.webp" },
  { title: "School Garden", description: "Our School Garden Project fosters environmental awareness and teamwork, giving students hands-on experience in sustainability and agriculture.", imageUrl: "/school%20pics/by-garden.webp" },
];

const defaultFeatures: IconItem[] = [
  { icon: "GraduationCap", title: "Dedicated Teachers", description: "Highly qualified and passionate educators committed to every student's success." },
  { icon: "BookOpen", title: "Personalized Learning", description: "Tailored educational approaches that meet each child where they are and help them excel." },
  { icon: "Building2", title: "Modern 4-Story Campus", description: "Spacious classrooms, equipped labs, and boarding dormitories in our state-of-the-art facility." },
  { icon: "Globe", title: "Holistic Development", description: "Academics, extracurriculars, and community engagement for well-rounded growth." },
  { icon: "Home", title: "Day & Boarding Options", description: "Flexible day and boarding arrangements to accommodate every family's needs." },
  { icon: "Trophy", title: "Proven Academic Results", description: "Consistently outstanding performance in national examinations with top grades across subjects." },
];

const defaultActivities: IconItem[] = [
  { icon: "ClipboardList", title: "Monthly Academic Assessments", description: "Regular assessments to monitor every student's progress and ensure they stay on track across all subjects." },
  { icon: "Dumbbell", title: "Sports & Athletics", description: "Structured sports programs that build teamwork, fitness, discipline, and a healthy competitive spirit." },
  { icon: "Mic2", title: "Debate & Academic Clubs", description: "Clubs that sharpen critical thinking, public speaking, and leadership skills through regular debates and competitions." },
  { icon: "Monitor", title: "ICT & Computer Training", description: "Regular computer sessions equipping students with essential digital literacy and technology skills for the modern world." },
  { icon: "Award", title: "Leadership & Character Seminars", description: "Dedicated programs that build integrity, responsibility, and leadership qualities in every learner." },
];

const defaultCoreValues: IconItem[] = [
  { icon: "Star", title: "Excellence", description: "We strive for the highest standards in everything we do, from teaching to character development." },
  { icon: "Shield", title: "Integrity", description: "We uphold honesty, transparency, and ethical behavior in all our interactions." },
  { icon: "Lightbulb", title: "Innovation", description: "We embrace modern approaches, digital learning, and creative thinking in education." },
  { icon: "Handshake", title: "Respect", description: "We value diversity and treat every member of our community with dignity." },
  { icon: "Sprout", title: "Responsibility", description: "We develop students who are accountable, caring, and socially conscious leaders." },
  { icon: "Users", title: "Community", description: "We foster teamwork, environmental awareness, and active engagement with the wider community." },
];

const defaultFaqs: Faq[] = [
  { question: "Does the school offer both Day and Boarding?", answer: "Yes, Brain Yield Schools offers both Day and Boarding options at Pre-Primary, Primary, and Secondary levels. Boarding students reside in well-supervised, secure dormitories on campus.", page: "Admissions" },
  { question: "Are admissions open throughout the year?", answer: "Admissions are open depending on space availability. Early application is encouraged to secure a place for your child.", page: "Admissions" },
  { question: "Does the school provide transport?", answer: "Yes, school transport services are available for Day students in selected areas, offering safe and reliable routes.", page: "Admissions" },
  { question: "What curriculum does the school follow?", answer: "Brain Yield Schools follows the Tanzanian National Curriculum across all levels — Pre-Primary, Primary (Standard 1–7), and Secondary (Form 1–4, O-Level).", page: "Admissions" },
  { question: "Are extracurricular activities offered?", answer: "Yes. Students actively participate in sports and athletics, debate and academic clubs, ICT and computer training sessions, and leadership and character-building seminars.", page: "Admissions" },
];

/* ---------------------------------------------------------------------- */
/* Getters — each falls back to the defaults above on empty/failed fetch  */
/* ---------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function img(source: any, width?: number): string | null {
  if (!source) return null;
  try {
    const builder = width ? urlFor(source).width(width) : urlFor(source);
    return builder.url();
  } catch {
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const doc = await client.fetch(`*[_type == "siteSettings"][0]`);
    if (!doc) return defaultSiteSettings;
    return {
      schoolName: doc.schoolName || defaultSiteSettings.schoolName,
      tagline: doc.tagline || defaultSiteSettings.tagline,
      footerBlurb: doc.footerBlurb || defaultSiteSettings.footerBlurb,
      logoUrl: img(doc.logo),
      address: doc.address || defaultSiteSettings.address,
      addressLocality: doc.addressLocality || defaultSiteSettings.addressLocality,
      addressRegion: doc.addressRegion || defaultSiteSettings.addressRegion,
      addressCountry: doc.addressCountry || defaultSiteSettings.addressCountry,
      phones: doc.phones?.length ? doc.phones : defaultSiteSettings.phones,
      email: doc.email || defaultSiteSettings.email,
      officeHours: doc.officeHours?.length ? doc.officeHours : defaultSiteSettings.officeHours,
      mapEmbedUrl: doc.mapEmbedUrl || defaultSiteSettings.mapEmbedUrl,
      youtubeUrl: doc.youtubeUrl || defaultSiteSettings.youtubeUrl,
      instagramUrl: doc.instagramUrl || defaultSiteSettings.instagramUrl,
      facebookUrl: doc.facebookUrl || defaultSiteSettings.facebookUrl,
      threadsUrl: doc.threadsUrl || defaultSiteSettings.threadsUrl,
      tiktokUrl: doc.tiktokUrl || defaultSiteSettings.tiktokUrl,
      stats: doc.stats?.length ? doc.stats : defaultSiteSettings.stats,
      performanceHighlightTag: doc.performanceHighlightTag || defaultSiteSettings.performanceHighlightTag,
      performanceHighlightHeading: doc.performanceHighlightHeading || defaultSiteSettings.performanceHighlightHeading,
      performanceHighlightText: doc.performanceHighlightText || defaultSiteSettings.performanceHighlightText,
    };
  } catch {
    return defaultSiteSettings;
  }
}

export async function getHomePageContent(): Promise<HomePageContent> {
  try {
    const doc = await client.fetch(
      `*[_type == "homePage"][0]{..., "videoFileUrl": video.asset->url}`
    );
    if (!doc) return defaultHomePage;
    return {
      welcomeTag: doc.welcomeTag || defaultHomePage.welcomeTag,
      welcomeHeading: doc.welcomeHeading || defaultHomePage.welcomeHeading,
      welcomeParagraph1: doc.welcomeParagraph1 || defaultHomePage.welcomeParagraph1,
      welcomeParagraph2: doc.welcomeParagraph2 || defaultHomePage.welcomeParagraph2,
      videoHeading: doc.videoHeading || defaultHomePage.videoHeading,
      videoDescription: doc.videoDescription || defaultHomePage.videoDescription,
      videoUrl: doc.videoFileUrl || defaultHomePage.videoUrl,
      videoPosterUrl: img(doc.videoPoster, 1600) || defaultHomePage.videoPosterUrl,
      ctaHeading: doc.ctaHeading || defaultHomePage.ctaHeading,
      ctaDescription: doc.ctaDescription || defaultHomePage.ctaDescription,
      ctaImageUrl: img(doc.ctaImage, 1400),
      ctaButton1Text: doc.ctaButton1Text || defaultHomePage.ctaButton1Text,
      ctaButton2Text: doc.ctaButton2Text || defaultHomePage.ctaButton2Text,
    };
  } catch {
    return defaultHomePage;
  }
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  try {
    const doc = await client.fetch(`*[_type == "aboutPage"][0]`);
    if (!doc) return defaultAboutPage;
    return {
      heroTitle: doc.heroTitle || defaultAboutPage.heroTitle,
      heroSubtitle: doc.heroSubtitle || defaultAboutPage.heroSubtitle,
      heroDescription: doc.heroDescription || defaultAboutPage.heroDescription,
      heroImageUrl: img(doc.heroImage, 1400),
      historyTag: doc.historyTag || defaultAboutPage.historyTag,
      historyHeading: doc.historyHeading || defaultAboutPage.historyHeading,
      historyParagraphs: doc.historyParagraphs?.length ? doc.historyParagraphs : defaultAboutPage.historyParagraphs,
      historyImageUrl: img(doc.historyImage, 900),
      statBadgeNumber: doc.statBadgeNumber || defaultAboutPage.statBadgeNumber,
      statBadgeLabel: doc.statBadgeLabel || defaultAboutPage.statBadgeLabel,
      missionText: doc.missionText || defaultAboutPage.missionText,
      visionText: doc.visionText || defaultAboutPage.visionText,
    };
  } catch {
    return defaultAboutPage;
  }
}

export async function getAdmissionsPageContent(): Promise<AdmissionsPageContent> {
  try {
    const doc = await client.fetch(`*[_type == "admissionsPage"][0]`);
    if (!doc) return defaultAdmissionsPage;
    return {
      heroDescription: doc.heroDescription || defaultAdmissionsPage.heroDescription,
      steps: doc.steps?.length ? doc.steps : defaultAdmissionsPage.steps,
      requirements: doc.requirements?.length ? doc.requirements : defaultAdmissionsPage.requirements,
      fees: doc.fees?.length ? doc.fees : defaultAdmissionsPage.fees,
      feesNote: doc.feesNote || defaultAdmissionsPage.feesNote,
      dayFeatures: doc.dayFeatures?.length ? doc.dayFeatures : defaultAdmissionsPage.dayFeatures,
      boardingFeatures: doc.boardingFeatures?.length ? doc.boardingFeatures : defaultAdmissionsPage.boardingFeatures,
    };
  } catch {
    return defaultAdmissionsPage;
  }
}

export async function getHeroSlides(): Promise<HeroSlide[]> {
  try {
    const results = await client.fetch(
      `*[_type == "heroSlide"] | order(order asc) { eyebrow, heading, subheading, image }`
    );
    if (!results?.length) return defaultHeroSlides;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return results.map((s: any) => ({
      eyebrow: s.eyebrow || "",
      heading: s.heading,
      subheading: s.subheading || "",
      imageUrl: img(s.image, 1600) || defaultHeroSlides[0].imageUrl,
    }));
  } catch {
    return defaultHeroSlides;
  }
}

export async function getPrograms(): Promise<Program[]> {
  try {
    const results = await client.fetch(
      `*[_type == "program"] | order(order asc) { title, "slug": slug.current, subtitle, description, homeSummary, curriculum, optionText, image, gallery, showOnHome }`
    );
    if (!results?.length) return defaultPrograms;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return results.map((p: any) => {
      const coverUrl = img(p.image, 900) || defaultPrograms[0].imageUrl;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const galleryUrls = (p.gallery || []).map((g: any) => img(g, 900)).filter(Boolean) as string[];
      return {
        title: p.title,
        slug: p.slug || p.title.toLowerCase(),
        subtitle: p.subtitle || "",
        description: p.description || "",
        homeSummary: p.homeSummary || p.description || "",
        curriculum: p.curriculum || [],
        optionText: p.optionText || "Day & Boarding options available",
        imageUrl: coverUrl,
        images: galleryUrls.length > 0 ? galleryUrls : [coverUrl],
        showOnHome: p.showOnHome !== false,
      };
    });
  } catch {
    return defaultPrograms;
  }
}

export async function getFacilities(): Promise<Facility[]> {
  try {
    const results = await client.fetch(
      `*[_type == "facility"] | order(order asc) { title, description, image }`
    );
    if (!results?.length) return defaultFacilities;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return results.map((f: any) => ({
      title: f.title,
      description: f.description,
      imageUrl: img(f.image, 900) || defaultFacilities[0].imageUrl,
    }));
  } catch {
    return defaultFacilities;
  }
}

async function getIconItems(type: string, fallback: IconItem[]): Promise<IconItem[]> {
  try {
    const results = await client.fetch(
      `*[_type == "${type}"] | order(order asc) { icon, title, description }`
    );
    return results?.length ? results : fallback;
  } catch {
    return fallback;
  }
}

export const getFeatureItems = () => getIconItems("featureItem", defaultFeatures);
export const getActivityItems = () => getIconItems("activityItem", defaultActivities);
export const getCoreValues = () => getIconItems("coreValue", defaultCoreValues);

export async function getFaqs(page: string): Promise<Faq[]> {
  try {
    const results = await client.fetch(
      `*[_type == "faq" && page == $page] | order(order asc) { question, answer, page }`,
      { page }
    );
    return results?.length ? results : defaultFaqs.filter((f) => f.page === page);
  } catch {
    return defaultFaqs.filter((f) => f.page === page);
  }
}

/* ---------------------------------------------------------------------- */
/* Events (reuses the "news" schema, filtered to category == "Events")    */
/* ---------------------------------------------------------------------- */

export interface EventItem {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

const defaultEvents: EventItem[] = [
  { title: "Sports Day & Cultural Celebration", excerpt: "Students celebrated diversity and sportsmanship through athletics, team sports, traditional dance, and cultural exhibitions.", imageUrl: "/school%20pics/ref-event%201.webp", date: "November 2025" },
  { title: "Kindergarten Graduation Ceremony", excerpt: "Our youngest learners celebrated the end of their pre-primary journey with a joyful graduation ceremony attended by proud parents.", imageUrl: "/school%20pics/ref-event%202.webp", date: "December 2025" },
  { title: "Parent-Teacher Conference", excerpt: "Parents and educators came together to discuss student progress and plans for the academic year ahead.", imageUrl: "/school%20pics/ref-event%203.webp", date: "December 2025" },
];

export async function getEvents(): Promise<EventItem[]> {
  try {
    const results = await client.fetch(
      `*[_type == "news" && category == "Events"] | order(publishedAt desc)[0...4] { title, excerpt, image, publishedAt }`
    );
    if (!results?.length) return defaultEvents;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return results.map((e: any) => ({
      title: e.title,
      excerpt: e.excerpt || "",
      imageUrl: img(e.image, 800) || defaultEvents[0].imageUrl,
      date: e.publishedAt
        ? new Date(e.publishedAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" })
        : "",
    }));
  } catch {
    return defaultEvents;
  }
}

/* ---------------------------------------------------------------------- */
/* Announcements                                                          */
/* ---------------------------------------------------------------------- */

export interface Announcement {
  _id: string;
  title: string;
  body: string;
  category: string;
  publishedAt: string;
}

const defaultAnnouncements: Announcement[] = [
  {
    _id: "default-announcement-1",
    title: "Form One Admissions 2027 Now Open",
    body: "Brain Yield Schools is pleased to announce that applications for Form One admission for the 2027 academic year are now open. Application forms are available at the school — parents and guardians are warmly invited to visit and secure an application form for their child.",
    category: "General Notice",
    publishedAt: "2026-09-03",
  },
];

export async function getAnnouncements(): Promise<Announcement[]> {
  try {
    const results = await client.fetch(
      `*[_type == "announcement" && active == true] | order(publishedAt desc) { _id, title, body, category, publishedAt }`
    );
    return results?.length ? results : defaultAnnouncements;
  } catch {
    return defaultAnnouncements;
  }
}
