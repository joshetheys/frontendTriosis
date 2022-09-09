<template>
   
  <div class="container" >
  
  
  <div class="signup-form">
    <h2 class="display-2 text-center" style="color: pink;">Add New Product</h2>
    <input type="text" v-model="title" name="title" placeholder="Product Title" required>
    <input type="text" v-model="category" name="category" placeholder="Product Category" required>
    <input type="text" v-model="type" name="type" placeholder="Product Type" required>
    <input type="text" v-model="description" name="description" placeholder="Product Description" required>
    <input type="text" v-model="size" name="size" placeholder="Product Size" required>
    <input type="text" v-model="imgURL" name="imgURL" placeholder="Product Image URL" required> 
    <input type="text" v-model="quantity" name="quantity" placeholder="Product Quantity" required>
    <input type="text" v-model="price" name="price" placeholder="Product Price" required> 
    <input type="text" v-model="createdBy" name="createdBy" placeholder="User ID" required> 
    <input type="submit" value="Add"  @click="addProduct()" >
   
    <p><span><a href ="/products/admin">Admin Page</a></span></p>
  
  </div>
  
  
</div>

</template>

<script>
export default {
  data(){
    return{
      title: '', 
      category: '', 
      type: '', 
      description: '',
      size: '', 
      imgURL: '', 
      quantity: '', 
      price: '', 
      createdBy: ''
    }
  },
  methods:{
    addProduct(){
      const results = {
        title: this.title, 
        category: this.category, 
        type: this.type, 
        description: this.description,
        size: this.size, 
        imgURL: this.imgURL, 
        quantity: this.quantity, 
        price: this.price, 
        createdBy: this.createdBy
      }
      this.$store.dispatch('addProduct', results) 
    }
    
  },

  computed:{
    product(){
    return this.$store.state.product;
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

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

body{
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
.container {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


.signup-form{
  text-align: center;
  background-color: white;
  height: 100v;
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

</style>