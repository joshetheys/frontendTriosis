<template>
   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/products/admin">Products Admin</router-link> |
    <router-link to="/users/login">Login</router-link> |
    <router-link to="/users/register">Sign In</router-link> |
    <router-link to="/users/admin">User Admin</router-link> |
    <router-link to="/about">User Profile</router-link> |
  </nav>
<div class="signup">
  <form class="signup-inner">
    <div class="col-12 pt-5">
            <h3 class="display-4 pt-5">Register</h3>
          </div>
  <label>
    <label>
    Your Full Name:
    <textarea name="fullname"></textarea>
  </label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your password:
    <textarea name="password"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button class="btn border border-0" type="button" @click="register()">Register</button>
</form>
</div>
 


</template>

<script>
export default {
  data(){
    return{
      fullname: '',
      email: '',
      password: ''
    }
  },
  methods:{
    register(){
      const user = {
          fullname: this.fullname,
          email: this.email,
          password: this.password
      }
      this.$store.dispatch('register', user) 
    }
  },

  computed:{
    register(){
        return this.$store.state.register;
    }
  }

};
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

.signup{
  display:flex;
  height:100vh;
  justify-content:center;
  align-items:center;
  text-align:center;
 background:url('https://i.postimg.cc/J4hD59hk/basile-y-KGct-NZp-XGo-unsplash.jpg');
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  flex: column;
}

@media (max-width:325px){
  .signup{
    display:flex;
  justify-content:center;
  align-content:center;
  flex: column;
  }
}

.signup-inner{
  padding:5rem 1rem;
  color:#fff;
  display:block;
  width:75%
}
.btn{
  text-decoration:none;
  color:#fff;
  border:1px solid #eeeeee;
  padding:1rem 3rem;
  display:inline-block;
  margin:2rem 0 0;
  border-radius:50px;
  transition: all 700ms ease-out;
  justify-content: space-between;
}
.btn:hover{
  background:#ccc;
  color:#000;
}
</style>