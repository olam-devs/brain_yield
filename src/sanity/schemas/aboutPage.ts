import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "history", title: "Our Journey" },
    { name: "mission", title: "Mission & Vision" },
  ],
  fields: [
    defineField({ name: "heroTitle", title: "Title", type: "string", group: "hero", initialValue: "About Brain Yield Schools" }),
    defineField({ name: "heroSubtitle", title: "Subtitle", type: "string", group: "hero" }),
    defineField({ name: "heroDescription", title: "Description", type: "text", group: "hero" }),
    defineField({ name: "heroImage", title: "Background Image", description: "Leave blank to keep the current default.", type: "image", group: "hero" }),

    defineField({ name: "historyTag", title: "Tag Text", type: "string", group: "history", initialValue: "Our Journey" }),
    defineField({ name: "historyHeading", title: "Heading", type: "string", group: "history", initialValue: "A Growing Legacy of Excellence" }),
    defineField({ name: "historyParagraphs", title: "Story Paragraphs", type: "array", of: [{ type: "text" }], group: "history" }),
    defineField({ name: "historyImage", title: "Image", description: "Leave blank to keep the current default.", type: "image", group: "history" }),
    defineField({ name: "statBadgeNumber", title: "Stat Badge Number", description: "e.g. 100%", type: "string", group: "history", initialValue: "100%" }),
    defineField({ name: "statBadgeLabel", title: "Stat Badge Label", type: "string", group: "history", initialValue: "Pass Rate — PSLE 2024" }),

    defineField({ name: "missionText", title: "Mission Statement", type: "text", group: "mission" }),
    defineField({ name: "visionText", title: "Vision Statement", type: "text", group: "mission" }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
