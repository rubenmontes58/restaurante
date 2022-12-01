import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GaleriaView from '../views/GaleriaView.vue'
import ChefView from '../views/ChefView.vue'
import ContactoView from '../views/ContactView.vue'
import MenuView from '../views/MenuView.vue'
import DesayunoVue from '../components/Desayuno.vue'
import AlmuerzoVue from '../components/Almuerzo.vue'
import EntradaVue from '../components/Entrada.vue'
import CenaVue from '../components/Cena.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/galeria',
      name: 'galeria',
      component: GaleriaView
    },
    {
      path: '/chef',
      name: 'chef',
      component: ChefView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/almuerzo',
      name: 'almuerzo',
      component: AlmuerzoVue
    },
    {
      path: '/desayuno',
      name: 'desayuno',
      component: DesayunoVue
    },
    {
      path: '/entrada',
      name: 'entrada',
      component: EntradaVue
    },

    {
      path: '/cena',
      name: 'cena',
      component: CenaVue
    }


 
   
   
   
    

   
   
  ]
})

export default router
