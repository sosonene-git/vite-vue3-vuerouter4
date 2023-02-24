// Doc: https://router.vuejs.org/guide/
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // Default component for /
    component: () => import('@/components/Page1.vue'),
  },
  {
    path: '/page1',
    component: () => import('@/components/Page1.vue'),
    meta: { transition: 'slide' },
  },
  {
    path: '/page2',
    component: () => import('@/components/Page2.vue'),
  },
]

export default createRouter({
  // Remove hash (#) from url, as opposed to createWebHashHistory which uses hash
  history: createWebHistory(),
  routes,
})
