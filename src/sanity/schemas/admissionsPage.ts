import { defineField, defineType } from "sanity";

export default defineType({
  name: "admissionsPage",
  title: "Admissions Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "process", title: "Admission Process" },
    { name: "fees", title: "Fee Structure" },
    { name: "options", title: "Day & Boarding" },
  ],
  fields: [
    defineField({ name: "heroDescription", title: "Hero Description", type: "text", group: "hero" }),

    defineField({
      name: "steps",
      title: "Admission Steps",
      type: "array",
      group: "process",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
          defineField({ name: "description", title: "Description", type: "text", validation: (Rule) => Rule.required() }),
        ],
        preview: { select: { title: "title", subtitle: "description" } },
      }],
    }),
    defineField({
      name: "requirements",
      title: "Requirements Checklist",
      type: "array",
      group: "process",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "fees",
      title: "Fee Table Rows",
      type: "array",
      group: "fees",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "program", title: "Program", type: "string", validation: (Rule) => Rule.required() }),
          defineField({ name: "dayOption", title: "Day Option", type: "string", initialValue: "Contact School" }),
          defineField({ name: "boardingOption", title: "Boarding Option", type: "string", initialValue: "Contact School" }),
          defineField({ name: "details", title: "Details", type: "string", initialValue: "Contact School" }),
        ],
        preview: { select: { title: "program" } },
      }],
    }),
    defineField({ name: "feesNote", title: "Note Below Fee Table", type: "text", group: "fees" }),

    defineField({ name: "dayFeatures", title: "Day School Features", type: "array", of: [{ type: "string" }], group: "options" }),
    defineField({ name: "boardingFeatures", title: "Boarding School Features", type: "array", of: [{ type: "string" }], group: "options" }),
  ],
  preview: {
    prepare() {
      return { title: "Admissions Page" };
    },
  },
});
