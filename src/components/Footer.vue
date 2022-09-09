<!-- <template>
  <div class="container" style="padding-top: 10vh">
    <footer class="py-3">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item" style="height: 100%; align-items: center">
          <router-link to="/" style="text-decoration: none; "><p style="color: pink; padding: 8px">HOME</p></router-link>
        </li>
        <li class="nav-item" style="height: 100%; align-items: center">
          <router-link to="/users/login" style="text-decoration: none; "><p style="color: pink; padding: 8px">LOGIN</p></router-link>
        </li>
      </ul>
      <p class="text-center text-muted">© 2022 Triosis, Inc  </p>
    </footer>
  </div>
</template>

<style scoped>

</style> -->





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