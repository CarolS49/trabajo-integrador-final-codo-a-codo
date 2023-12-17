<template>
    <section class="mt-5 text-center mx-auto">
        <h1 class="text-danger">Panadería y Pastelería Tradicional</h1>
        <img class="img-fluid" :src="require('@/assets/img/tienda-pan.jpg')" alt="fondo">
        <div class="mt-3" v-if="categories && $route.path !== '/about'">
            <button class="btn btn-info" v-for="category in categories" :key="category.id" @click="getCategory(category.id, category.name)">{{category.name}}</button>
            <hr>
        </div>
    </section>   
</template>


<script setup >
/* eslint-disable */
import axios from 'axios'
import { ref, defineEmits, onMounted } from 'vue'

//declaración de variables reactivas
const categories = ref([])
const categoryID = ref(null)
const categoryName = ref(null)

const emit = defineEmits(['getCategoryID'])

//Emisión del filtrado de los datos al evento click que esta escuchando en el home.vue
const getCategory = (id, name) => {
    emit('getCategoryID', id, name)
}

 //Consulta a la api
onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/categories/')
        .then(response => {
            categories.value = response.data
    })
    .catch(error => {
        console.log('Error fetching categories:', error);
    })
})

</script>

<style>
/* ESTILOS ADICIONALES DEl HOME DE NAVEGATION */
button{
    margin-right: 5px;
}

button + button, button:first-child {
    margin-left: 5px;
}

@media (max-width: 768px){
    button{
        width: 50%;
        margin: 0 0 5px !important;
        box-sizing: border-box;
    }
}

</style>
