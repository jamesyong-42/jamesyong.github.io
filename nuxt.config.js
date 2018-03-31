
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'jamesyongs-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'James Yong&apos;s blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '~assets/scss/main.scss',
    '@/assets/scss/main.scss'
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
  generate: {
  },
  plugins: [
    {src: '~/plugins/ga.js', ssr: false },
    {src: '~/plugins/overscroll', ssr: false} //set ssr:false fix 'SyntaxError: Unexpected token import'
  ]
}
