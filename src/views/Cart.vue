<template>
  <div id="page">
      <div v-if="user">
          <div class="container-fluid">
              <div class="row">
                  <div class="col">
                      <h1>{{ user.firstname }}'s Cart</h1>
                  </div>
                  <div class="col"><button type="button" @click="clear()">Delete All</button></div>
              </div>
              <div class="row" v-for="product in cart" :key="product" :product="product">
                  <div class="col">
                      <h1>{{ product.title }}</h1>
                  </div>
                  <div class="col"><button type="button" @click="deleteSingle()">Delete Item</button></div>
              </div>
          </div>
      </div>
      <div v-else>
          <div class="container-fluid">
              <div class="row heading">
                  <h1>Your Cart</h1>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
      user() {
          return this.$store.state.user
      },
      cart() {
          return this.$store.state.cart
      },
      total(){
        return Math.round((this.$store.state.total + Number.EPSILON)*100)/100
      }
  },
  methods: {
      clear() {
          this.$store.dispatch('deleteCart')
          this.cart = null
      },
      deleteSingle() {
          this.$store.dispatch('deleteSingleCart')
      }
  }
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#page {
  background-color: pink;
  width: 100%;
  height: 93vh;
  font-family: Rockwell;
  color: black;
}

.heading {
  text-align: center;
  text-decoration: underline;
}
</style>