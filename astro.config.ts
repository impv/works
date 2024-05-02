import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  output: "hybrid",
  integrations: [
    mdx(),
    react(),
  ],
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
});