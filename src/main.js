import Vue from 'vue'
// import App from './App.vue'
import 'weui'
import './style/weui.css'

import router from './configs/router.js'

import store from './configs/store.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import axios from 'axios'
Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h('router-view'),
}).$mount('#app')
