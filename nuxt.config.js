// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt', '@nuxtjs/google-fonts', '@sidebase/nuxt-auth'],
  app: {
    head: {
      title: 'Backer - Platform Crowdfunding',
      titleTemplate: '%s | Backer',
      link: [
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      ],
      meta: [{ name: 'description', content: 'Fund the future, one campaign at a time.' }],
    },
  },
  auth: {
    baseURL: 'http://localhost:8080/api/v1',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/sessions', method: 'post' },
        signOut: false,
        signUp: { path: '/users', method: 'post' },
        getSession: { path: '/users/fetch', method: 'get' },
      },
      pages: {
        login: '/login',
      },
      token: {
        signInResponseTokenPointer: '/data/token',
        type: 'Bearer',
        headerName: 'Authorization',
        maxAgeInSeconds: 60 * 60 * 24,
      },
      session: {
        dataType: {
          id: 'number',
          email: 'string',
          name: 'string',
        },
        dataResponsePointer: '/data',
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api/v1',
      imageBase: process.env.NUXT_PUBLIC_IMAGE_BASE || 'http://localhost:8080',
    },
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
  },
  nitro: {
    preset: 'static',
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Backer - Platform Crowdfunding',
      short_name: 'Backer',
      description: 'Fund the future, one campaign at a time.',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        { src: 'icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
  },
})
