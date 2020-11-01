import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/beta-access',
    name: 'BetaAccess',
    component: () => import(/* webpackChunkName: "beta-access" */ '@/views/BetaAccess.vue')
  },
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/MainView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFoundView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
