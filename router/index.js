import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import JejakKreatif from '@/pages/jejak_kreatif.vue'
import Event from '@/pages/event.vue'
import Galeri from '@/pages/galeri.vue'
import Panduan from '@/pages/panduan.vue'
import Registrasi from '@/pages/registrasi.vue'
import Webinar from '@/pages/webinar.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/jejak_kreatif', component: JejakKreatif },
  { path: '/event', component: Event },
  { path: '/galeri', component: Galeri },
  { path: '/panduan', component: Panduan },
  { path: '/registrasi', component: Registrasi },
  { path: '/webinar', component: Webinar },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router