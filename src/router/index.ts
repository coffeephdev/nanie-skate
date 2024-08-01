import { createRouter, createWebHistory } from 'vue-router'
import SkateView from "@/views/SkateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SkateView
    }
  ]
})

export default router
