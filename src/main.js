import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'
import { Swipe, SwipeItem } from 'mint-ui';


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(VueResource)
// import svgImage from './components/svg/svg_image.vue'
// Vue.component('svgImage', svgImage)

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
