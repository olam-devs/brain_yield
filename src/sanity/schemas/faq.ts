import { defineField, defineType } from "sanity";
import { orderField } from "./shared";

export default defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", validation: (Rule) => Rule.required() }),
    defineField({
      name: "page",
      title: "Shown On",
      type: "string",
      options: { list: ["Admissions", "General"] },
      initialValue: "Admissions",
      validation: (Rule) => Rule.required(),
    }),
    orderField,
  ],
  preview: {
    select: { title: "question", subtitle: "page" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
