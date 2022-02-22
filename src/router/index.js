import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listapokemones',
    name: 'ListPoke',
    component: () => import( '../views/ListPoke')
  },
  {
    path: '/listapokemones/:name',
    name: 'PokeDetalls',
    component: () => import( '../views/ListPoke')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
