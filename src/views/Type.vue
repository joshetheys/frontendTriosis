<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/products/admin">Products Admin</router-link> |
    <router-link to="/users/login">Login</router-link> |
    <router-link to="/users/register">Sign In</router-link> |
    <router-link to="/users/admin">User Admin</router-link> |
    <router-link to="/router-linkbout">User Profile</router-link> |
  </nav>
 <div v-if="products" class="container">
   <div class="row">

   <div class=" col-lg-4 col-md-6 col-sm-12" v-for="product in products" :key="product.productID" style="padding: 20px;">
     <div style="width: 20rem;">
       <div>
     <img :src="product.imgURL" alt="img" style="width: 20rem; height: 20rem;">
   </div>
   <div style="display:flex; justify-content:space-between">
   <div>
     {{product.title}}
   </div>
   <div>
     {{product.size}}
   </div>

 </div>
     </div>

  
   

   

 </div>
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
       this.$store.dispatch('getProductType', this.$route.params.type)
   },
   

}
</script>

<style scoped>

   /* .products{
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       flex: column;
   } */

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