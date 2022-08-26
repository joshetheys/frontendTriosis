<template>
  <div class="home">
    <div class="banner">
        <div class="navbar">
            <ul>
<!--                 <li><a href="#">Home</a></li> -->
                <li><a href="admin.html">Admin Page</a></li>
<!--                 <li><a href="#">Contact</a></li>
                <li><a href="#">About Us</a></li> -->
            </ul>
        </div>

        <div class="content">
            <h1>Triosis</h1>
            <h2>Welcome to the World of Everything Cute</h2>
            <p>Looking for a piece to commemorate your bias? Something to Show what fandom you belong to? Look no further than Triosis!</p>
        </div>
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
