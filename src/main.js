import Vue from 'vue'
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
}).$mount('#app')
