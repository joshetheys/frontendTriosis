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


  <div class="container">
    <div class="row my-2">
      <!-- <div class="col-md">
        <router-link to="/registerUser">
          <button class="btn btn-primary">Add New User</button>
        </router-link>
      </div> -->
      <div class="col-md">
        <router-link to="/addProducts">
          <button class="btn btn-primary">Add New Product</button>
        </router-link>
      </div>
    </div>
    <!-- <h2 class="display-2">User</h2>
    <div class="row table-responsive-md setTableOff">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">User role</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td data-title="ID">{{user.id}}</td>
            <td data-title="Firstname">{{user.firstname}}</td>
            <td data-title="Lastname">{{user.lastname}}</td>
            <td data-title="Gender">{{user.gender}}</td>
            <td data-title="Address">{{user.address}}</td>
            <td data-title="User Role">{{user.userRole}}</td>
            <td data-title="Email">{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <h2 class="display-2">Product</h2>
    <div class="row table-responsive-md setTableOff">
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
            <td data-title="ID">{{product.productID}}</td>
            <td data-title="Name">{{product.title}}</td>
            <td data-title="Image">
              <img class="img-thumbnail sameSize" :src="product.imgURL" :alt="product.Title"/>
            </td>
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
        }
    },
    mounted(){
        this.$store.dispatch("getProducts");
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