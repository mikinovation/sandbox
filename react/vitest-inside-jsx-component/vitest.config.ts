import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    includeSource: ["app/**/*.ts", "app/**/*.tsx"],
  },
  define: {
    "import.meta.vitest": false,
  },
});
