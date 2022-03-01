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
  {
    path: '/favoritos',
    name: 'Favorites',
    component: () => import( '../views/Favorites')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
