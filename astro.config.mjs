import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [vue({ appEntrypoint: "/src/pages/_app" })],
});
