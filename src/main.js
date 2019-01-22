import Vue from 'vue'
import App from './App.vue'
import 'weui'
<<<<<<< HEAD
import './style/weui.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

new Vue({
=======

Vue.config.productionTip = false

//引入仓库
import store from './configs/store.js'

new Vue({
  store,
>>>>>>> 8c426edb62dc472cf4a3efd949f45ffe842749df
  render: h => h(App),
}).$mount('#app')
