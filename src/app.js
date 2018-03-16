import Vue from 'vue'
import 'babel-polyfill'
import Resource from 'vue-resource'
import NProgress from 'vue-nprogress'
import vBlur from 'v-blur'

import './style/index.scss'

import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(Resource)

Vue.use(NProgress)
Vue.use(vBlur)

// Enable devtools
Vue.config.devtools = true

sync(store, router)

const nprogress = new NProgress({ parent: '.nprogress-container' })

router.beforeEach((route, redirect, next) => {
  next()
})

const app = new Vue({
  router,
  store,
  nprogress,
  ...App
})

export { app, router, store }
