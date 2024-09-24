import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VeeValidateView from '../views/VeeValidateView.vue'
import PiniaView from '@/views/PiniaView.vue'
import LoadashView from '@/views/LoadashView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaView
    },
    {
      path: '/vee-validate',
      name: 'vee-validate',
      component: VeeValidateView
    },
    {
      path: '/loadash',
      name: 'loadash',
      component: LoadashView
    }
  ]
})

export default router
