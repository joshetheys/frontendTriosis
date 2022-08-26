<template>
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

</style> 