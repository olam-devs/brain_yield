import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "general", title: "General" },
    { name: "contact", title: "Contact & Location" },
    { name: "social", title: "Social Links" },
    { name: "stats", title: "Homepage Stats" },
    { name: "highlight", title: "Academic Highlight" },
  ],
  fields: [
    defineField({ name: "schoolName", title: "School Name", type: "string", group: "general", initialValue: "Brain Yield Schools", validation: (Rule) => Rule.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string", group: "general", initialValue: "Together We Make The Difference With Excellence" }),
    defineField({ name: "footerBlurb", title: "Footer Description", type: "text", group: "general" }),
    defineField({ name: "logo", title: "Logo", description: "Leave blank to keep the current logo file.", type: "image", group: "general" }),

    defineField({ name: "address", title: "Street Address", type: "string", group: "contact", initialValue: "Best One Road, Salasala" }),
    defineField({ name: "addressLocality", title: "Locality", type: "string", group: "contact", initialValue: "Kinondoni" }),
    defineField({ name: "addressRegion", title: "Region", type: "string", group: "contact", initialValue: "Dar es Salaam" }),
    defineField({ name: "addressCountry", title: "Country", type: "string", group: "contact", initialValue: "Tanzania" }),
    defineField({
      name: "phones",
      title: "Phone Numbers",
      type: "array",
      group: "contact",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", description: "e.g. Director, Manager, Head Pre & Primary", type: "string" }),
          defineField({ name: "number", title: "Number", type: "string", validation: (Rule) => Rule.required() }),
        ],
        preview: { select: { title: "label", subtitle: "number" } },
      }],
    }),
    defineField({ name: "email", title: "Email", type: "string", group: "contact", initialValue: "brainyield.schools2020@gmail.com" }),
    defineField({
      name: "officeHours",
      title: "Office Hours",
      type: "array",
      group: "contact",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Days", description: "e.g. Monday - Friday", type: "string", validation: (Rule) => Rule.required() }),
          defineField({ name: "hours", title: "Hours", description: "e.g. 7:30 AM - 4:00 PM, or Closed", type: "string", validation: (Rule) => Rule.required() }),
        ],
        preview: { select: { title: "label", subtitle: "hours" } },
      }],
    }),
    defineField({ name: "mapEmbedUrl", title: "Google Maps Embed URL", description: "The src URL for the embedded map on the Contact page.", type: "url", group: "contact" }),

    defineField({ name: "youtubeUrl", title: "YouTube URL", type: "url", group: "social" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url", group: "social" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url", group: "social" }),
    defineField({ name: "threadsUrl", title: "Threads URL", type: "url", group: "social" }),
    defineField({ name: "tiktokUrl", title: "TikTok URL", type: "url", group: "social" }),

    defineField({
      name: "stats",
      title: "Stats Strip (Homepage)",
      description: "The 4 animated numbers shown just below the hero slideshow.",
      type: "array",
      group: "stats",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "value", title: "Number", type: "number", validation: (Rule) => Rule.required() }),
          defineField({ name: "suffix", title: "Suffix", description: "e.g. %, -Story", type: "string" }),
          defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
        ],
        preview: { select: { title: "label", subtitle: "value" } },
      }],
      validation: (Rule) => Rule.max(4),
    }),

    defineField({ name: "performanceHighlightTag", title: "Tag Text", type: "string", group: "highlight", initialValue: "Proven Results" }),
    defineField({ name: "performanceHighlightHeading", title: "Heading", type: "string", group: "highlight", initialValue: "100% Pass Rate — PESNO Mock Examination 2024" }),
    defineField({ name: "performanceHighlightText", title: "Description", type: "text", group: "highlight" }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
