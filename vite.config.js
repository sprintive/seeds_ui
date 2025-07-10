import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./js",
  resolve: {
    alias: {
      "@fonts": path.resolve(__dirname, "/fonts"),
      "@svgs": path.resolve(__dirname, "/assets"),
    },
  },
  esbuild: {
    pure: ["console.log"],
    minifyIdentifiers: false,
  },
  build: {
    manifest: false,
    minify: "esbuild",
    reportCompressedSize: true,
    cssCodeSplit: true,
    outDir: "../dist",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: "index.html",
        font: "scss/font.scss",
        style: "scss/style.scss",
      },
      output: {
        assetFileNames: "[name][extname]",
        dir: "dist",
        name: "app",
      },
    },
  },
  server: {
    host: "0.0.0.0", // Allow access from network
    port: 3000,
    strictPort: true,
  },
});
