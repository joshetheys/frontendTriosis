<template>
   


  <div class="container">
    <div class="row my-2">
      <div class="col-md">
        <router-link to="/users/register">
          <button class="btn btn-primary">Add New User</button>
        </router-link>
      </div>
      <div class="col-md">
        <router-link to="/products/add">
          <button class="btn btn-primary">Add New Product</button>
        </router-link>
      </div>
    </div>
    <h2 class="display-2">User</h2>
    <div class=" table-responsive">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Fullnames</th>
            <th scope="col">User role</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td data-title="ID">{{user.id}}</td>
            <td data-title="Fullnames">{{user.fullnames}}</td>
            <td data-title="User Role">{{user.userRole}}</td>
            <td data-title="Email">{{user.email}}</td>
            <td data-title="Password">{{user.userpassword}}</td>
          </tr>
        </tbody>
      </table>
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
          </tr>
        </tbody>
      </table>      
    </div>

  </div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.state.products;
        },
    users(){
    return this.$store.state.users;
   }
    },
    mounted(){
        this.$store.dispatch("getProducts");
        this.$store.dispatch("getUsers");
    }

}
</script>

<style>
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