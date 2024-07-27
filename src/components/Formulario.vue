<template>
    <div>
        <h1>Formulario</h1>
        <input 
        type="text"
        v-model.trim="datos.nombre">
    </div>
    <p>{{ datos.nombre }}</p>

    <div>
        <input 
        v-model="datos.aceptar"
        type="checkbox"
        id="terminos">
        <label for="terminos"> Terminos y condiciones </label>
    </div>
<p>{{ datos.aceptar }}</p>
<div v-if="datos.aceptar == true">
<input 
v-model="datos.lenguajes"
type="checkbox"  
id="A" 
value="python">
<input 
v-model="datos.lenguajes"
type="checkbox"  
id="b" 
value="java">
</div>
{{ datos.lenguajes }}

<div>
    <select name="paises" id="paises">
        <option v-for="pais in paises" :key="pais" :value="pais">
        {{ pais }}
        </option>
    </select>
</div>
<p>{{ datos }}</p>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const datos = reactive({
    nombre:'',
    fecha:'',
    lenguajes:[],
    pais:'',
    aceptar: true
})

//const nombre = ref();
//const aceptar = ref(false);
//const lenguajes = ref([]);
const paises = ref(['Mexico', 'España', 'Ecuador']);

</script>

<style scoped>

</style>