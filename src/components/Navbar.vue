
.<template>
  <nav class="navbar navbar-expand-xl navbar-dark fixed-top bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Triosis</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item pt-2 pe-2 ps-2 text-white">
          <div data-bs-toggle="offcanvas" data-bs-target="#userCart" v-if="user"><i class="fa-solid fa-cart-shopping"></i>Cart</div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item" v-if="user">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item" v-if="admin">
          <router-link class="nav-link" to="/products/admin">Products Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users/register">Sign In</router-link>
        </li>
        <li class="nav-item" v-if="admin">
          <router-link class="nav-link" to="/users/admin">User Admin</router-link>
        </li>
        <li class="nav-item" v-if="user">
          <router-link class="nav-link" to="/users/profile"><i class="fa fa-user" aria-hidden="true"></i>User Profile</router-link>
        </li>
        
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>

<Cart :user="user"/>
</template>

<script>
import Cart from './Cart.vue';
export default {
  computed: {
    user() {
            return this.$store.state.user;
        },
    admin() {
      return this.$store.state.admin;
    }
    
    },
    components: { Cart }
}


</script>

<style>
  .bg-dark {
    background-color: pink!important;
}

/* @media (min-width: 768px)
.navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
} */
.navbar {
    position: sticky;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    
}

</style>
