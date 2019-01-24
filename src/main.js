import Vue from 'vue'
<<<<<<< HEAD
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
=======
import 'weui'
import './style/weui.css'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

//引入仓库
import store from './configs/store.js'
//引入路由
import router from './configs/router.js'

new Vue({
  router,
  store,
  render: h => h('router-view')
>>>>>>> f615b55989dd91945cbccde824ef340648f9220d
}).$mount('#app')
