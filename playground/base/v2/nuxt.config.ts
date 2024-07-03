export default defineNuxtConfig({
  modules: ['../../../src/module'],
  recaptcha: {
    siteKey: '6LeE3ZAUAAAAANVaDO60w4ZBK44khqO7OpsitZNY',
    size: 'invisible',
    hideBadge: false,
    version: 2,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-07-02',
})
