// Sanity CMS Client Configuration
// Replace these with your actual Sanity project credentials

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
};

// To use Sanity CMS:
// 1. Create a Sanity project at https://www.sanity.io
// 2. Install: npm install @sanity/client @sanity/image-url next-sanity
// 3. Add your project ID and dataset to .env.local:
//    NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
//    NEXT_PUBLIC_SANITY_DATASET=production
// 4. Import and use the client in your pages/components

// Example usage:
// import { createClient } from '@sanity/client';
// const client = createClient(sanityConfig);
// const data = await client.fetch('*[_type == "post"]');
