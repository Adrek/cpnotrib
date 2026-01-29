import { createRouter, createWebHistory } from 'vue-router'
import InicioPage from '../pages/inicio/InicioPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioPage,
    },
    {
      path: '/papeletas',
      name: 'papeletas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/papeletas/PapeletasPage.vue'),
    },
  ],
})

export default router
