import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

export default defineConfig({
  plugins: [react(), yextSSG()],
  // files at /public/locations/assets
  build: {
    assetsDir: "blogs/assets",
  }
});
