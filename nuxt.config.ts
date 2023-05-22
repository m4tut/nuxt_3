export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config#app
  app: {
    head: {
      title: 'Nuxt 3',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
    },
    layoutTransition: true,
    pageTransition: true,
    rootTag: 'body',
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#builddir
  buildDir: 'build',

  // https://nuxt.com/docs/api/configuration/nuxt-config#components
  components: {
    dirs: [
      { path: './src/components/entities', prefix: 'Entity' },
      { path: './src/components/features', prefix: 'Feature' },
      { path: './src/components/shared', prefix: 'Shared' },
      { path: './src/components/widgets', prefix: 'Widget' },
    ],
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: ['@/src/assets/styles/index.scss'],

  // https://nuxt.com/docs/api/configuration/nuxt-config#dir
  dir: {
    assets: './src/assets',
    layouts: './src/layouts',
    middleware: './src/middleware',
    pages: './src/pages',
    plugins: './src/plugins',
    public: './src/public',
    static: './src/static',
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#imports
  imports: {
    dirs: ['./src/composables', './src/store', './src/utils'],
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#modules
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  // https://nuxt.com/docs/api/configuration/nuxt-config#plugins-1
  plugins: [],

  // https://nuxt.com/docs/api/configuration/nuxt-config#ssr
  ssr: true,

  // https://nuxt.com/docs/api/configuration/nuxt-config#typescript
  typescript: {},

  // https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/src/assets/styles/utils/index.scss";',
        },
      },
    },
  },
})
