import { defineNuxtModule, addPluginTemplate, createResolver, addComponent } from '@nuxt/kit'
import { getContents } from './runtime/templates/plugin'
import type { ReCaptchaOptions } from '~/types'

export interface ModuleOptions extends ReCaptchaOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxtjs/recaptcha',
    configKey: 'recaptcha',
  },
  defaults: {} as ModuleOptions,
  setup(options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addPluginTemplate({
      getContents: () => getContents(options),
      filename: 'recaptcha-nuxt.plugin.mjs',
      options,
    })

    addComponent({
      name: 'RecaptchaNuxt',
      filePath: resolver.resolve('./runtime/components/RecaptchaNuxt.vue'),
      global: true,
    })
  },
})
