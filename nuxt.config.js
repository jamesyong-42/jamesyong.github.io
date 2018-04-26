
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'jamesyong42',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#5ff7c1' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: 'James Yong&apos;s personal website' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5ff7c1' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#1cfaff',
    height: '5px'
  },
  /*
  ** Build configuration
  */
  env: {

  },
  css: [
    // '~assets/scss/main.scss',
    '@/assets/scss/main.scss',
    'DPlayer/dist/DPlayer.min.css',
    'swiper/dist/css/swiper.css'
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    // CSS file in the project
    // '@/assets/css/main.css',
    // SCSS file in the project
    // '@/assets/css/main.scss'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: 'transitionHandler'
  },
  generate: {
  },
  plugins: [
    {src: '~/plugins/ga.js', ssr: false},
    {src: '~/plugins/dplayer.js', ssr: false},
    {src: '~/plugins/overscroll', ssr: false} //set ssr:false fix 'SyntaxError: Unexpected token import'
  ]
}
