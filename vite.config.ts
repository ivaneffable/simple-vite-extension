import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        background: "./src/background.ts",
      },
      output: {
        entryFileNames: `[name].js`,
      },
    },
  },
});
