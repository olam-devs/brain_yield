import { defineField, defineType } from "sanity";
import { orderField } from "./shared";

export default defineType({
  name: "program",
  title: "Academic Programs",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Program Title", description: "e.g. Primary School", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Anchor ID",
      description: "Used for page links like /academics#primary. Lowercase, no spaces.",
      type: "slug",
      options: { source: "title", maxLength: 40 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "subtitle", title: "Subtitle", description: "e.g. Standard 1 – 7", type: "string" }),
    defineField({ name: "description", title: "Full Description", description: "Shown on the Academics page.", type: "text", validation: (Rule) => Rule.required() }),
    defineField({ name: "homeSummary", title: "Short Summary (for Homepage card)", description: "Leave blank to reuse the full description.", type: "text" }),
    defineField({ name: "curriculum", title: "Curriculum Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "optionText", title: "Options Badge Text", type: "string", initialValue: "Day & Boarding options available" }),
    defineField({ name: "image", title: "Cover Image", description: "Used on the Homepage program card.", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "gallery",
      title: "Photo Slideshow (Academics page)",
      description: "Add several photos to show a slideshow for this program on the Academics page. Leave empty to just show the cover image.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "showOnHome", title: "Show on Homepage", type: "boolean", initialValue: true }),
    orderField,
  ],
  preview: {
    select: { title: "title", subtitle: "subtitle", media: "image" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
