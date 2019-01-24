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
//一层路由->全作品
import Zworks from '../works/Zworks.vue'

//二层路由
import Car from '../pages/Car.vue'
import Home from '../pages/Home.vue'
import My from '../pages/My.vue'
//二层路由->全作品
import ZworksSofa from '../works/ZworksSofa.vue'//沙发
import Zworksbed from '../works/Zworksbed.vue'//床具
import ZworksChest from '../works/ZworksChest.vue'//柜架
import ZworksStool from '../works/ZworksStool.vue'//椅凳
import ZworksTable from '../works/ZworksTable.vue'//桌几
import ZworksLamp from '../works/ZworksLamp.vue'//灯具
import ZworksMendale from '../works/ZworksMendale.vue'//家纺
import ZworksCutlery from '../works/ZworksCutlery.vue'//餐具
import ZworksDecorate from '../works/ZworksDecorate.vue'//装饰
import ZworksSerise from '../works/ZworksSerise.vue'//系列
import ZworksCosmo from '../works/ZworksCosmo.vue'//COSOM
import ZworksGift from '../works/ZworksGift.vue'//礼品
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
               //全作品路由
            {path: 'Zworks', name: 'Zworks', component: Zworks,
                children: [
                    { path: 'ZworksSofa/:id', name: 'ZworksSofa', component: ZworksSofa},//沙发
                    { path: 'Zworksbed/:id', name: 'Zworksbed', component: Zworksbed},//床具
                    { path: 'ZworksChest/:id', name: 'ZworksChest', component: ZworksChest},//柜架
                    { path: 'ZworksStool/:id', name: 'ZworksStool', component: ZworksStool},//椅凳
                    { path: 'ZworksTable/:id', name: 'ZworksTable', component: ZworksTable},//桌几
                    { path: 'ZworksLamp/:id', name: 'ZworksLamp', component: ZworksLamp},//灯具
                    { path: 'ZworksMendale/:id', name: 'ZworksMendale', component: ZworksMendale},//家纺
                    { path: 'ZworksCutlery/:id', name: 'ZworksCutlery', component: ZworksCutlery},//餐具
                    { path: 'ZworksDecorate/:id', name: 'ZworksDecorate', component: ZworksDecorate},//装饰
                    { path: 'ZworksSerise/:id', name: 'ZworksSerise', component: ZworksSerise},//系列
                    { path: 'ZworksCosmo/:id', name: 'ZworksCosmo', component: ZworksCosmo},//COSOM
                    { path: 'ZworksGift/:id', name: 'ZworksGift', component: ZworksGift},//礼品
                ]
            },
        ]
    },
 
  
    //路由重定向
    { path: '/', redirect: { name: 'home' } },
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