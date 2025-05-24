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
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    'nuxt-link-checker',
    'nuxt-seo-utils'
  ],

  image: {
    dir: 'public',
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 300,
          quality: 80
        }
      }
    }
  },

  site: {
    url: 'https://techbank.com'
  },

  sitemap: {
    urls: [
      '/',
      '/contact',
      '/careers',
      '/team',
      '/products/dbank',
      '/products/dwallet',
      '/privacy-policy',
      '/terms-and-conditions'
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 0.5
    }
  }
})