// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['assets/css/font.css'],
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@nuxtjs/turnstile'
  ],
  image: {
    dir: 'public'
  },
  turnstile: {
    siteKey: '0x4AAAAAABeYbDKKKCOQImgl',
  }
})