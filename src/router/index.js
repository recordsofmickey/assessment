import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GenreList from '../views/GenreList.vue'
import SearchResults from '../views/SearchResults.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/genres/:id',
    component: GenreList,

  },
  {
    path:'/search/',
    component: SearchResults,

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
