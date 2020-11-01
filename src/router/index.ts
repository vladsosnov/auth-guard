import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store/index'

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
    component: () => import(/* webpackChunkName: "main" */ '@/views/MainView.vue'),
    meta: {
      requiresLogin: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
    meta: {
      requiresLogin: true
    }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (store.getters.isLogIn) {
      next()

      return
    }

    next('/beta-access')
  }

  if (store.getters.isLogIn && to.fullPath === '/beta-access') {
    next('/')
  } else {
    next()
  }
})

export default router
