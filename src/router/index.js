import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Subastas from '../views/Subastas.vue'
import CrearObjeto from '../views/CrearObjetos.vue'
import ListaObjetos from '../views/ListaObjetos.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  { path: '/crear-objeto', component: CrearObjeto },
  { path: '/lista-objetos', 
  component: ListaObjetos,    
  meta: {
    requiresPassword: true,
  } },
  {
    path: '/subastas',
    name: 'subastas',
    component: Subastas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresPassword)) {
    const password = prompt('Ingresa la contraseña:')
    if (password === 'lolo1212') {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
