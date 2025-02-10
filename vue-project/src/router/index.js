import { createRouter, createWebHistory/*, createWebHashHistory*/ } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AccueilView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/pays',
      name: 'pays',
      component: () => import('../views/FicheView.vue')
    },
    {
      path: '/fichePays/:index',
      name: 'fichePays',
      component: () => import('../views/FichePaysView.vue')
    },
  ]
})

export default router
