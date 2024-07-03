export default defineNuxtConfig({
  modules: ['../src/module'],
  recaptcha: {
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 2,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-07-02',
})
