import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "welcome", title: "Welcome Section" },
    { name: "cta", title: "Call To Action Banner" },
  ],
  fields: [
    defineField({ name: "welcomeTag", title: "Tag Text", type: "string", group: "welcome", initialValue: "About Us" }),
    defineField({ name: "welcomeHeading", title: "Heading", type: "string", group: "welcome", initialValue: "Welcome to Brain Yield Schools" }),
    defineField({ name: "welcomeParagraph1", title: "Paragraph 1", type: "text", group: "welcome" }),
    defineField({ name: "welcomeParagraph2", title: "Paragraph 2", type: "text", group: "welcome" }),

    defineField({ name: "ctaHeading", title: "Heading", type: "string", group: "cta", initialValue: "Ready to Give Your Child the Best Education?" }),
    defineField({ name: "ctaDescription", title: "Description", type: "text", group: "cta" }),
    defineField({ name: "ctaImage", title: "Background Image", description: "Leave blank to keep the current default.", type: "image", group: "cta" }),
    defineField({ name: "ctaButton1Text", title: "Primary Button Text", type: "string", group: "cta", initialValue: "Start Application" }),
    defineField({ name: "ctaButton2Text", title: "Secondary Button Text", type: "string", group: "cta", initialValue: "Schedule a Visit" }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
