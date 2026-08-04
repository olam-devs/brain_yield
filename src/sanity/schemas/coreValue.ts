import { defineField, defineType } from "sanity";
import { iconField, orderField } from "./shared";

export default defineType({
  name: "coreValue",
  title: "Core Values (About Page)",
  type: "document",
  fields: [
    iconField,
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", validation: (Rule) => Rule.required() }),
    orderField,
  ],
  preview: {
    select: { title: "title", subtitle: "icon" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
