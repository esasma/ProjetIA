import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/Login.vue'
import CartVue from '@/views/Cart.vue'
import MontreListVue from '@/views/MontreList.vue'
import MontreSingleVue from '@/views/MontreSingle.vue'
import MontreEditVue from '@/views/MontreEdit.vue'
import AboutViewVue from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import CodeView from '@/views/CodeView.vue'
import MentionView from '@/views/MentionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mention',
      name: 'mention',
      component: MentionView
    },
    {
      path: '/code',
      name: 'code',
      component: CodeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginVue
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartVue
    },
    {
      path: '/montre-list/',
      name: 'montre-list',
      component: MontreListVue
    },
    {
      path: '/montre-single',
      name: 'montre-single',
      component: MontreSingleVue
    },
    {
      path: '/montre-edit/:id',
      name: 'montre-edit-id',
      component: MontreEditVue
    },

  ]
})

export default router
