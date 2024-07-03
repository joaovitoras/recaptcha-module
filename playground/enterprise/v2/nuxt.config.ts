export default defineNuxtConfig({
  modules: ['../../../src/module'],
  recaptcha: {
    mode: 'enterprise',
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    size: 'invisible',
    hideBadge: false,
    version: 2,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-07-02',
})
