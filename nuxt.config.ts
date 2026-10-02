import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Add FontAwesome stylesheet link for icons
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        }
      ]
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  css: ['~/assets/css/main.css'],

  $development: {
    runtimeConfig: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      public: { siteUrl: process.env.NUXT_PUBLIC_SITE_URL }
    },
  },

  $production: {
    runtimeConfig: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL,
      public: { siteUrl: process.env.NUXT_PUBLIC_SITE_URL }
    },
  },
})