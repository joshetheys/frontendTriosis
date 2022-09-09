<template>
  <div v-if="product" style="padding-top: 20vh">
    <div class="container">

      <div class="row"  style="margin-bottom: 5rem">

        <div class="col-lg-6 col-sm-12 col-md-12"  style="padding-bottom: 2rem">
          <div style="display: flex; justify-content: center">

            <img class="img-fluid" style="width: 27rem; height: 27rem; z-index: 2" :src="product[0].imgURL"/>

          </div>
        </div>

        <div class="col-lg-6 col-sm-12 col-md-12">
          <div>
            <div>

              <h3 id="prodTitle">{{ product[0].title }}</h3>

              <p class="fw-light">{{ product[0].description }}</p>
    
              <div class="row">
                <div>

                  <p style="display: flex; justify-content: space-between">
                    <strong>Category: </strong> <em>{{ product[0].category }}</em>
                  </p>

                  <p style="display: flex; justify-content: space-between">
                    <strong>Type: </strong
                    ><em>{{ product[0].type }}</em>
                  </p>

                  <p style="display: flex; justify-content: space-between">
                    <strong>Size: </strong><em>{{ product[0].size }}</em>
                  </p>

                  <p style="display: flex; justify-content: space-between">
                    <strong>Price: </strong><em>R{{ product[0].price }}</em>
                  </p>

                  <button id="cartbtn" class="text-white"  @click="addCart()">
                    <strong>Cart</strong>
                  </button>

                </div>

              </div>
            </div>
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
  props: ['id'],
    mounted() {
      this.$store.dispatch("getProduct", this.id);
    //  this.$store.dispatch("setUserCart", this.id);
    },
    computed: {
      product() {
        return this.$store.state.product;
      },
      user(){
        return this.$store.state.user
      }
    },
    methods:{
      addCart(){
        let product = {
          productId: this.product[0].productId,
          title: this.product[0].title,
          category: this.product[0].category,
          type: this.product[0].type,
          description: this.product[0].description,
          size: this.product[0].size,
          imgURL: this.product[0].imgURL,
          price: this.product[0].price,
          createdBy: this.product[0].createdBy
        }
        this.$store.dispatch('addCart', product)
      }
    }
    
}
</script>

<style scoped>

#cartbtn {
  text-decoration: none;
  width: 100%;
  height: 2rem;
  background-color: pink;
  color: black;
  border: none;
  
  transition: color, background 1s;

}
#cartbtn:hover{
    color: pink;
    background: black;
}

</style> 