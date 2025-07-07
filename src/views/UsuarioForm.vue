<template>
  <div>
    <h2>{{ isEdit ? "Editar Usuario" : "Nuevo Usuario" }}</h2>

    <form @submit.prevent="onSubmit" novalidate>
      <!-- Tipo Usuario -->
      <label>Tipo de Usuario *</label>
      <select v-model="usuario.tipo" @change="resetCamposEspecificos">
        <option disabled value="">Seleccione tipo</option>
        <option value="Demandante">Demandante</option>
        <option value="Empleado">Empleado</option>
      </select>
      <div v-if="errores.tipo" class="error">{{ errores.tipo }}</div>

      <!-- Datos Personales -->
      <h3>Datos personales</h3>

      <label>NIF o Pasaporte *</label>
      <input v-model="usuario.nifPasaporte" type="text" />
      <div v-if="errores.nifPasaporte" class="error">
        {{ errores.nifPasaporte }}
      </div>

      <label>Nombre *</label>
      <input v-model="usuario.nombre" type="text" />
      <div v-if="errores.nombre" class="error">{{ errores.nombre }}</div>

      <label>1er Apellido *</label>
      <input v-model="usuario.primerApellido" type="text" />
      <div v-if="errores.primerApellido" class="error">
        {{ errores.primerApellido }}
      </div>

      <label>2º Apellido</label>
      <input v-model="usuario.segundoApellido" type="text" />

      <label>Género</label>
      <select v-model="usuario.genero">
        <option value="">Seleccione</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="otro">Otro</option>
      </select>

      <label>Fecha de nacimiento</label>
      <input v-model="usuario.fechaNacimiento" type="date" />

      <!-- Dirección -->
      <h3>Dirección</h3>

      <label>Calle</label>
      <input v-model="usuario.direccion.calle" type="text" />

      <label>Número</label>
      <input v-model="usuario.direccion.numero" type="text" />

      <label>Puerta</label>
      <input v-model="usuario.direccion.puerta" type="text" />

      <label>Código Postal</label>
      <input v-model="usuario.direccion.codigoPostal" type="text" />

      <label>Ciudad</label>
      <input v-model="usuario.direccion.ciudad" type="text" />

      <!-- Campos específicos según tipo -->

      <template v-if="usuario.tipo === 'Demandante'">
        <h3>Estudios</h3>
        <div
          v-for="(estudio, index) in usuario.estudios"
          :key="index"
          class="subform"
        >
          <label>Nombre institución</label>
          <input v-model="estudio.nombreInstitucion" type="text" />

          <label>Titulación</label>
          <input v-model="estudio.titulacion" type="text" />

          <label>Fecha</label>
          <input v-model="estudio.fecha" type="date" />

          <button type="button" @click="eliminarEstudio(index)">
            Eliminar estudio
          </button>
          <hr />
        </div>
        <button type="button" @click="agregarEstudio">Añadir estudio</button>
      </template>

      <template v-if="usuario.tipo === 'Empleado'">
        <h3>Experiencia Laboral</h3>
        <div
          v-for="(exp, index) in usuario.experienciaLaboral"
          :key="index"
          class="subform"
        >
          <label>Nombre empresa</label>
          <input v-model="exp.nombreEmpresa" type="text" />

          <label>Puesto de trabajo</label>
          <input v-model="exp.puestoTrabajo" type="text" />

          <label>Fecha</label>
          <input v-model="exp.fecha" type="date" />

          <button type="button" @click="eliminarExperiencia(index)">
            Eliminar experiencia
          </button>
          <hr />
        </div>
        <button type="button" @click="agregarExperiencia">
          Añadir experiencia
        </button>
      </template>

      <br />
      <button type="submit">
        {{ isEdit ? "Guardar Cambios" : "Crear Usuario" }}
      </button>
      <button type="button" @click="cancelar">Cancelar</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUsuariosStore } from "@/store/usuariosStore";

const router = useRouter();
const route = useRoute();
const usuariosStore = useUsuariosStore();

const isEdit = ref(false);
const errores = reactive({});

// Estado usuario inicial
const usuario = reactive({
  id: null,
  tipo: "",
  nifPasaporte: "",
  nombre: "",
  primerApellido: "",
  segundoApellido: "",
  genero: "",
  fechaNacimiento: "",
  direccion: {
    calle: "",
    numero: "",
    puerta: "",
    codigoPostal: "",
    ciudad: "",
  },
  estudios: [],
  experienciaLaboral: [],
});

// Carga datos si viene id (editar)
onMounted(() => {
  const id = route.params.id;
  if (id) {
    const u = usuariosStore.obtenerUsuario(id);
    if (u) {
      Object.assign(usuario, JSON.parse(JSON.stringify(u)));
      isEdit.value = true;
    } else {
      alert("Usuario no encontrado");
      router.push("/usuarios");
    }
  }
});

// Añadir y eliminar estudios
function agregarEstudio() {
  usuario.estudios.push({ nombreInstitucion: "", titulacion: "", fecha: "" });
}

function eliminarEstudio(index) {
  usuario.estudios.splice(index, 1);
}

// Añadir y eliminar experiencia laboral
function agregarExperiencia() {
  usuario.experienciaLaboral.push({
    nombreEmpresa: "",
    puestoTrabajo: "",
    fecha: "",
  });
}

function eliminarExperiencia(index) {
  usuario.experienciaLaboral.splice(index, 1);
}

// Resetear campos específicos al cambiar tipo usuario
function resetCamposEspecificos() {
  usuario.estudios = [];
  usuario.experienciaLaboral = [];
}

// Validación de DNI
function validarDNI(dni) {
  if (typeof dni !== "string") return false;
  const dniTrim = dni.trim().toUpperCase();
  const dniRegex = /^\d{8}[A-Z]$/;
  if (!dniRegex.test(dniTrim)) return false;
  const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
  const numero = parseInt(dniTrim.slice(0, 8), 10);
  const letra = dniTrim.charAt(8);
  return letra === letras.charAt(numero % 23);
}

// Validación simple
function validar() {
  errores.tipo = usuario.tipo ? "" : "Tipo de usuario es obligatorio";

  if (!usuario.nifPasaporte) {
    errores.nifPasaporte = "NIF o Pasaporte es obligatorio";
  } else if (!validarDNI(usuario.nifPasaporte)) {
    errores.nifPasaporte = "NIF no válido. Debe tener 8 números y una letra correcta.";
  } else {
    errores.nifPasaporte = "";
  }

  errores.nombre = usuario.nombre ? "" : "Nombre es obligatorio";
  errores.primerApellido = usuario.primerApellido
    ? ""
    : "Primer apellido es obligatorio";

  // Devuelve true si no hay errores
  return (
    !errores.tipo &&
    !errores.nifPasaporte &&
    !errores.nombre &&
    !errores.primerApellido
  );
}

function onSubmit() {
  if (!validar()) return;

  if (isEdit.value) {
    usuariosStore.editarUsuario(usuario);
  } else {
    // Crear un id simple (puedes mejorarlo)
    usuario.id = Date.now().toString();
    usuariosStore.crearUsuario(usuario);
  }
  router.push("/usuarios");
}

function cancelar() {
  router.push("/usuarios");
}
</script>

<style scoped>
form {
  max-width: 90%;
  margin: 0 auto;
  padding: 2em;
  background-color: #ffffff;
  border-radius: 1em;
}

label {
  display: block;
  margin-top: 1em;
  font-weight: 600;
  color: #1f2d3d;
  font-size: 1em;
}

input,
select {
  width: 100%;
  padding: 0.5em;
  margin-top: 0.3em;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  box-sizing: border-box;
  font-size: 1em;
}

input:focus,
select:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow: 0 0 0.2em #d4af37;
}

.error {
  color: #d9534f;
  font-size: 0.9em;
  margin-top: 0.2em;
}

.subform {
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 0.5em;
}

button {
  margin-top: 1.5em;
  margin-right: 1em;
  padding: 0.6em 1.2em;
  background-color: #1f2d3d;
  color: white;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  cursor: pointer;
}

button:hover {
  background-color: #16222f;
}
</style>

