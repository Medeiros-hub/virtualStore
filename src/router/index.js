import { createRouter, createWebHistory } from 'vue-router'

import ContentView from '../views/ContentView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ContentView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router