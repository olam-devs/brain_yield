import { defineField, defineType } from "sanity";

export default defineType({
  name: "announcement",
  title: "Announcements",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "body", title: "Details", type: "text", validation: (Rule) => Rule.required() }),
    defineField({
      name: "category", title: "Category", type: "string",
      options: { list: ["General Notice", "Urgent", "Academic", "Event"] },
      initialValue: "General Notice",
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime", validation: (Rule) => Rule.required() }),
    defineField({ name: "active", title: "Active (visible on website)", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
  orderings: [{ title: "Published Date, New", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
});
