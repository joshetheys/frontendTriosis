<template>
  <div class="cart" v-if="user">
    <div class="offcanvas offcanvas-start offcanvas-show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="userCart" aria-labelledby="offcanvasScrollingLabel" style="padding-top:5em; z-index:4;" >
  <div class="offcanvas-body" >
    <p class="text-white">{{user.fullnames}}'s Cart</p>
    <div v-if="cart" id="cart">
      <div id="card" v-for="product in cart" :key="product" :product="product">
          <img :src="product.imgURL" alt="Cart Item" class="img-fluid">
          <h3>{{product.title}}</h3>
          <h5>R{{product.price}}</h5>
          <!-- <button class="btn" @click="deleteCartItem(product.cart_id)">Remove Product</button>
          <button
                class="noselect"
                @click="deleteCartItem(product.cart_id)"
              >
                <span class="text">Delete</span
                ><span class="icon"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                    ></path>
                  </svg>
                </span>
              </button> -->
      </div>
      <div id="total">
        <h2>R{{total}}</h2>
      </div>
      <!-- <button class="btn" @click="this.$store.dispatch('deleteCart')">Clear Cart</button> -->
      
    </div>
    <div v-else>
        <h3 class="text-white">You have no items in your cart</h3>
    </div>
  </div>
  <div class="offcanvas-footer">
    <button type="button" class="btn" id="clearButton" @click="clear()">Checkout</button>
  </div>
</div>
</div>
</template>

<script>
export default {
  props: ['user'],
    computed:{
      user(){
        return this.$store.state.user
      },
      cart(){
        return this.$store.state.cart
      },
      total(){
        return Math.round((this.$store.state.total + Number.EPSILON)*100)/100
      }

    },
    methods:{
      clear(){
        this.$store.dispatch('deleteCart')
        this.cart = null
      },
      // deleteCartItem(id, list) {
      //       this.$store.dispatch('deleteCartItem', id);
      //       console.log(this.user);
      //   },
        deleteCartItem(id) {
      this.$store.dispatch("deleteCartItem", id);
    },
    }
}
</script>

<style>
.offcanvas{
  background: pink;
}
.btn {
  background-color: plum;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}
</style>


