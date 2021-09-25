import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'
import Login from '../components/views/auth/Login.vue'
import SignUp from '../components/views/auth/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'authLayout'}
  },
  {
    path: '/register',
    name: 'SignUp',
    component: SignUp,
    meta: { layout: 'authLayout'}
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
