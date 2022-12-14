import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/products/:id',
    name: 'singleproducts',
    component: () => import(/* webpackChunkName: "singleproducts" */ '../views/SingleProduct.vue'),
    props: true
  }, 
  {
    path: '/productsCategory/:category',
    name: 'productcategory',
    component: () => import(/* webpackChunkName: "productcatergory" */ '../views/ProductCategory.vue'),
    // props: true
  }, 
  {
    path: '/productsType/:type',
    name: 'producttype',
    component: () => import(/* webpackChunkName: "producttype" */ '../views/Type.vue'),
    // props: true
  }, 
  {
    path: '/adduser',
    name: 'adduser',
    component: () => import(/* webpackChunkName: "adduser" */ '../views/AddUser.vue')
  }, 
  {
    path: '/users/register',
    name: 'signup',
    component: () => import(/* webpackChunkName: "sign up" */ '../views/SignUp.vue')
  },
  {
    path: '/users/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/products/admin',
    name: 'productsadmin',
    component: () => import(/* webpackChunkName: "products admin" */ '../views/ProductsAdmin.vue')
  },
  {
    path: '/products/add',
    name: 'productsadd',
    component: () => import(/* webpackChunkName: "products add" */ '../views/AddProduct.vue')
  },
  {
    path: '/users/admin',
    name: 'usersadmin',
    component: () => import(/* webpackChunkName: "users admin" */ '../views/UserAdmin.vue')
  },
  {
    path: '/users/profile',
    name: 'usersprofile',
    component: () => import(/* webpackChunkName: "users admin" */ '../views/UserProfile.vue')
  },
  {
    path: '/users/cart',
    name: 'userscart',
    component: () => import(/* webpackChunkName: "users cart" */ '../components/Cart.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "users admin" */ '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
 