import Vue from 'vue'
<<<<<<< HEAD
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

=======
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)

//一层路由
import App from '../App.vue'
import Register from '../pages/Register.vue'

//二层路由
import Car from '../pages/Car.vue'
import Home from '../pages/Home.vue'
import My from '../pages/My.vue'


//二层路由
const routes = [
    { path: '/register', name: 'register', component: Register },

    {
        path: '/app', name: 'app', component: App,
        children: [
            { path: 'home', name: 'home', component: Home },//主页路由

            {  
                path: 'my', name: 'my', component: My, beforeEnter: (to, from, next) => {
                    let token = localStorage.getItem('token');
                    if(token != null || to.path == '/register'){
                        next()
                    }else{
                        router.push({name: 'register'});
                    }
                }
            },
            { path: 'car', name: 'car', component: Car },//购物车路由
        ]
    },

    //路由重定向
    { path: '/', redirect: { name: 'home' } }
]


//实例该路由
>>>>>>> f615b55989dd91945cbccde824ef340648f9220d
const router = new VueRouter({
    routes
})

<<<<<<< HEAD
=======
// 路由守卫
// router.beforeEach((to, from, next) => {
//     let token = localStorage.getItem('token');
//     if(token != null || to.path == '/app/register'){
//         next();
//     }else{
//         router.push({
//             name: 'register'
//         })
//     }
// })

>>>>>>> f615b55989dd91945cbccde824ef340648f9220d
export default router