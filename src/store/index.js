import Vue from 'vue'
import Vuex from 'vuex'
import { getShopSkus } from '../server/api';
//import { getShopSkus } from '@server/api'

Vue.use(Vuex);
let shopCarListLocalStorage = JSON.parse(localStorage.getItem('fei-shop'))||{};//没有数据返回空对象
let shopCarListStorage = shopCarListLocalStorage.shopCarList|| []  ;
//[{sku_id,buyNumber}]
let store = new Vuex.Store({
    state:{
        shopCarList:[] //以后数组里面会存储每个对象[{}{}{}]

    },
    getters:{
        //统计总数和总钱数
        total(state){
            return state.shopCarList.reduce((item1,item2)=>{//拿到item1和item2
                return {
                    totalMoney:item1.totalMoney+item2.price*item2.buyNumber,//单价成个数
                    totalBuyNumber:item1.totalBuyNumber+item2.buyNumber,
                }
            },{
                totalMoney:0,//单价
                totalBuyNumber:0//个数
            })
        }
    },
    mutations:{//存储 add添加
        addShopCarList(state,payload){//接收{shop:{}}商品信息存入vuex

            let item = state.shopCarList.find((item)=>item.sku_id===payload.shop.sku_id)
            if(item){
                ++item.buyNumber;//存在就+1
            }else{
                //  payload.shop.buyNumber = 1;//购买数量为1 payload是动态的 buyNumber不是动态的不可以放一起
                //变成响应的
                Vue.set(payload.shop,'buyNumber',1)//加的动态属性vue.set
                state.shopCarList.push(payload.shop);//item不存在就push  shopCarList追加
             }
        },
        replaceShopList(state,playload){//{list：[]}
            state.shopCarList = playload.list;//shopCarList直接替换掉
        }
    },
    actions:{//更新拿数据ids
        getShopCarListInfoAction(store,playload){
           return  getShopSkus(playload).then(({data})=>{
              // console.log('action中拿数据',data)

                let list = data.data.list.map((item)=>{//数据处理
                    //后端给的数据中没有buyNumber，所有要根据后端给的数据从localStorage中找到数据
                    //拿到buyNumber
                  // console.log(shopCarListStorage)
                    let option = shopCarListStorage.find(abc =>abc.sku_id==item.id);
                    //console.log(123,option)
                   return {
                       ...item.shop_info,//扩展
                       sku_id:item.id,
                       price:item.price,
                       buyNumber: option.buyNumber//如果拿到了吧option给他
                   }
               })
               //console.log(list)
               store.commit('replaceShopList',{
                    list:list
               })
           });
        }
    }
})
store.watch((state)=>{
    return {
        //那条数据
        shopCarList:state.shopCarList
    }
},(newValue)=>{
    //把值存在localStorage中
    localStorage.setItem('fei-shop',JSON.stringify(newValue))
    
},{
    deep:true
});
export default store;