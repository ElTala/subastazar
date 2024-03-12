<template>
  <v-sheet class="mx-auto" width="300">

    <v-form ref="form">
      <v-text-field
        v-model="nombre"
        :counter="32"
        :rules="nombreRules"
        label="Nombre del objeto"
        required
      ></v-text-field>
      <v-text-field
        v-model="descripcion"
        label="Descripcion"
        required
      ></v-text-field>
      <v-text-field
        v-model="precio"
        :counter="5"
        label="Precio maximo"
        required
      ></v-text-field>
      <v-text-field
        v-model="puja"
        :counter="5"
        label="Puja Inicial"
        required
      ></v-text-field>

      <div class="d-flex flex-column">
        <v-btn
          class="mt-4"
          color="success"
          block
          @click="validate"
        >
          Enviar objeto
        </v-btn>

        <v-btn
          class="mt-4"
          color="error"
          block
          @click="reset"
        >
          Limpiar campos
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue'

  const form = ref()
  const descripcion = ref('')
  const precio = ref('')
  const puja = ref('')
  const nombre = ref('')
  const nombreRules = ref([
    v => !!v || 'El campo es requerido',
  ])
  const select = ref(null)

  async function validate() {
  const nuevoObjeto = {
    nombre: nombre.value,
    descripcion: descripcion.value,
    precio: precio.value,
    puja: puja.value,
  };

  try {
    const response = await fetch('http://127.0.0.1:3000/guardarObjeto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoObjeto),
    });

    const result = await response.json();

    alert(result.message);
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
}


  function reset () {
    form.value.reset()
  }
  function resetValidation () {
    form.value.resetValidation()
  }
  
</script>
