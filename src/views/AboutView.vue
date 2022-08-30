<template>
   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Products">Products</router-link> |
    <router-link to="/about">Products Admin</router-link> |
    <router-link to="/about">Login</router-link> |
    <router-link to="/about">Sign In</router-link> |
    <router-link to="/about">User Admin</router-link> |
    <router-link to="/about">User Profile</router-link> |
  </nav>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style scoped>
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
