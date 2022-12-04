
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt',
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
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel:"stylesheet", type:"text/css", href:'https://unicons.iconscout.com/release/v4.0.0/css/line.css' },
      { rel:"stylesheet", type:"text/css", href:"https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400&display=swap"}
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate.js",
    //  {src: '~/plugins/chart.js', mode: 'client'},
    // { src: "~/plugins/vue.plugin.js",  mode: 'client' },
  
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
     '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

   build: {
  // Add exception
  transpile: [
    "vee-validate/dist/rules"
  ],
  /*
    ** You can extend webpack config here
    */
  extend(config, ctx) {
    // ...
  }
}

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   transpile: ['chart.js']
  // }
}
