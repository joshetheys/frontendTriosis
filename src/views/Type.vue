<template>
    
 <div v-if="products" class="container">
  <input type="search" placeholder="Search Products" class="search w-75  background:pink  mt-4 mb-3" v-model="search">
   <div class="row">

   <div class=" col-lg-4 col-md-6 col-sm-12"  id="productCard" v-for="product in products" :key="product.productID" style="padding: 20px;">
     <div style="width: 20rem;">
      <router-link :to="{ name: 'singleproducts', params: { id: product.productId } }"> 
          <div>
            <img :src="product.imgURL" alt="img" style="width: 20rem; height: 20rem;">
          </div>
        </router-link>
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
        this.$store.dispatch("getProducts");
        this.$store.commit("setProduct", null);
        this.$store.commit("setProducts", null);
     
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

   @media (min-width: 992px) and (max-width: 1199px){
      #productCard{
        margin-right: 40px;
      }
    }


</style> 