<template lang="html">
   <body id="box">
		<header>
			<div class="logo">
				<img src="http://m.mi.com/component/header/img/logo_e6453b2.png">
			</div>
			<router-link to="/home/search">
				<div class="search_bar">			
					<span class="search_name">搜索商品名称</span>			
				</div>
			</router-link>
			<div class="login">
				<router-link to="/home/login"><div class="text">登录</div></router-link>
			</div>
			<!-- 主页
			<router-link to="/mine">个人中心</router-link> -->
		</header>
		<div class="banner">	
			<!-- Swiper -->
		    <div class="swiper-container ">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" >
		           	 	<img src="http://i8.mifile.cn/v1/a1/d9349f1d-127d-e18a-5020-ca278561b09a.webp?bg=181820">
		            </div>         
		        </div>
		        <!-- Add Pagination -->
		        <div class="swiper-pagination"></div>	        
		    </div>	
		</div>
		<div class="newPaper">
			<div class="img">
				<img src="http://m.mi.com/component/list/img/sczb_ed0a4af.png" alt="">				
			</div>
			<span class="slide">|</span>
			<div class="newPaper_tit">
					5000万人帮你选
			</div>
		</div>
		<div class="newPro">
			<div class="miNote">
				<img src="http://i8.mifile.cn/v1/a1/08fcdca8-35ae-e743-00c7-4b7ced1251fe.webp" alt="">
				<div class="miNote_r">
					<img src="http://i8.mifile.cn/v1/a1/a3f8f6f4-5c2a-9654-9978-d4ee00287630.webp" alt="">
					<img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/06071f1b334780735c58f33abe22b1c5.jpg" alt="">
				</div>
			</div>
			<div class="miMix">
				<img src="http://i8.mifile.cn/v1/a1/842a7ca9-fc5e-5d6b-4560-9236ede554a6.webp" alt="">
			</div>
		</div>
		
	</body>

</template>

<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data(){
			return {
			  address:"黄平路",
			  itemData:[]
			}
		},
		mounted(){
			console.log(this)
		  this.$http.get("http://h5.yztctech.net/api/axf/apihome.php").then(function(res){
		  	console.log(res.body.data)
	
		  })
		  
		}
	}
</script>
<style>
img{
	display: block;
}
header{
	width: 100%;
	height: 3.5rem;
	text-align: center;
	box-sizing: border-box;
	padding:1rem 0;
	background: rgb(229, 131, 53);	
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	z-index: 500;
}
.logo img{
	width: 2.2rem;
	height: 1.4rem;
}
.search_bar{
	width: 25rem;
	height: 2.2rem;
	border-radius: .3rem;
	background: url(http://m.mi.com/component/header/img/search_bfba941.png) no-repeat;
	background-size: 100% 100%;
	display: flex;
	align-items: center;
	justify-content:flex-start;
}
.text{
	color:#fff;
	font-size: 1.5rem;
}
.search_name{
	color:rgba(0,0,0,.3);
	font-size: 1.2rem;
	margin-left: 2.5rem;
}
/*轮播图*/
.banner{
	width: 100%;
}
.banner img{
	width: 100%;
}
/*早报*/
.newPaper{
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: .5rem solid #f5f5f5;
}
.img{
	width: 8rem;	
}
.img img{
	width: 7rem;
	margin-top: .5rem
}
.slide{
	width: 1px;
	color: #b2b2b2;
}
.newPaper_tit{
	margin-left: 1rem;
	font-size: 1.5rem;
}
.newPro{
	width: 100%;
	height: 40rem;
}
.miNote{
	height: 70%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: .5rem;
}
.miNote>img{
	width: 49.5%;
}
.miNote_r{
	width: 49.5%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.miNote_r img{
	width: 100%;
	height: 49.5%;
}
.miMix img{
	width: 100%;
	height: 30%;
}
</style>