import { createRouter, createWebHistory } from 'vue-router'
import UsuariosList from '../views/UsuariosList.vue'
import UsuarioForm from '../views/UsuarioForm.vue'
import UsuarioDetail from '../views/UsuarioDetail.vue'

const routes = [
  { path: '/', redirect: '/usuarios' },
  { path: '/usuarios', component: UsuariosList },
  { path: '/usuarios/nuevo', component: UsuarioForm },
  { path: '/usuarios/:id/editar', component: UsuarioForm, props: true },
  { path: '/usuarios/:id/ver', component: UsuarioDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
