import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { zendeskPlugin } from "./plugins/zendeskPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), zendeskPlugin()],
  base: "./",
  build: {
    outDir: "dist/assets",
    assetsDir: ".",
  },
});
