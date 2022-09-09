<template>
  <div class="footer">
  <footer id="footer" >
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
          <router-link class="nav-link px-2 text-muted" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-2 text-muted" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-2 text-muted" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item" v-if="user">
          <router-link class="nav-link px-2 text-muted" to="/products">Products</router-link>
        </li>
       
        <li class="nav-item">
          <router-link class="nav-link px-2 text-muted" to="/users/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-2 text-muted" to="/users/register">Sign In</router-link>
        </li>
      
    </ul>
    <p class="text-center text-muted">© 2022 Triosis, Inc</p>
          <a href="https://www.instagram.com/triosis_official/">
            <i class="fab fa-instagram"></i>
          </a>
        
  </footer>
</div>
</template>

<script>
export default {

}
</script>

<style>
/* .footer{
  background: pink;
} */
</style>