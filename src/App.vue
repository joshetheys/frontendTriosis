<template>
  <Navbar/>
 
  <router-view/>
<Footer/>
<Cart/>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Cart from './components/Cart.vue';

  export default{
    components : { Navbar, Footer, Cart },
    name: 'App'

  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
