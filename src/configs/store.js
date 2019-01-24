import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        nav_show: false,
        ip:'http://39.105.178.245:3000/users'
    },

    //获取数据方法
    getters: {
        get_nav_show: (state) => {
            return state.nav_show
        }
    },

    //修改数据
    mutations: {
        upd_nav_show(state, data) {
            state.nav_show = data
        }
    }
})

export default store

