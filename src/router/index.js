// Doc: https://router.vuejs.org/guide/
import { createRouter, createWebHistory } from 'vue-router'
// Also available: createWebHashHistory, createMemoryHistory

const routes = [
  // Doc: https://router.vuejs.org/api/interfaces/routelocation.html
  {
    path: '/',
    // Note: Must specify a component to remove warning of No matching path
    component: () => {},
    // Doc: https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard
    beforeEnter: (to, from, next) => {
      console.log(`[${import.meta.url.split('?')[0].split('/').slice(3).join('/')}::beforeEnter()] to, from`, to, from)
      // Default to page1
      next('/page1')
    },
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

const router = createRouter({
  // Remove hash (#) from url, as opposed to createWebHashHistory which uses hash
  history: createWebHistory(),
  routes,
})

// Add lifecycle hook: afterEach
// Also available: router.[beforeEach]
router.afterEach((to, from) => {
  // Change meta of route
  to.meta.fromPath = from.path
})

// Interesting router methods: router.[addRoute, getRoutes, hasRoute, push, removeRoute, replace]

export default router
