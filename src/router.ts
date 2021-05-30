import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router