<template>
     <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Products">Products</router-link> |
    <router-link to="/about">Products Admin</router-link> |
    <router-link to="/about">Login</router-link> |
    <router-link to="/about">Sign In</router-link> |
    <router-link to="/about">User Admin</router-link> |
    <router-link to="/about">User Profile</router-link> |
  </nav>
  <div v-if="products">
  <div v-for="product in products" :key="product.id">
     {{product.title}}
     <img :src="product.img" alt="img">
  </div>

  </div>
  <div v-else>loading</div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.state.products;
        }
    },
    mounted(){
        this.$store.dispatch("getProducts");
    }

}
</script>

<style>
    .products{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: column;
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
</style> 