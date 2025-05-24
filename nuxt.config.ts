// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'TechBank',
      titleTemplate: '%s | TechBank',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'TechBank - Engineering The Future. A blockchain product company creating decentralized tools to simplify digital finance.' },
        { name: 'keywords', content: 'blockchain, cryptocurrency, digital finance, web3, decentralized finance, TechBank, Dbank, Dwallet, crypto wallet, blockchain technology' },
        { name: 'author', content: 'TechBank' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'TechBank - Engineering The Future' },
        { property: 'og:description', content: 'TechBank - Engineering The Future. A blockchain product company creating decentralized tools to simplify digital finance.' },
        // { property: 'og:image', content: '/images/og-image.jpg' },
        { property: 'og:url', content: 'https://techbank.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'TechBank - Engineering The Future' },
        { name: 'twitter:description', content: 'TechBank - Engineering The Future. A blockchain product company creating decentralized tools to simplify digital finance.' },
        // { name: 'twitter:image', content: '/images/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ],
      // script: [
      //   {
      //     src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`,
      //     async: true
      //   },
      //   {
      //     innerHTML: `
      //       window.dataLayer = window.dataLayer || [];
      //       function gtag(){dataLayer.push(arguments);}
      //       gtag('js', new Date());
      //       gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
      //     `
      //   }
      // ]
    }
  },

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