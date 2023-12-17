
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary mt-3">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link activate" aria-current="page" to="/">Inicio</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Nosotros</router-link>
        </li>
      </ul>
      <!--Formulario buscar NAVBAR-->
      <form class="d-flex" role="search" @submit.prevent="submitForm" v-if="$route.path === '/'">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" v-model="searchText">
        <button class="btn btn-outline-success" type="submit" @click="getSearch">Buscar</button>
      </form>
      <div>
        <button href="../assets/carrito.html" class="btn btn-outline-success" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
          </svg>
          Ver carrito
  </button>
      </div>
    </div>
  </div>
</nav>
</template>
a
<script setup>
/* eslint-disable */
import { ref, defineEmits } from 'vue'

//variable reactiva
const searchText = ref('')
const emitSearch = defineEmits(['getSearchText'])


//función para obtener el campo de la búsqueda luego de enviar el form
const getSearch = () => {
    emitSearch('getSearchText', searchText.value)
}

</script>

<style>
/* ESTILOS ADICIONALES DEL NAVBAR*/
</style>
