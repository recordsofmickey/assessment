import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GenreList from '../views/GenreList.vue'
import Serie from '../views/Serie.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path:'/genres/:id',
    component: GenreList,
    props: {
      default: true
    }
  },
  {
    path:'/genres/:id/:serie',
    component: Serie,
    props: {
      default: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
