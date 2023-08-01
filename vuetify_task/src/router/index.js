// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
      redirect: { path: "/inentory" },
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/inentory',
        name: 'Inentory',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Inentory.vue'),
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
