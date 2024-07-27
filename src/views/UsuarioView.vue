<template>
    <div class="container mt-4">
        <ul class="list-group list-group-item">
            <li 
            class="list-group-item" 
            v-for="usuario in usuarios"
            :key="usuario.id">
            <RouterLink :to="`/usuario-detalle/${usuario.id}` ">
                {{ usuario.last_name }} {{ usuario.first_name }}
            </RouterLink>
            </li>
            
        </ul>
        
    </div>
</template>

<script setup lang="ts">
import type { IUsuario } from '@/types';
import { onBeforeMount,ref, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';
import { RouterLink } from 'vue-router';

const datos = ref();
const usuarios = ref<IUsuario[]>([]);

onBeforeMount(()=>{

});

onMounted(async()=>{
try{
const response = await fetch('https://reqres.in/api/users')
const data = await response.json();
usuarios.value = data.data

}catch (error){
    console.log('Error', error)
}

})

onBeforeUpdate(()=>{

})
onUpdated(()=>{

})

onBeforeUnmount(()=>{

})

onUnmounted(()=>{

})


</script>

<style scoped>

</style>