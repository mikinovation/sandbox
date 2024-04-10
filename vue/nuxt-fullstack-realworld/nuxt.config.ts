// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  modules: ["@nuxt/test-utils/module"],
  css: ["@/assets/main.css"],
  nitro: {
    experimental: {
      openAPI: {
        meta: {
          title: "Nuxt RealWorld",
          description:
            "Nuxt.js codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the RealWorld spec and API.",
          version: "3.0.0",
        },
      },
    },
  },
});
