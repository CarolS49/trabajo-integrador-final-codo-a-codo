<template>
  <div class="container">
    <!--Navbar que se muestra solo en about view-->
      <navbar-component v-if="$route.path != '/'" />

    <!--NAVIGATION COMPONENT-->
      <navigation-component v-if="$route.path === '/about'" />

    <!--router vistas-->
      <router-view/>

    <!--Footer-->
      <footer-component-vue/>
      
  </div>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import FooterComponentVue from './components/FooterComponentVue.vue';

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img{
  width: 900px;
  height: 500px;
}
</style>
