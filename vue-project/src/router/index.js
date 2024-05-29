import { createRouter, createWebHistory/*, createWebHashHistory*/ } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import QuizView from '../views/QuizView.vue'
import FicheView from '../views/FicheView.vue'

const router = createRouter({
  //history: createWebHashHistory(import.meta.env.BASE_URL),
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
      //component: () => import('../views/QuizView.vue'),
      component: QuizView
    },
    {
      path: '/pays',
      name: 'pays',
     // component: () => import('../views/FicheView.vue'),
      component: FicheView
    },
    {
      path: '/fichePays/:index',
      name: 'fichePays',
      component: () => import('../views/FichePaysView.vue')
    },
  ]
})

export default router
