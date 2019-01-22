import Vue from 'vue'
import App from './App.vue'
import 'weui'

Vue.config.productionTip = false

//引入仓库
import store from './configs/store.js'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
