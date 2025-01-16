import { defineConfig } from "astro/config";

import icon from "astro-icon";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ["account", "book-open-variant", "calendar-month", "tags"],
      },
    }),
    vue({
      appEntrypoint: "/src/pages/_app"
    })
  ],
  adapter: vercel({
  })
});
