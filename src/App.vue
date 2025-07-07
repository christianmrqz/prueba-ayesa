<template>
  <div id="app">
    <header>
      <img src="/gestorayesa.png" alt="Gestor Ayesa" />
      <nav>
        <router-link to="/usuarios">Listado</router-link> |
        <router-link to="/usuarios/nuevo">Nuevo Usuario</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
body {
  margin: 1em;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f5f5f5;
  color: #1f2d3d;
  font-size: 1rem; /* Escalable */
}

header {
  text-align: center;
}

img{
  width: auto;
}

a {
  color: #d4af37;
  text-decoration: none;
  font-size: 1em;
}

h1{
  text-align: center;
}

nav {
  background-color: #1f2d3d;
  color: white;
  padding: 1em;
  border-radius: 1em;box-shadow: 0 0.2em 0.6em rgba(0, 0, 0, 0.423);
}

nav a {
  margin-right: 1em;
  font-weight: bold;
  font-size: 1em;
}
</style>

