import { defineConfig } from "vite";

export default defineConfig({
  base: "/3D-art-gallery",
  publicDir: "public",
  build: {
    rollupOptions: {
      input: "/main.jsx",
    },
  },
});
