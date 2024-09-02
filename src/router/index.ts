import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '@/components/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'viewabout',
    component: About
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/viewabout',
  //   name: 'viewabout',
  //   component: About
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
