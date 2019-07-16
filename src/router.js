import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about2',
      name: 'about2',
      component: () => import('./views/About2.vue')
    },
    {
      path: '/lectures/card',
      name: 'card',
      component: () => import('./views/lectures/card.vue')
    },
    {
      path: '/lectures/layout',
      component: () => import('./views/lectures/layout.vue')
    },
    {
      path: '/lectures/notes',
      component: () => import('./views/lectures/notes.vue')
    },
    {
      path: '/lectures/sign',
      component: () => import('./views/lectures/sign.vue')
    },
    {
      path: '/lectures/axios',
      component: () => import('./views/lectures/axios.vue')
    },
    {
      path: '/lectures/mother',
      component: () => import('./views/lectures/mother.vue')
    },
    {
      path: '/lectures/vuex',
      component: () => import('./views/lectures/vuex.vue')
    },
    {
      path: '*',
      name: 'e404',
      component: () => import('./views/e404.vue')
    }
  ]
})
