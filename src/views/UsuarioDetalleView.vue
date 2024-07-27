<template>
<div class="card">
    <img class="card-img-top"
     :src="usuario?.avatar"
      alt="Title" />
    <div class="card-body">
        <h4 class="card-title">{{ usuario?.first_name}}</h4>
        <p class="card-text">{{ usuario?.last_name }}</p>
    </div>
    <div class="card-footer">
        <button @click="regresar">Volver</button>
    </div>
</div>

</template>

<script setup lang="ts">
import type { IUsuario } from '@/types';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const id = route.params.id;
const usuario = ref<IUsuario | null>(null);
const router = useRouter();

const regresar = (() =>{
    router.push('/');
})

onMounted(async ()=>{
   const response = await fetch(`https://reqres.in/api/users/${id}`)
   const {data} = await response.json();
    usuario.value = data;
})


</script>

<style scoped>

</style>