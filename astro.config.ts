import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { createOGImage } from "./src/integrations/ogimage/index.tsx";

export default defineConfig({
  output: "hybrid",
  integrations: [
    mdx(),
    react(),
    createOGImage({
      config: {
        path: "/culture",
      },
    })
  ],
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
});