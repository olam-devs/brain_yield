import { defineField, defineType } from "sanity";
import { orderField } from "./shared";

export default defineType({
  name: "facility",
  title: "Facilities",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", validation: (Rule) => Rule.required() }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    orderField,
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
