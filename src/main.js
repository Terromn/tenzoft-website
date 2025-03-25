import './assets/main.css'
import 'animate.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AOS from 'aos'
import gsap from 'gsap'

// Import views
import HomeView from './views/HomeView.vue'
import ColorPalette from './components/ColorPalette.vue'

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
})

// Make GSAP available globally
window.gsap = gsap

// Setup routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/colors',
    name: 'colors',
    component: ColorPalette
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

createApp(App)
  .use(router)
  .mount('#app')
