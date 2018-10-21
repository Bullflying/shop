<template>
    <div class="cart-items">
											<div class="items-choose">
												<span class="blue-checkbox-new checkbox-on"><a></a></span>
											</div>
											<div class="items-thumb">
												<img :src="option.ali_image">
												<a href="javascript:;" target="_blank"></a>
											</div>
											<div class="name hide-row" >
												<div class="name-table">
													<a href="javascript:;" target="_blank">
														{{option.title}}
													</a>
													<ul class="attribute">
														<li>透明</li>
														<li>透明</li>
													</ul>
												</div>
											</div>
											<div class="operation">
												<a class="items-delete-btn" ></a>
											</div>
											<div class="subtotal">¥ 49.00</div>
											<div class="item-cols-num">
												<div class="select js-select-quantity">
													<span class="down down-disabled">-</span>
													<span class="num">1</span>
													<span class="up up-disabled">+</span>
													
												</div>
											</div>
											<div class="price">¥ 49.00</div>
										</div>
</template>
<script>
export default {
    props:{
        option:Object
    }
}
</script>
