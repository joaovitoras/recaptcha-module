export default defineNuxtConfig({
  modules: ['../../../src/module'],
  recaptcha: {
    mode: 'enterprise',

    hideBadge: true,
    siteKey: process.env.RECAPTCHA_SITE_KEY,

    version: 3,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-07-02',
})
