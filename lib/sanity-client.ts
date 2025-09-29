import { createClient } from '@sanity/client';
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-07-15', // use current date (YYYY-MM-DD) to target the latest API version
};

export const sanityClient = createClient(config);
