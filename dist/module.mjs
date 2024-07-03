import { defineNuxtModule, createResolver, addPluginTemplate, addComponent } from '@nuxt/kit';
import { getContents } from '../dist/runtime/templates/plugin.js';

const module = defineNuxtModule({
  meta: {
    name: "@nuxtjs/recaptcha",
    configKey: "recaptcha"
  },
  defaults: {},
  setup(options) {
    if (options.disabled)
      return;
    const resolver = createResolver(import.meta.url);
    addPluginTemplate({
      getContents: () => getContents(options),
      filename: "recaptcha-nuxt.plugin.mjs",
      options
    });
    addComponent({
      name: "RecaptchaNuxt",
      filePath: resolver.resolve("./runtime/components/RecaptchaNuxt.vue"),
      global: true
    });
  }
});

export { module as default };
