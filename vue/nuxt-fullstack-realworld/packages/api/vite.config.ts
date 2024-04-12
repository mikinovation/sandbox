/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    includeSource: ["./**/*.ts"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
