import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Profile from '../views/Profile'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'Вход/Регистрация',
    component: () => import('../views/LogReg.vue'),
    meta: {
      'guest': true
    }
  },
  {
    path: '/route/:id',
    name: 'Route',
    component: () => import('../views/RouteInfo.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      'requiresAuth': true
    }
  },

  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
