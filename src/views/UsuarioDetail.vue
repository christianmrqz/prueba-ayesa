<template>
  <div>
    <h2>Detalle Usuario</h2>

    <button @click="volver">Volver al listado</button>

    <div v-if="usuario">
      <div class="tabs">
        <button
          v-for="tab in tabsVisibles"
          :key="tab"
          :class="{ active: tab === tabActivo }"
          @click="tabActivo = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div class="tab-content">
        <ul v-if="tabActivo === 'Datos Personales'">
          <li>
            <p><strong>Tipo:</strong> {{ usuario.tipo }}</p>
            <p><strong>NIF/Pasaporte:</strong> {{ usuario.nifPasaporte }}</p>
            <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
            <p><strong>1er Apellido:</strong> {{ usuario.primerApellido }}</p>
            <p><strong>2º Apellido:</strong> {{ usuario.segundoApellido }}</p>
            <p><strong>Género:</strong> {{ usuario.genero }}</p>
            <p>
              <strong>Fecha de nacimiento:</strong>
              {{ usuario.fechaNacimiento }}
            </p>
          </li>
        </ul>

        <ul v-if="tabActivo === 'Dirección'">
          <li>
            <p><strong>Calle:</strong> {{ usuario.direccion.calle }}</p>
            <p><strong>Número:</strong> {{ usuario.direccion.numero }}</p>
            <p><strong>Puerta:</strong> {{ usuario.direccion.puerta }}</p>
            <p>
              <strong>Código Postal:</strong
              >{{ usuario.direccion.codigoPostal }}
            </p>
            <p><strong>Ciudad:</strong>{{ usuario.direccion.ciudad }}</p>
          </li>
        </ul>

        <ul v-if="tabActivo === 'Estudios' && usuario.tipo === 'Demandante'">
          <li v-if="usuario.estudios.length === 0">
            No hay estudios registrados.
          </li>
          <li v-for="(estudio, index) in usuario.estudios" :key="index">
            <p><strong>Institución:</strong> {{ estudio.nombreInstitucion }}</p>
            <p><strong>Titulación:</strong> {{ estudio.titulacion }}</p>
            <p><strong>Fecha:</strong> {{ estudio.fecha }}</p>
          </li>
        </ul>

        <ul
          v-if="
            tabActivo === 'Experiencia Laboral' && usuario.tipo === 'Empleado'
          "
        >
          <li v-if="usuario.experienciaLaboral.length === 0">
            No hay experiencia laboral registrada.
          </li>
          <li v-for="(exp, index) in usuario.experienciaLaboral" :key="index">
            <p><strong>Empresa:</strong> {{ exp.nombreEmpresa }}</p>
            <p><strong>Puesto:</strong> {{ exp.puestoTrabajo }}</p>
            <p><strong>Fecha:</strong> {{ exp.fecha }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div v-else>
      <p>Usuario no encontrado.</p>
      <button @click="volver">Volver al listado</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUsuariosStore } from "@/store/usuariosStore";

const router = useRouter();
const route = useRoute();
const usuariosStore = useUsuariosStore();

const usuario = ref(null);
const tabActivo = ref("Datos Personales");
const tabs = [
  "Datos Personales",
  "Dirección",
  "Estudios",
  "Experiencia Laboral",
];

// Computed para mostrar solo las pestañas relevantes segun el tipo
const tabsVisibles = computed(() => {
  if (!usuario.value) return [];
  if (usuario.value.tipo === "Demandante") {
    return ["Datos Personales", "Dirección", "Estudios"];
  }
  if (usuario.value.tipo === "Empleado") {
    return ["Datos Personales", "Dirección", "Experiencia Laboral"];
  }
  return tabs; // fallback, si tipo no reconocido muestra todas
});

onMounted(() => {
  const id = route.params.id;
  if (id) {
    usuario.value = usuariosStore.obtenerUsuario(id);
    if (!usuario.value) {
      alert("Usuario no encontrado");
      router.push("/usuarios");
    }
  }
});

function volver() {
  router.push("/usuarios");
}
</script>

<style scoped>
.detail-container {
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 2em;
  border-radius: 1em;
  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.05);
}

h2 {
  font-size: 1.8em;
  border-bottom: 0.1em solid #d4af37;
}

h3 {
  color: #d4af37;
  margin-top: 2em;
  font-size: 1.4em;
}

p {
  margin: 0.5em 0;
  font-size: 1em;
}

button {
  margin: 1em;
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
