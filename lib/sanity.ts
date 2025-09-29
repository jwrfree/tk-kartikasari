import { createClient } from 'next-sanity';

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET;

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2023-01-01', // atau tanggal hari ini
  useCdn: true, // `false` jika ingin selalu data terbaru, `true` untuk cache
});
