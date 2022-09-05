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
</template>

<script>
export default {

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