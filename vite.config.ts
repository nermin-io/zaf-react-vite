import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { zendeskPlugin } from "./plugins/zendeskPlugin";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), zendeskPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",
  build: {
    outDir: "dist/assets",
    assetsDir: ".",
  },
});
