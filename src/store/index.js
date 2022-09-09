import router from '@/router'
import { createStore } from 'vuex'
import { toRaw } from 'vue'
import swal from 'sweetalert';

export default createStore({
  state: {
    products: null,
    product: null,
    user: null || JSON.parse(localStorage.getItem("user")),
    token: null || localStorage.getItem("token"),
    admin: false,
    cart: null,
    users: null,
    total: 0
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    setUser(state, user){
      state.user = user
    },
    setProduct(state, product){
      state.product = product
    },
    setToken(state, token){
      state.token = token
    },
    setUserCart(state, cart){
      state.cart = cart
    },
    setUsers(state, users){
      state.users = users
    },
    setTotal(state, total){
      state.total =total
    },
    setLogout(state){
      state.user = "",
      state.token = ""
    }
  },
  actions: {
    async getProducts(context){
      let fetched = await fetch('https://triosis-eccomerce.herokuapp.com/products');
      let res = await fetched.json();
      context.commit('setProducts', res.products)
    },

  async getUsers(context){
    let fetched = await fetch ('https://triosis-eccomerce.herokuapp.com/users');
    let res = await fetched.json();
    context.commit('setUsers', res.users)
  },

  async getProduct(context, id){
    console.log(id)
    let fetched = await fetch('https://triosis-eccomerce.herokuapp.com/products/' + id);
    let res = await fetched.json();
    context.commit('setProduct', res.results)
  },

  async editProduct(context,payload){
    fetch('https://triosis-eccomerce.herokuapp.com/products/'+payload.productId, {
        method:'PUT',
        body: JSON.stringify(payload),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((res)=> res.json())
    .then((data)=> context.dispatch('getProducts'));
},

async addProduct(context,payload){
  const {title, category, type, description, size, imgURL, quantity, price, createdBy} = payload
  fetch('https://triosis-eccomerce.herokuapp.com/products/', {
      method:'POST',
      body: JSON.stringify({
        title: title, 
        category: category, 
        type: type, 
        description: description,
        size: size, 
        imgURL: imgURL, 
        quantity: quantity, 
        price: price, 
        createdBy: createdBy
      }),
      headers:{
          'Content-type': 'application/json; charset=UTF-8'
      }
  })
  .then((res)=> res.json())
  .then((data)=> 
  context.dispatch('getProducts'),
  swal("Good job!", "You added a new product!", "success"),
  router.push('/products/admin'), 5000);
},

async deleteProduct(context,productId){
    fetch('https://triosis-eccomerce.herokuapp.com/products/'+ productId, {
        method:'DELETE'
    })
    .then((res)=> res.json())
    .then((data)=> 
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("The product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your product is safe!");
      }
    }),
    context.dispatch('getProducts'))
},

  register(context, payload){
    const {fullnames, email, userpassword} = payload
    fetch('https://triosis-eccomerce.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify({
        fullnames: fullnames,
        email: email,
        userpassword: userpassword,
       
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.msg == "The provided email exists. Please enter another one") {
        alert("The provided email exists. Please enter another one");
      } else {
        console.log(data.token)
        swal("Registration Successful",  "success");
        context.commit('setToken',data.token);
        setTimeout(()=>{
          router.push('/users/login'), 5000
        })
      }

    });

  },

  addUser(context, payload){
    const {fullnames, email, userpassword} = payload
    fetch('https://triosis-eccomerce.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify({
        fullnames: fullnames,
        email: email,
        userpassword: userpassword,
       
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.msg == "The provided email exists. Please enter another one") {
        alert("The provided email exists. Please enter another one");
      } else {
        console.log(data.token)
        swal("You added a User Successfully",  "success");
        context.commit('setToken',data.token);
        setTimeout(()=>{
          router.push('/users/admin'), 5000
        })
      }

    });

  },

  login(context, payload){
    const { email, userpassword } = payload
    fetch('https://triosis-eccomerce.herokuapp.com/users', {
    method: 'PATCH',
    body: JSON.stringify({
        email: email,
        userpassword: userpassword,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.msg == 'Email Not Found. Please register') {
        alert(data.msg)
      } else {
        if (data.msg == 'Password is Incorrect') {
          alert(data.msg)
        } else {
          console.log(data.token)
          swal("Login Successful", `Welcome, ${data.results[0].fullnames}`,  "success");
          context.commit('setUser',data.results[0])
          context.commit('setToken',data.token)
          context.dispatch('getUserCart')
          context.dispatch('setAdmin')
          setTimeout(()=>{
            router.push('/products'), 5000
          }) 
        }
      }

    });

  },

  setAdmin(context) {
    if (context.state.user != null) {
      if (context.state.user.userRole === "admin") {
        context.state.admin = true;
      }
      
    }
  },

//   async editUser(context, id){
//     fetch('https://triosis-eccomerce.herokuapp.com/users/'+ id, {
//         method:'PUT',
//         body: JSON.stringify({
//           fullnames: fullnames,
//           email: email,
//         userpassword: userpassword,

//         }
//         ),
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//     })
//     .then((res)=> res.json())
//     .then((data)=> context.dispatch('getUsers'));
// },
async editUser(context,payload){
  // const {fullnames, email} = payload;
  fetch('https://triosis-eccomerce.herokuapp.com/users/'+ payload.id, {
      method:'PUT',
      body: JSON.stringify(payload),
      headers:{
          'Content-type': 'application/json; charset=UTF-8'
      }
  })
  .then((res)=> res.json())
  .then((data)=> context.dispatch('getUsers'));
},

async deleteUser(context,id){
  fetch('https://triosis-eccomerce.herokuapp.com/users/'+ id, {
      method:'DELETE'
  })
  .then((res)=> res.json())
  .then((data)=> context.dispatch('getUsers'))
},
  async getUserCart(context){
    let fetched = await fetch('https://triosis-eccomerce.herokuapp.com/users/' + context.state.user.id + '/cart');
    let res = await fetched.json();
    context.commit('setUserCart', res.cart)
    if (res.cart != null)
    context.dispatch('getTotalCart')
  },

  addCart(context, payload){
    const {productId, title, category, type, description, size, imgURL, price, createdBy} = payload
    fetch('https://triosis-eccomerce.herokuapp.com/users/' + context.state.user.id + '/cart', {
    method: 'POST',
    body: JSON.stringify({
      productId: productId,
          title: title,
          category: category,
          type: type,
          description: description,
          size: size,
          imgURL: imgURL,
          price: price,
        createdBy: createdBy
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.results == 'There is no user with that id') {
          alert(data.results)
        } else {
          swal({
            title: "Great!",
            text: "You added the product to the cart!",
            icon: "success",
            button: "Press Me",
          });
          context.dispatch('getUserCart')
        }
  })
}, 
getTotalCart(context){
  let total = 0;
  toRaw(JSON.parse(context.state.user.cart)).forEach(product => {
    total = total + product.price
  });
  context.commit('setTotal', total)
},

deleteCart(context){
  fetch('https://triosis-eccomerce.herokuapp.com/users/' + context.state.user.id + '/cart', {
  method: 'DELETE'
  })
  .then((res) => res.json())
  .then((data) =>{
    if (data.result == 'There is no user with that ID') {
      alert(data.result)
    } else {
      swal("Your Order Is On the Way", 'The purchase of ' + context.state.user.fullnames + ' was successful', "success"); ``
      context.dispatch('getUserCart')
    }
  })
}, 
// deleteCartItem: async (context, id) => {
//   let user = context.state.user.id
//   await fetch(
//     'https://triosis-eccomerce.herokuapp.com/users/' + context.state.user.id + '/cart/' + id, {
//         method: "DELETE",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8"
//         },
//       }
//     )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       context.dispatch("getUserCart", user);
//     });
// },
deleteCartItem: async (context, id) => {
  fetch('https://triosis-eccomerce.herokuapp.com/users/' + context.state.user.id + '/cart/' + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      context.dispatch('getUserCart', context.state.user.id,
        swal({
          icon: "success",
          buttons: false,
          timer: 1000,
        }))
    });
},
async getProductCategory(context, category) {
  fetch('https://triosis-eccomerce.herokuapp.com/productsCategory/' + category)
    .then((res) => res.json())
    
    .then((data) =>
     context.commit('setProducts', data.results))
},
async getProductType(context, type) {
  fetch('https://triosis-eccomerce.herokuapp.com/productsType/' + type)
    .then((res) => res.json())
    
    .then((data) =>
     context.commit('setProducts', data.results))
},
  },
  modules: {
  }
})
