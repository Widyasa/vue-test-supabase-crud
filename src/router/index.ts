import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import KelasIndex from '@/views/KelasIndex.vue'
import SiswaIndex from '@/views/SiswaIndex.vue'
import Main from '@/layouts/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      redirect: '/dashboard',
      component: Main,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/kelas',
          name: 'kelas',
          component: KelasIndex
        },
        {
          path: '/siswa',
          name: 'siswa',
          component: SiswaIndex
        },
      ]
    },


  ]
})

export default router
