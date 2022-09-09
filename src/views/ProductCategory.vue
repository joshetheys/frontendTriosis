<template>
    <div v-if="products" class="containers" style="margin-left: 80px">
      <input type="search" placeholder="Search Products" class="search w-75  background:pink  mt-4 mb-3" v-model="search">
      <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12"  id="productCard" v-for="product in products" :key="product.productId" style="padding: 20px;">
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
  <div style=" height: 100vh; display: flex; justify-content: center; align-self: center;" v-else >
    <div style="display: flex; justify-content: center; align-self: center">

      <img src="https://i.postimg.cc/SxX9g01J/loading.gif" style="width: 100%; height: auto"/>

    </div>
  </div>
  </template>

<script>
    export default {
      name: 'singleproducts',
  props:["product"],

  data(){
    return {
      search: ''
    }
  },
    computed:{
        products(){
            return this.$store.state.products;
        },
        products() {
            return this.$store.state.products?.filter(products => { let isMatch = true; if (!products.title.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false; } return isMatch });
        },
    },
    mounted(){
      this.$store.dispatch('getProductCategory', this.$route.params.category)
        this.$store.commit("setProduct", null);
        this.$store.commit("setProducts", null);
     
    },
    
    }
</script>

<style scoped>
 @media (min-width: 992px) and (max-width: 1199px){
      #productCard{
        margin-right: 40px;
      }
    }

    .container{
      display: flex;
      height: 100vh;
    }
</style>