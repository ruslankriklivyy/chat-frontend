// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
    variables: {
      baseURL: process.env.API_BASE_URL,
    },
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/_variables.scss"',
        },
      },
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/proxy'],
});
