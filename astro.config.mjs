import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), vue()],

  vite: {
    plugins: [tailwindcss()],
  },
});