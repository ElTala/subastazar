<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const desserts = ref([])

  // Llamada a la API para obtener datos al cargar el componente
  onMounted(async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/obtenerDatos') // Cambia la URL según tu configuración
      const data = await response.json()
      desserts.value = data
    } catch (error) {
      console.error('Error al obtener datos:', error)
    }
  })
</script>
