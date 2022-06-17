require('dotenv').config()

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Acronex',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/faviconnegative.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  /*
   ** Global style resources - https://www.npmjs.com/package/@nuxtjs/style-resources
   */
   styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/buefy.js' },
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseUrl: process.env.API_URL || 'http://localhost:3007',
    browserBaseURL: process.env.API_URL || 'http://localhost:3007'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isClient, isDev }) {
      // Extend only webpack config for client-bundle
        if (isDev) {
          config.devtool = isClient ? 'source-map' : 'inline-source-map'
        }
      }
  },
  generate: {
    routes: [
      '/'
    ]
  }
}
