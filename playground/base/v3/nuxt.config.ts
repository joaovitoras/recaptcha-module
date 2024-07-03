export default defineNuxtConfig({
  modules: ['../../../src/module'],
  recaptcha: {
    hideBadge: true,
    siteKey: '6LeE3ZAUAAAAANVaDO60w4ZBK44khqO7OpsitZNY',
    version: 3,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-07-02',
})
