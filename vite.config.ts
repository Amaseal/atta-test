import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      $i18n: path.resolve("./src/i18n"),
    },
  },
  plugins: [sveltekit(), Icons({ compiler: "svelte", autoInstall: true })],
});
