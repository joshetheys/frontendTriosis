<template>
   


  <div class="container">
    <div class="row">
    
      <div class="col-md">
        <router-link to="/products/add">
          <button class="btn btn-primary">Add New Product</button>
        </router-link>
      </div>
    </div>
    
    <h2 class="display-2">Product</h2>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Created By</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product" :product="product">
            <td data-title="ID">{{product.productId}}</td>
            <td data-title="Name">{{product.title}}</td>
            <td data-title="Image">
              <img  style="width: 5rem" :src="product.imgURL" :alt="product.Title"/>
            </td>
            <td data-title="Quantity">{{product.quantity}}</td>
            <td data-title="Price">R {{product.price}}</td>
            <td data-title="Created By">{{product.createdBy}}</td>
            <td>
              <!-- <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button> -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        :data-bs-target="'#update'+product.productId">
                        <i class="fas fa-edit"></i>
                    </button>
                    <ModalProd :product="product" />
              <!-- <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button> -->
              <button id="delete" class="btn btn-danger" @click="this.$store.dispatch('deleteProduct', product.productId)">
                <i class="far fa-trash-alt"></i>
                        </button>
            <!-- <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button> -->
            </td>
          </tr>
        </tbody>
      </table>      
    </div>


  </div>
</template>

<script>
  import ModalProd from "../components/ModalProd.vue"

export default {
  components:{ ModalProd},
  props:['product'],
    computed:{
        products(){
            return this.$store.state.products;
        },
   
    },
    mounted(){
        this.$store.dispatch("getProducts");
   
    },

    methods: {
      editProduct(){
             
              let newProduct = { 
                  title: this.product.title,
                  imgURL: this.product.imgURL,
                  quantity: this.product.quantity,
                  price: this.product.price,
                  createdBy: this.product.createdBy
              }
              this.$store.dispatch('editProduct', changedProduct);
              document.getElementById(`editProductClose`+this.product.productId).click();
          },
        deleteProduct() {
            console.log("Product was deleted");
            this.$store.dispatch("deleteProduct", this.product.productId);
        }
    }


}
</script>

<style>
 
  </style>