<template>
    <div class="store-content item">
				<div class="item-box">
					<!--左侧轮播-->
					<div class="gallery-wrapper">
						<div class="gallery">
							<div class="thumbnail">
								<ul>
									<li :class="{on:currentIndex === index}"
									v-for="(item,index) in images"
									:key="index"
									@mouseover="currentIndex = index"
									><img style="width:100%" :src="item+'?x-oss-process=image/resize,w_80/format,webp'"></li>
								</ul>
							</div>
							<div class="thumb">
								<ul>
									<li class="on"><img :src="currentImage+'?x-oss-process=image/resize,w_527/format,webp'"></li>
								</ul>
							</div>
						</div>
					</div>
					<!--右侧信息-->
					<div class="banner">
						<div class="sku-custom-title">
							<div class="params-price">
								<span><em>¥</em><i>199</i></span>
							</div>
							<div class="params-info">
								<h4>{{shopInfo.shop_info.title}}</h4>
								<h6>{{shopInfo.shop_info.sub_title}}</h6>
							</div>
						</div>
						<div class="sku-dynamic-params-panel">
							<div class="sku-dynamic-params clear">
								<span class="params-name">颜色</span>
								<ul class="params-colors">
									<li class="cur">
										<span>
											<img src="http://img01.smartisanos.cn/attr/v2/1000299/B37F37544921114CEF1EC01ED4DF44E4/20X20.jpg">
										</span>
									</li>
								</ul>
							</div>
							<div class="sku-dynamic-params clear">
								<div class="params-name">数量</div>
								<div class="params-detail clear">
									<div class="item-num js-select-quantity">
										<span class="down down-disabled">-</span>
										<span class="num">1</span>
										<span class="up up-disabled">+</span>
									</div>
								</div>
							</div>
						</div>
						<div class="sku-status">
							<div class="cart-operation-wrapper clearfix">
								<span class="blue-title-btn js-add-cart">加入购物车</span>
								<span class="gray-title-btn">现在购买</span>
							</div>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
export default {
	data(){
		return{
			shopInfo:{//第一次给的值是空的
				shop_info:{}//先规划一下假的
			},
			currentIndex:0
		}
	},
	computed:{
		images(){
			return this.shopInfo.shop_info.ali_images
		},
		currentImage(){
			return this.images && this.images[this.currentIndex]//先判断有没有，有就加载
		}
	},
	async created(){
		let sku_id = this.$route.params.sku_id;
		if(sku_id){
			let {data} = await this.$api.getShopSkus({ids:sku_id})
			//console.log(data);
			
			this.shopInfo = data.data.list[0];
		}
	}
}
</script>



<style>
@import url('./item.css');
</style>
