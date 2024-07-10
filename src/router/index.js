import { createRouter, createWebHistory } from 'vue-router'
import CalculatorPage from '../main/CalculatorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CalculatorPage
    }
  ]
})

export default router
