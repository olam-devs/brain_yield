// Sanity CMS Schema Definitions for Brain Yield Schools
// These schemas define the content structure for the Sanity Studio

export const heroSchema = {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "subtitle", title: "Subtitle", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } },
    { name: "ctaText", title: "CTA Button Text", type: "string" },
    { name: "ctaLink", title: "CTA Button Link", type: "string" },
  ],
};

export const leadershipSchema = {
  name: "leadership",
  title: "Leadership Team",
  type: "document",
  fields: [
    { name: "name", title: "Full Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "position", title: "Position", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "bio", title: "Biography", type: "text" },
    { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "order", title: "Display Order", type: "number" },
  ],
};

export const programSchema = {
  name: "program",
  title: "Academic Programs",
  type: "document",
  fields: [
    { name: "title", title: "Program Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "subtitle", title: "Subtitle (e.g., Ages 2-5)", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "curriculum", title: "Curriculum Items", type: "array", of: [{ type: "string" }] },
    { name: "image", title: "Program Image", type: "image", options: { hotspot: true } },
    { name: "order", title: "Display Order", type: "number" },
  ],
};

export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "role", title: "Role (e.g., Parent, Alumni)", type: "string" },
    { name: "quote", title: "Testimonial Quote", type: "text", validation: (Rule: any) => Rule.required() },
    { name: "rating", title: "Rating (1-5)", type: "number", validation: (Rule: any) => Rule.min(1).max(5) },
    { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
  ],
};

export const newsSchema = {
  name: "news",
  title: "News & Events",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "excerpt", title: "Excerpt", type: "text", validation: (Rule: any) => Rule.max(200) },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] },
    { name: "category", title: "Category", type: "string", options: { list: ["News", "Events", "Achievements", "Sports", "Milestone"] } },
    { name: "image", title: "Featured Image", type: "image", options: { hotspot: true } },
    { name: "publishedAt", title: "Published Date", type: "datetime" },
    { name: "featured", title: "Featured Post", type: "boolean" },
  ],
};

export const gallerySchema = {
  name: "galleryImage",
  title: "Gallery",
  type: "document",
  fields: [
    { name: "title", title: "Image Title", type: "string" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (Rule: any) => Rule.required() },
    { name: "category", title: "Category", type: "string", options: { list: ["Campus", "Events", "Academics", "Sports"] } },
    { name: "order", title: "Display Order", type: "number" },
  ],
};

export const statsSchema = {
  name: "stats",
  title: "Quick Stats",
  type: "document",
  fields: [
    { name: "label", title: "Label", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "value", title: "Value", type: "number", validation: (Rule: any) => Rule.required() },
    { name: "suffix", title: "Suffix (e.g., +, %)", type: "string" },
    { name: "order", title: "Display Order", type: "number" },
  ],
};

export const facilitySchema = {
  name: "facility",
  title: "Facilities",
  type: "document",
  fields: [
    { name: "title", title: "Facility Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "order", title: "Display Order", type: "number" },
  ],
};

export const contactInfoSchema = {
  name: "contactInfo",
  title: "Contact Information",
  type: "document",
  fields: [
    { name: "address", title: "Address", type: "text" },
    { name: "phone", title: "Phone Numbers", type: "array", of: [{ type: "string" }] },
    { name: "email", title: "Email Addresses", type: "array", of: [{ type: "string" }] },
    { name: "officeHours", title: "Office Hours", type: "text" },
    { name: "mapEmbedUrl", title: "Google Maps Embed URL", type: "url" },
  ],
};

// Export all schemas
const schemas = [
  heroSchema,
  leadershipSchema,
  programSchema,
  testimonialSchema,
  newsSchema,
  gallerySchema,
  statsSchema,
  facilitySchema,
  contactInfoSchema,
];

export default schemas;
