<template>
  <!-- Modal -->
  <div>
        <div class="modal fade" :id="'update'+product.productId" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" v-model="product.title">
                        <input type="text" v-model="product.imgURL">
                        <input type="text" v-model="product.quantity">
                        <input type="text" v-model="product.price">
                        <input type="text" v-model="product.createdBy">
  
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary"
                            @click="editProduct()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['product'],
    
   

    methods: {
      editProduct(){
             
              let newProduct = { 
                productId: this.product.productId,
                  title: this.product.title,
                  imgURL: this.product.imgURL,
                  quantity: this.product.quantity,
                  price: this.product.price,
                  createdBy: this.product.createdBy
              }
              this.$store.dispatch('editProduct', newProduct);
            
          },
        
    }

}
</script>

<style scoped>

</style>