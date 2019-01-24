import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue'
import Home from '../pages/Home.vue'
import Details from '../pages/Details.vue'
import Login from '../components/Zloginbody.vue'



const routes = [
    {
        path:'/app',
        name:'app',
        component:App,
        children:[
            {
                path:'/home',
                name:'home',
                component:Home
            }
        ]
    }, 
    {
        path: '/details',
        name: 'details',
        component: Details
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path: '/',
        redirect: {
            name: 'home'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router