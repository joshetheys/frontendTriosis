<template>
 <div class="container">
  
  
  <div class="signup-form">
    <h2 class="display-2 text-center" style="color: pink;">Login</h2>

    <input type="email" v-model="email" name="email" placeholder="Your Email" required>
    <input type="password" v-model="userpassword" name="password" placeholder="Password" required> 
    <input type="submit" value="Login" @click="login()" >
   
    <p>Don't have an account? <span><a href ="/users/register">Sign Up</a></span></p>
     <!-- <div class="socials">
       <i class="fab fa-facebook-f social-icon"></i>
       <i class="fab fa-google social-icon"></i>
       <i class="fab fa-twitter social-icon"></i>
    </div> -->
  </div>
  
  
</div>

</template>

<script>
export default {
    data(){
      return{
          email: "",
          userpassword: "",
      }
    },
    methods:{
      login(){
        const results = {
            email: this.email,
            userpassword: this.userpassword
        }
      this.$store.dispatch('login', results) 
      }
    },

    computed:{
   user(){
    return this.$store.state.user;
   }
  }
};
</script>

<style>
body{
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


.signup-form{
  text-align: center;
  background-color: white;
  height: 70%;
  width: 70%;
}

h2{
  font-size: 3.5em;
  font-weight: 700;
  margin-bottom: 0;
  letter-spacing: 1px;
}

h4{
  margin:0;
  letter-spacing: 3px;
  font-weight: 300;
  margin-bottom: 40px;
  line-height: 2;
  font-size: 1.2em;
}


.signup-form input{
  display: block;
  margin: 30px auto;
  padding: 1.8em;
  width: 100%;
  max-width: 450px;
  border-radius: 50px;
  color:pink;
  border:1px solid #eeeeee;
  font-size: 1em;
  letter-spacing: 1px;
}


.signup-form input[type="submit"]{
  padding: 25px;
  color: white;
  background-color: pink;
  letter-spacing: 2px;
  width: 70%;
  border:none;
  transition: background ease-in-out 1.5s ;
  transition: color 1s;
}

.signup-form input[type="submit"]:hover{
    background: plum;
  color:#000;
}

p{
  color: #878787;
  font-size: 1em;
  letter-spacing: 1.2px;
}

span{
  color: #4d13ef;
  font-weight: 700;
}

a{
  text-decoration: none;
}

/* .socials{
  padding: 3em;
}

.social-icon{
  border: 1px solid #f0f0f0;
  padding: 1.2em;
  border-radius: 50%;
  height: 20px;
  width: 20px;
}

.social-icon:hover{
  background-color: #e0e0e0;
}

.fab{
    padding: 25px;
} */
</style>