import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useUsuariosService } from '../services/usuariosService'

const STORAGE_KEY = 'usuarios'

export const useUsuariosStore = defineStore('usuarios', () => {
  // Mantén la misma instancia del servicio
  const usuariosService = useUsuariosService()

  // Cargar datos iniciales desde localStorage o del servicio si no hay
  function cargarUsuarios() {
    const datos = localStorage.getItem(STORAGE_KEY)
    if (datos) {
      try {
        return JSON.parse(datos)
      } catch {
        return usuariosService.listar()
      }
    } else {
      return usuariosService.listar()
    }
  }

  // Estado reactivo
  const usuarios = ref(cargarUsuarios())
  const filtroTipo = ref('todos')

  // Guarda en localStorage cada vez que usuarios cambia
  watch(usuarios, (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }, { deep: true })

  // Para mantener sincronizado el array interno del servicio
  function sincronizarServicio() {
    // Actualiza el array interno del servicio para que esté al día
    usuariosService.setUsuarios(usuarios.value)
  }

  // Computed usuarios filtrados
  const usuariosFiltrados = computed(() => {
    if (filtroTipo.value === 'todos') return usuarios.value
    return usuarios.value.filter(u => u.tipo === filtroTipo.value)
  })

  // Recargar usuarios (desde localStorage o servicio)
  function recargarUsuarios() {
    usuarios.value = cargarUsuarios()
    sincronizarServicio()
  }

  // Crear usuario nuevo: asigna ID y actualiza todo
  function crearUsuario(usuario) {
    usuariosService.crear(usuario)
    usuarios.value = [...usuariosService.listar()]
  }

  // Editar usuario existente
  function editarUsuario(usuario) {
    usuariosService.editar(usuario)
    usuarios.value = [...usuariosService.listar()]
  }

  // Borrar usuario por id
  function borrarUsuario(id) {
    usuariosService.borrar(id)
    usuarios.value = [...usuariosService.listar()]
  }

  // Obtener usuario por id
  function obtenerUsuario(id) {
    return usuariosService.obtenerPorId(id)
  }

  // Cambiar filtro
  function cambiarFiltro(tipo) {
    filtroTipo.value = tipo
  }

  function resetUsuarios() {
  localStorage.removeItem(STORAGE_KEY) // Elimina datos guardados
  usuarios.value = usuariosService.listar() // Carga los datos base del servicio
  location.reload()
  sincronizarServicio() // Mantiene el servicio y el estado reactivo en sincronía
}


  // Al iniciar sincroniza el array interno del servicio con lo cargado
  sincronizarServicio()

  return {
    usuarios,
    filtroTipo,
    usuariosFiltrados,
    recargarUsuarios,
    crearUsuario,
    editarUsuario,
    borrarUsuario,
    obtenerUsuario,
    cambiarFiltro,
    resetUsuarios,
  }
})
