import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'

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
    path: '/users/register',
    name: 'signin',
    component: () => import(/* webpackChunkName: "sign in" */ '../views/SignIn.vue')
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
    path: '/users/admin',
    name: 'usersadmin',
    component: () => import(/* webpackChunkName: "users admin" */ '../views/UserAdmin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
 