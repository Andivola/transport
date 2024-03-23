import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/voiture',
    name: 'voiture',
    component: () => import('../views/VoitureForm.vue')
  },
  {
    path: '/trans',
    name: 'transport',
    component: () => import('../views/TransForm.vue')
  },
  {
    path: '/trajet',
    name: 'trajet',
    component: () => import('../views/TrajetForm.vue')
  },
  {
    path: '/employe',
    name: 'employe',
    component: () => import('../views/EmployeForm.vue')
  },
  {
    path: '/departement',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DepForm.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
