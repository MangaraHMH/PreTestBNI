import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormUser from '../views/FormUser.vue'
import Edit from '../views/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/form',
      name: 'form',
      component: FormUser
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    }
  ]
})

export default router
