import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home.vue'
// import first from '../pages/home/first/first.vue'
import sort from '../pages/sort/sort.vue'
import brand from '../pages/sort/brand.vue'
import cart from '../pages/cart/cart.vue'
import login from '../pages/login/login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/sort',
      component: sort
    },
    {
      path: '/brand',
      component: brand
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/login',
      component: login
    }
  ]
})
