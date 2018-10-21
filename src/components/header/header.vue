<template>
    <div id="header">
			<div class="nav-global">
				<div class="container">
					<h1 class="nav-logo">
						<a href="javascript:;"></a>
					</h1>
					<small-car></small-car>
					<ul class="nav-list">
						<li><a href="http://miaov.com/">首页</a></li>
						<li><a href="http://miaov.com/index.php/Course/courseList">课程</a></li>
						<li><a href="http://2017.miaov.com/study">视频学习</a></li>
						<li><a href="http://2017.miaov.com/study/remote/index">尊享视频</a></li>
						<li><a href="http://2017.miaov.com/bbs">社区</a></li>
						<li><a href="http://www.miaov.com/index.php/example/exampleList">学员作品</a></li>
						<li><router-link to="/shop_list">在线商城</router-link></li>
					</ul>
				</div>
			</div>
			<router-view name="nav"></router-view>
		</div>
</template>
<script>
import SmallCar from './smallcar'//应用
	
	export default {
		components : {SmallCar},//注册
		
	}
	
	
</script>

<style src="./header.css"></style>