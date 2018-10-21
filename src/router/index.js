import Vue from 'vue'
import Router from 'vue-router'


//import ShopList from '@/views/shop_list/ShopList'
//import Car from '@/views/car/car'
//import Detail from '@/views/detail/detail'
//import NavSub from '@/components/header/NavSub'

// let ShopList = () => {//按需加载   当你访问他的时候他才加载
//   //webpack会解析这个import
//   return import('@/views/shop_list/ShopList')
// }
// let Car = () => {
//   return import('@/views/car/car')
// }
// let Detail = () => import('@/views/detail/detail')
//分成两组
let ShopList = () => import(/* webpackChunkName: "abc" */ '@/views/shop_list/ShopList')//两个块放一起
let NavSub = () => import(/* webpackChunkName: "abc" */ '@/components/header/NavSub')

let Car = () => import(/* webpackChunkName: "fei" */ '@/views/car/car')
let Detail = () => import(/* webpackChunkName: "fei" */ '@/views/detail/detail')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/shop_list'
    },
    {
      path: '/shop_list',
      name:'ShopList',
      components:{
        nav:NavSub,
        default:ShopList
      }
    },{
      path: '/car',
      name:'Car',
      nav:NavSub,
      components:{
        //nav:NavSub,
        //shuai:Abc,//在router-view中起的name值
        default:Car //固定的默认的

      }
    },{
      path: '/item/:sku_id',
      name:'Item',
      nav:NavSub,
      component:Detail 

    }
  ]
})
