import Vue from 'vue'
Vue.config.productionTip = false

//引入axios并挂在Vue的原型链上
import axios from 'axios'
Vue.prototype.$axios = axios

//引入weui
import 'weui'
import './style/weui.css'

//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//引入仓库
import store from './configs/store.js'

//引入路由
import router from './configs/router.js'

new Vue({
  router,
  store,
  render: h => h('router-view')
}).$mount('#app')
