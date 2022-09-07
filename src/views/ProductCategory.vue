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
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="product in products" :key="product.productId" style="padding: 20px;">
        <div style="width: 20rem;">
          <router-link :to="{ name: 'singleproducts', params: { id: product.productId } }"> 
          <div>
            <img :src="product.imgURL" alt="img" style="width: 20rem; height: 20rem;">
          </div>
        </router-link>
          
          <div style="display:flex; justify-content:space-between">
            <div>
              R {{product.price}}
            </div>
            <!-- <div>
              {{product.size}}
            </div> -->

      </div>
  
        </div>

        
      
      </div>
    </div>
  </div>
  <div v-else>loading</div>
  </template>

<script>
    export default {
        mounted(){
            this.$store.dispatch('getProductCategory', this.$route.params.category)
            this.$store.commit("setProduct", null);
            this.$store.commit("setProducts", null);
        },
        computed:{
            products(){
                return this.$store.state.products;
                
            }
        }
    }
</script>

<style scoped>
 
</style>