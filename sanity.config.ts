'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { post } from './sanity/schemas/post';
import { costStructure, installmentProgram, refundPolicy } from './sanity/schemas/cost';
import { virtualTour, facility } from './sanity/schemas/facilities';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: [
      post,
      costStructure,
      installmentProgram,
      refundPolicy,
      virtualTour,
      facility,
    ],
  },
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
