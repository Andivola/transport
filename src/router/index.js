import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/calendrier',
    name: 'calendrier',
    component: () => import('../views/CalendrierForm.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/voiture',
    name: 'voiture',
    component: () => import('../views/ListeVoi.vue')
  },
  {
    path: '/transport',
    name: 'transport',
    component: () => import('../views/ListeTrans.vue')
  },
  {
    path: '/trajet',
    name: 'trajet',
    component: () => import('../views/ListeTrajet.vue')
  },
  {
    path: '/employe',
    name: 'employe',
    component: () => import('../views/ListeEmp.vue')
  },
  {
    path: '/etat',
    name: 'eta',
    component: () => import('../views/EtatForm.vue')
  },
  {
    path: '/trajform',
    name: 'trajform',
    component: () => import('../views/TrajetForm.vue')
  },
  {
    path: '/empform',
    name: 'empform',
    component: () => import('../views/EmployeForm.vue')
  },
  {
    path: '/transform',
    name: 'transform',
    component: () => import('../views/TransForm.vue')
  },
  {
    path: '/voitureform',
    name: 'voitureform',
    component: () => import('../views/VoitureForm.vue')
  },
  {
    path: '/departement/:id',
    name: 'departement',
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
