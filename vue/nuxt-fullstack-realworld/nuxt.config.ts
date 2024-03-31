// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  modules: ["@nuxt/test-utils/module"],
  css: ["@/assets/main.css"],
});
