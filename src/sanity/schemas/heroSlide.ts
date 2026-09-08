import { defineField, defineType } from "sanity";
import { orderField } from "./shared";

export default defineType({
  name: "heroSlide",
  title: "Homepage Hero Slides",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Tag (e.g. QUALITY & DISCIPLINE)", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "subheading", title: "Subheading", type: "string" }),
    defineField({ name: "image", title: "Background Image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    orderField,
  ],
  preview: {
    select: { title: "heading", media: "image" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
