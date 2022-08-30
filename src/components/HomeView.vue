<template>
 
  
  <div class="landing-page">
      <div class="landing-text-inner">
      <h1>Triosis</h1>
      <h3 class= "sub-title"> Welcome to the World of Everything Cute</h3>
      <a class='btn me-3' href="/users/register">Sign Up</a>
      <a class='btn' href="/users/login"> Login </a>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
body{
  margin: 0;
  background:#eee;
  height:auto;
}
h1 {
  font-weight: 400;
  font-size: 2.5rem;
  text-transform: uppercase;
  margin: 0;
}

h3 {
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin: 0;
}

main{
  max-width:900px;

  margin:0 auto;
  
}

.landing-page{
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
  .landing-page{
    display:flex;
  justify-content:center;
  align-content:center;
  flex: column;
  }
}

.landing-text-inner{
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
</style>>



