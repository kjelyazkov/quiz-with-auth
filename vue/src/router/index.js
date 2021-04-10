import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Statistics from '../views/Statistics.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.fullPath == '/login' && window.sessionStorage.getItem('token')) {
    router.push('/');
  }
  if(!window.sessionStorage.getItem('token') && (to.fullPath == '/' || to.fullPath == '/settings' || to.fullPath == '/statistics')) {
    router.push('/login');
  }
  next();
})

export default router
