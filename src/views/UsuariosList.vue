<template>
  <div>
    <h2>Listado de Usuarios</h2>

    <!-- Filtro por tipo -->
    <label for="filtroTipo">Filtrar por tipo:</label>
    <select id="filtroTipo" v-model="filtroTipo" @change="onFiltroChange">
      <option value="todos">Todos</option>
      <option value="Demandante">Demandante</option>
      <option value="Empleado">Empleado</option>
    </select>

    <!-- Botón nuevo usuario -->
    <button @click="nuevoUsuario" style="margin-left:1em;">Nuevo usuario</button>
    <!-- Botón resetear usuarios -->
    <button @click="usuariosStore.resetUsuarios()">Resetear usuarios</button>

    <!-- Tabla usuarios -->
    <table border="1" cellpadding="5" cellspacing="0" style="margin-top:1em; width:100%;">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>NIF/Pasaporte</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuariosFiltrados" :key="usuario.id">
          <td>{{ usuario.nombre }} {{ usuario.primerApellido }} {{ usuario.segundoApellido }}</td>
          <td>{{ usuario.tipo }}</td>
          <td>{{ usuario.nifPasaporte }}</td>
          <td class="acciones">
            <button @click="verUsuario(usuario.id)">Ver</button>
            <button @click="editarUsuario(usuario.id)">Editar</button>
            <button @click="confirmarBorrar(usuario)">Borrar</button>
          </td>
        </tr>
        <tr v-if="usuariosFiltrados.length === 0">
          <td colspan="4">No hay usuarios para mostrar</td>
        </tr>
      </tbody>
    </table>

    <!-- Confirm Dialog -->
    <ConfirmDialog
      v-if="mostrarConfirm"
      :show="mostrarConfirm"
      :mensaje="`¿Está seguro de que desea borrar el usuario ${usuarioABorrar?.nombre}?`"
      @confirm="borrarUsuario"
      @cancel="mostrarConfirm = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuariosStore } from '@/store/usuariosStore'
import ConfirmDialog from '@/components/ConfirmDialog.vue'

const router = useRouter()
const usuariosStore = useUsuariosStore()

// Bind filtro con la store
const filtroTipo = ref(usuariosStore.filtroTipo)

function onFiltroChange() {
  usuariosStore.cambiarFiltro(filtroTipo.value)
}

const usuariosFiltrados = computed(() => usuariosStore.usuariosFiltrados)

function nuevoUsuario() {
  router.push('/usuarios/nuevo')
}

function verUsuario(id) {
  router.push(`/usuarios/${id}/ver`)
}

function editarUsuario(id) {
  router.push(`/usuarios/${id}/editar`)
}

// Confirmación borrar
const mostrarConfirm = ref(false)
const usuarioABorrar = ref(null)

function confirmarBorrar(usuario) {
  usuarioABorrar.value = usuario
  mostrarConfirm.value = true
}

function borrarUsuario() {
  usuariosStore.borrarUsuario(usuarioABorrar.value.id)
  mostrarConfirm.value = false
  usuarioABorrar.value = null
}
</script>


<style scoped>

table {
  border-collapse: separate;
  border-spacing: 0; /* para evitar espacios entre celdas */
  border-radius: 1em;
  overflow: hidden; /* importante para que el redondeo se vea */
  box-shadow: 0 0.2em 0.6em rgba(0, 0, 0, 0.1);
}

td {
  padding: 0.75em;
  border: 1px solid #e0e0e0;
  text-align: center;
}

th {
  background-color: #1f2d3d;
  color: #ffffff;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

button {
  padding: 0.5em 1em;
  margin-right: 0.5em;
  background-color: #d4af37;
  color: #1f2d3d;
  border: none;
  border-radius: 0.3em;
  font-weight: bold;
  font-size: 1em;
}

button:hover {
  background-color: #bfa431;
}


select#filtroTipo {
  padding: 0.5em 1em;
  margin-left: 0.5em;
  background-color: #d4af37;
  color: #1f2d3d;
  border: none;
  border-radius: 0.3em;
  font-weight: bold;
  font-size: 1em;
  appearance: none; /* Para quitar el estilo por defecto en algunos navegadores */
  cursor: pointer;
}
</style>