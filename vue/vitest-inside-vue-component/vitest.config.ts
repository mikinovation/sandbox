import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  define: {
    "import.meta.vitest": false,
  },
  test: {
    environment: "nuxt",
    exclude: ["./node_modules/**", "./.nuxt/**"],
    include: ["./utils/**/*.ts", "./components/**/*.vue"],
  },
});
