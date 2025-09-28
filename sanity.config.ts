'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { apiVersion, dataset, projectId } from './sanity/env';

// Impor skema terpusat
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Gunakan skema yang sudah diimpor
  schema,
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
