import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    include: ["./src/**/*.ts", "./src/**/*.vue"],
  },
});
