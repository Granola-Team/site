import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), partytown(), mdx()],
  legacy: {
      astroFlavoredMarkdown: true,
  },
});
