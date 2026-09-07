// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        file: 'ar.json'
      },
      {
        code: 'en',
        name: 'English',
        dir: 'ltr',
        file: 'en.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'ar',
    strategy: 'no_prefix',
    detectBrowserLanguage: false
  }
})