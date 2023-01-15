// sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'

import { media } from 'sanity-plugin-media'

export default defineConfig({
  title: "Pushing Primitives Admin",
  projectId: "o3g4ng73",
  dataset: "production",
  plugins: [deskTool(), visionTool(),media()],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },

  schema: {
    types: schemas
  },
});
