import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    appEntrypoint: "/src/pages/_app"
  })],
  output: "hybrid",
  adapter: vercel({
  })
});