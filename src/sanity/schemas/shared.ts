import { defineField } from "sanity";

// Keep in sync with src/lib/icons.tsx ICON_MAP
export const ICON_OPTIONS = [
  "GraduationCap", "BookOpen", "Building2", "Globe", "Home", "Trophy",
  "ClipboardList", "Dumbbell", "Mic2", "Monitor", "Award", "Star", "Shield",
  "Lightbulb", "Handshake", "Sprout", "Users", "Target", "Eye", "MapPin",
  "Phone", "Mail", "Clock", "FileDown", "CheckCircle", "Heart", "Sparkles",
  "BadgeCheck",
];

export const iconField = defineField({
  name: "icon",
  title: "Icon",
  type: "string",
  options: { list: ICON_OPTIONS },
  validation: (Rule) => Rule.required(),
});

export const orderField = defineField({
  name: "order",
  title: "Display Order (lower = first)",
  type: "number",
});
