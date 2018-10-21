<template>
    <div class="item">
		<div class="item-img">
			<img :alt="showData.title" :src="showData.ali_image"  v-lazy="showData.ali_image"><!--要么走懒加载要么走src-->
		</div>
		<h6>{{showData.title}}</h6>
		<h3>{{showData.sub_title}}</h3><!---->
		<div class="params-colors">
		    <ul class="colors-list">
				<li v-for="(item,index) in images" :key = "index"
					 @mouseover="currentIndex=index"><!--指向那个渲染那个-->
					<span :class="{active :index ===currentIndex}"><!--判断下标，相同渲染第几个-->
						<img :src="item">
					</span>
				</li>
			</ul>
		</div>
		<div class="item-btns clearfix">
			<span class="item-gray-btn">
				<router-link :to="{name:'Item',params:{sku_id:showData.sku_id}}">查看详情</router-link>
			</span>
		<span class="item-blue-btn" @click="addCar">加入购物车 </span>
		</div>
		<div class="item-price clearfix">
			<i>¥</i><span>199.00</span>
		</div>
		<div class="discount-icon">false</div>
		<div class="item-cover">
			<a href="javascript:;" target="_blank"></a>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			
			currentIndex: 0//默认第零个
		}
	},
	props:{
		option:{
			type:Object,
			default(){return{}}//不给我的话报一个空数组 
		}
	},
	computed:{
		showData(){//拿到对应的id
			//默认拿第零个
			return this.option.sku_list[this.currentIndex]
		},
		//计算属性
		images(){
			return this.option.sku_list.map((item)=>{
				return item.image//找image
			})
		},
		ids(){
			return this.option.sku_list.map((item)=>{
				return item.sku_id//拿到商品的id
			})
		}
		
	},
	methods:{//computed和methods作用域不能包含作用域
			addCar(){
				//提交到vuex中
				this.$store.commit('addShopCarList',{
					shop:this.showData//拿到数据
				})
			}
		}
}
</script>
