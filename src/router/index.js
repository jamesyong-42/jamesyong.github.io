import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: require('../views/Home.vue')
    },
    {
      name: 'Projects',
      path: '/projects',
      component: require('../views/Projects.vue')
    },
    {
      name: 'CV',
      path: '/cv',
      component: require('../views/CV.vue')
    }
  ]
})

export default router

