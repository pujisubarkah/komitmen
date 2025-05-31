import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import JejakKreatif from '@/pages/jejak_kreatif.vue'
import Event from '@/pages/event.vue'
import Galeri from '@/pages/galeri.vue'
import Panduan from '@/pages/panduan.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/jejak_kreatif', component: JejakKreatif },
  { path: '/event', component: Event },
  { path: '/galeri', component: Galeri },
  { path: '/panduan', component: Panduan },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router