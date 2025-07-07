<template>
  <div v-if="show" class="overlay">
    <div class="dialog">
      <p>{{ mensaje }}</p>
      <div class="buttons">
        <button @click="$emit('confirm')">Aceptar</button>
        <button @click="$emit('cancel')">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  mensaje: String,
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog {
  background: white;
  padding: 1.5em;
  border-radius: 6px;
  max-width: 300px;
  text-align: center;
}

.buttons {
  margin-top: 1em;
  display: flex;
  justify-content: space-around;
}

button {
  padding: 0.5em 1.2em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:first-child {
  background-color: #42b983;
  color: white;
}

button:last-child {
  background-color: #ccc;
}
</style>
