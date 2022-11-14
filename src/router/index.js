import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '@/components/About.vue'
const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
