import * as _nuxt_schema from '@nuxt/schema';

interface ReCaptchaOptions {
  /**
   * Toggles badge element visibility (v3)
   */
  hideBadge?: boolean

  /**
   * ReCaptcha language (v2)
   */
  language?: string

  /**
   * ReCaptcha mode.
   */
  mode?: 'base' | 'enterprise'

  /**
   * Site key to send requests
   */
  siteKey: string

  /**
   * Size of the widget (v2)
   */
  size?: 'compact' | 'normal' | 'invisible'

  /**
   * Version
   */
  version: number

  /**
   * Disables ReCaptcha
   */
  disabled?: boolean
}

interface ReCaptchaInstance {
  /**
   * Options
   */
  options: ReCaptchaOptions

  /**
   * Destroy ReCaptcha
   */
  destroy(): void

  /**
   * Returns a verify token (v3)
   * @param action
   */
  execute(action: string): Promise<string>

  /**
   * Returns a verify token (v2)
   */
  getResponse(): Promise<string>

  /**
   * Initialize ReCaptcha
   */
  init(): Promise<unknown>

  /**
   * Reset ReCaptcha (v2)
   */
  reset(widgetId?: number): void

  /**
   * Render ReCaptcha (v2)
   */
  render(reference: string, { siteKey, theme }: { siteKey: string, theme?: string }): number
}

interface PluginInjection {
  recaptcha: ReCaptchaInstance
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    ['recaptcha']?: Partial<ReCaptchaOptions>
  }
  interface NuxtOptions {
    ['recaptcha']?: ReCaptchaOptions
  }
}

declare module '#app' {
  interface NuxtApp extends PluginInjection { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends PluginInjection { }
}

interface ModuleOptions extends ReCaptchaOptions {
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { type ModuleOptions, _default as default };
