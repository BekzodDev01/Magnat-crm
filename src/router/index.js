import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'home'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/finance',
    name: 'finance',
    meta: {layout: 'mainPro'},
    component: () => import('../views/Finance.vue')
  },
  {
    path: '/income',
    name: 'income',
    meta: {layout: 'main'},
    component: () => import('../views/Incomes.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
