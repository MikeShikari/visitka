import { createRouter, createWebHashHistory } from 'vue-router'
import Skills from '@/components/About.vue'
import AboutMe from '@/components/AboutMe.vue'
const routes = [
  {
    path: '/about_me',
    name: 'about',
    component: AboutMe
  },
  {
    path: '/skills',
    name: 'skills',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Skills
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
