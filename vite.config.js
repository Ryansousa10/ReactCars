import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginPreload from "vite-plugin-preload";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginPreload()],
});
