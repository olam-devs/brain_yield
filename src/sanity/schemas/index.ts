import { defineField, defineType } from "sanity";

const gallerySchema = defineType({
  name: "galleryImage",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Image Title / Caption", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "category", title: "Category", type: "string",
      options: { list: ["Campus", "Events", "Academics", "Sports", "School Life"] },
    }),
    defineField({ name: "order", title: "Display Order (lower = first)", type: "number" }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});

const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role (e.g. Parent — Primary School)", type: "string" }),
    defineField({ name: "quote", title: "Testimonial Quote", type: "text", validation: (Rule) => Rule.required() }),
    defineField({ name: "rating", title: "Rating (1–5)", type: "number", validation: (Rule) => Rule.min(1).max(5) }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});

const newsSchema = defineType({
  name: "news",
  title: "News & Events",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "excerpt", title: "Short Excerpt (max 200 chars)", type: "text", validation: (Rule) => Rule.max(200) }),
    defineField({
      name: "category", title: "Category", type: "string",
      options: { list: ["Admissions", "News", "Achievements", "Events", "Sports", "Milestone"] },
    }),
    defineField({ name: "image", title: "Featured Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime" }),
    defineField({ name: "featured", title: "Mark as Featured Post", type: "boolean" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
  orderings: [{ title: "Published Date, New", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
});

const applicationFormSchema = defineType({
  name: "applicationForm",
  title: "Application Forms",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Form Title (e.g. Primary School Application Form 2026)", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "program", title: "Program", type: "string",
      options: { list: ["Pre-Primary", "Primary", "Secondary", "General / All Programs"] },
    }),
    defineField({ name: "file", title: "Form File (PDF)", type: "file", options: { accept: ".pdf,.doc,.docx" } }),
    defineField({ name: "order", title: "Display Order (lower = first)", type: "number" }),
    defineField({ name: "active", title: "Active (visible on website)", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "title", subtitle: "program" },
  },
});

const leadershipSchema = defineType({
  name: "leadershipTeam",
  title: "Leadership Team",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "position", title: "Position / Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "bio", title: "Bio", type: "text", validation: (Rule) => Rule.required() }),
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Display Order (lower = first)", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "position", media: "image" },
  },
});

const schemas = [gallerySchema, testimonialSchema, newsSchema, applicationFormSchema, leadershipSchema];
export default schemas;
