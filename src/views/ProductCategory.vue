<template>
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
        mounted(){
            this.$store.dispatch('getProductCategory', this.$route.params.category)
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