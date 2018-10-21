<template>
    <div class="nav-sub" >
				<div class="nav-sub-wrapper">
					<div class="container">
						<ul class="nav-list">
							<!--点击的时候需要回来加上path:'/shop_list'-->
                            <router-link 
								v-for="item in navConfig" 
								:key="item.id" 
								:to="{path:'/shop_list',query:{id:item.id}}"
								tag="li"
								:class = "{active :currentId==item.id}"
							><a>{{item.title}}</a></router-link>
						</ul>
					</div>
				</div>
			</div>
</template>
<script>
import SmallCar from './smallcar'//应用
	let navConfig = [
		{
			title:'全部商品',
			id: 62
		},
		{
			title:'官方配件',
			id: 60
		},
		{
			title:'品牌周边',
			id: 69

		},
		{
			title:'第三方商品',
			id:61
		}
	]
	export default {
		data(){
			return{
				navConfig,
				currentId : 62 //默认62
			}
		},
		watch:{
		$route:{
			handler(){
				let id = this.$route.query.id;//初始的时候拿一次
		
				this.currentId = id;//等到变化的时候就是谁
			},
			immediate: true//立马执行一次
		}
	}
		
	}
	
	
</script>
