
<template>
<!--NAVBAR-->
<!--definimos el evento que escucha del navbar-component-->
  <navbar-component @getSearchText="search"/>

<!--navigation-->
  <NavigationComponent @getCategoryID="CategoryID"/>

<div class="mb-3" v-if="searchTextRule">
  <!--filtrado de categorías-->
  <h3>Productos con el texto <strong>{{ searchTextRule }}</strong></h3>
  <button  class="btn btn-lg btn-info" @click="resetFilter"> Mostrar todos los productos</button>

  <!--alert para los productos no encontrados-->
  <div class="alert alert-primary mt-3" role="alert" v-if="filteredProducts.length === 0">
    No tenemos productos con el texto <strong>{{ searchTextRule }}</strong> para mostrar !
  </div>
</div>

<div class="mb-3" v-if="categoryReceived">
  <!--filtrado de categorías-->
  <h3>Productos de la categoría <strong>{{ categoryReceived }}</strong></h3>
  <button  class="btn btn-lg btn-info" @click="resetFilter"> Mostrar todos los productos</button>

  <!--alert para las categorías de productos no encontrados-->
  <div class="alert alert-primary mt-3" role="alert" v-if="filteredProducts.length === 0">
    No tenemos stock  en la categoría <strong>{{ categoryReceived }}</strong> para mostrar !
  </div>
</div>

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="product in filteredProducts" :key="product.id">
      <div class="card text-center">
        <img :src="product.image" class="card-img-top img-thumbnail" alt="imagen de {{ product.name }}" />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{{ product.category_name }}</h6>
          <p class="card-text">{{ product.description }}</p>
        </div>
        <div class="card-footer text-danger">
          PRECIO: $ {{ product.price }} - {{ product.price_type_description }}
        </div>
           <!-- 
        <div>
          <button class="btn btn-lg btn-info mb-1" @click="addToCart(product)">Agregar al carrito</button>
          <button class="btn btn-lg btn-danger mb-1" @click="removeFromCart(product)">Quitar del carrito</button>
        </div>
          -->
      </div>
    </div>
  </div>
</template>


<script setup>
/* eslint-disable */

import axios from 'axios'
import NavigationComponent from '../components/NavigationComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue';
import { ref, onMounted } from 'vue';
//import { homedir } from 'os';

//definición de variables reactivas
const products = ref([])
const filteredProducts = ref([])
const categoryReceived = ref(null)
const searchTextRule = ref(null)
//carrito

const search = (searchText) => {
  categoryReceived.value = null
  searchTextRule.value = searchText;

  if (searchText) {
    // Voy a filtrar los datos
    filteredProducts.value = products.value.filter((product) => {
      const productName = product.name.toLowerCase();
      const productDescription = product.description.toLowerCase();
      const searchTerm = searchText.toLowerCase();

      return (
        productName.includes(searchTerm) ||
        productDescription.includes(searchTerm)
      )
    })
  } else {
    filteredProducts.value = products.value;
  }
};

//filtrado de productos según categoría
const CategoryID = (categoryID, categoryName) => {
  searchTextRule.value = null
  categoryReceived.value = categoryName
  if (categoryID) {
    filteredProducts.value = products.value.filter((product) => product.category === categoryID)
  } else {
      filteredProducts.value = products.value
  }
}
//función para resetear el filtro con el boton "mostrar todos"
const resetFilter = ()=> {
    categoryReceived.value = null
    searchTextRule.value = null
    filteredProducts.value = products.value
}
//Consulta a la api
onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
    .then(response => {
      products.value = response.data
      filteredProducts.value = products.value
    })
    .catch(error => {
    console.log(error);
})
})

</script>

<style>
  .card{
      border: 2px solid gray !important;
  }
</style>
