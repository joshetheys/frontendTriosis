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
  <div  v-if="products" class="container">
    <div class="row">
      <div class=" col-lg-4 col-md-6 col-sm-12">
        <router-link to="/productsCategory/K-Pop"><div class="card text-white">
        <img src="https://i.postimg.cc/G3sgZztX/tumblr-c77a775a98734145479140ce430ec309-362539d5-540.jpg" class="card-img" alt="..." style="width: 20rem; height: 20rem;">
        <div class="card-img-overlay">
    <h5 class="card-title" >K-Pop</h5>
  </div>
</div>
</router-link>

      </div>

      <div class=" col-lg-4 col-md-6 col-sm-12">

        
<router-link to="/productsCategory/Second-Hand"> 
<div class="card text-white">

  <img src="https://i.postimg.cc/90C1HKc6/07a11a09578628ab719a61539a52514f.jpg" class="card-img" alt="..." style="width: 20rem; height: 20rem;">

  <div class="card-img-overlay">
    <h5 class="card-title" >Second-Hand</h5>
  </div>

</div>
</router-link>

      </div>

      <div class=" col-lg-4 col-md-6 col-sm-12">
        <router-link to="/productsType/Bag">
<div class="card text-white">
   <img src="https://i.postimg.cc/cCr5cNgM/92bdb50237520d23513e185db95f785b.jpg" class="card-img" alt="..." style="width: 20rem; height: 20rem;">
   <div class="card-img-overlay">
     <h5 class="card-title" >Bags</h5>
    </div>
  </div>
</router-link>
      </div>

      
      <div class=" col-lg-4 col-md-6 col-sm-12">
        <router-link to="/productsType/Sweater"> 
  <div class="card text-white">
  <img src="https://i.postimg.cc/qvh6HDnb/knitwear-aesthetic-pretty-Favim-com-6772998.jpg" class="card-img" alt="..." style="width: 20rem; height: 20rem;">
  <div class="card-img-overlay">
    <h5 class="card-title" >Sweater</h5>
  </div>
  
  </div>
  </router-link>
      </div>

      <div class=" col-lg-4 col-md-6 col-sm-12">
        <router-link to="/productsType/Skirt"> 
<div class="card text-white">
  <img src="https://i.postimg.cc/66CNgryr/tumblr-ooj8tx-Vywb1wna752o1-500.jpg" class="card-img" alt="..." style="width: 20rem; height: 20rem;">
  <div class="card-img-overlay">
    <h5 class="card-title" >Skirt</h5>
  </div>
</div>
</router-link>
      </div>

      <div class=" col-lg-4 col-md-6 col-sm-12">
        <router-link to="/productsType/Outerwear"> 
   <div class="card text-white">
  <img src="https://i.postimg.cc/SKtDgv6y/6117d76dcd4fd15bf79d32b932b461d2.jpg" class="card-img" alt="..." style="width: 20rem; height: 20rem;">
  <div class="card-img-overlay">
    <h5 class="card-title" >Outerwear</h5>
  </div>
</div>
</router-link>
      </div>

   

    
      <div class=" col-lg-4 col-md-6 col-sm-12">
        <router-link to="/productsType/Lingerie"> 
<div class="card text-white">
  <img src="https://i.postimg.cc/Nj0gTKbW/cacff60e4b5723695e152d33b3e7fb59.jpg" class="card-img" alt="..." style="width: 20rem; height: 20rem;">
  <div class="card-img-overlay">
    <h5 class="card-title" >Lingerie</h5>
  </div>
</div>
</router-link>
      </div>

      <div class=" col-lg-4 col-md-6 col-sm-12">
        <router-link to="/productsType/Socks">
<div class="card text-white">
   <img src="https://i.postimg.cc/wMhhhfxT/ce7de70aacf9dd16fca81798dca9a8fc.jpg" class="card-img" alt="..." style="width: 20rem; height: 20rem;">
   <div class="card-img-overlay">
     <h5 class="card-title" >Socks</h5>
    </div>
  </div>
</router-link>
      </div>
    </div>


   

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

.card-img-overlay {
  background-color: rgba(6, 4, 4, 0);
  display: flex;
  justify-content: center;
  align-content: center;
 
}
.card{
  border: none;
  padding-bottom: 20px;
}

</style> 