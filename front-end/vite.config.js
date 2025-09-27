import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // 👈 keeps your deployment pat
  build: {
    chunkSizeWarningLimit: 1500, // 👈 merged into the same config
  },
});
