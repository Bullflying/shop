import axios from 'axios'

let instace = axios.create({
    //及路径，替换时只需要替换一个地方
    baseURL:'http://localhost:5001/api'
});
export function getShopList(params){//拿这个商品列表
    let defaults = {//前端默认值
        page_size:20,
        page:1,
        id: 62,
        sort:"sort"
    }
    Object.assign(defaults,params)
    return instace.get('/shop_list',{params :defaults})
}
//拿到商品的详细信息
export function getShopSkus(params){
    let defaults = {//前端默认值
        ids:''//指定id的详细信息
    }
    Object.assign(defaults,params)
    return instace.get('/shop_skus',{params :defaults})
}


//作为vue插件导入出去
export default{
    install(Vue){
        Vue.prototype.$api = {
            getShopList,
            getShopSkus
        }
    }
}