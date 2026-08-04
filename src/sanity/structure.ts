import type { StructureResolver } from "sanity/structure";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Brain Yield Schools CMS")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("About Page")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("Admissions Page")
        .child(S.document().schemaType("admissionsPage").documentId("admissionsPage")),
      S.divider(),
      S.documentTypeListItem("heroSlide").title("Homepage Hero Slides"),
      S.documentTypeListItem("program").title("Academic Programs"),
      S.documentTypeListItem("facility").title("Facilities"),
      S.documentTypeListItem("featureItem").title("Why Choose Us (Homepage)"),
      S.documentTypeListItem("activityItem").title("School Activities (Homepage)"),
      S.documentTypeListItem("coreValue").title("Core Values (About)"),
      S.documentTypeListItem("leadershipTeam").title("Leadership Team"),
      S.divider(),
      S.documentTypeListItem("news").title("News & Events"),
      S.documentTypeListItem("galleryImage").title("Gallery"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("applicationForm").title("Application Forms"),
    ]);

export default structure;
