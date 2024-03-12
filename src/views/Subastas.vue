<!-- CrearObjeto.vue -->
<template>
    <div>
      <h2>Crear Nuevo Objeto</h2>
      <form @submit.prevent="agregarObjeto">
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="nuevoObjeto.nombre" required>
  
        <label for="precioMaximo">Precio Máximo:</label>
        <input type="number" v-model="nuevoObjeto.precioMaximo" required>
  
        <!-- Agrega más campos según tus necesidades -->
  
        <button type="submit">Crear Objeto</button>
      </form>
  
      <router-link to="/lista-objetos">Ver Lista de Objetos</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nuevoObjeto: {
          nombre: '',
          precioMaximo: null,
          // Agrega más propiedades según tus necesidades
        },
      };
    },
    methods: {
      agregarObjeto() {
        // Valida los datos antes de agregar el objeto
        if (this.nuevoObjeto.nombre && this.nuevoObjeto.precioMaximo !== null) {
          // Llama a la mutación para agregar el objeto al estado global
          this.$store.commit('agregarObjeto', this.nuevoObjeto);
  
          // Limpia los campos después de agregar el objeto
          this.nuevoObjeto.nombre = '';
          this.nuevoObjeto.precioMaximo = null;
          // Limpia más campos si es necesario
        } else {
          alert('Completa todos los campos antes de crear el objeto.');
        }
      },
    },
  };
  </script>
  