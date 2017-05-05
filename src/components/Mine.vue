<template lang="html">
     <div class="page">


		<header>
		    <img src="../assets/default.png">
		    <span>
		        <a href="#">注册/登录</a>
		    </span>
		</header>
		<div class="myindent">
		    <ul>
		        <li class="mine">
		        	<p>我的订单</p>
		        </li>
		        <li class="all">
		            <p>全部订单</p>
		            <img src="../assets/right.jpg">
		        </li>
		    </ul>
		</div>
		<div class="nav">
		    <ul>
		        <li>
	                <img src="../assets/nav-1_f74ca94.png">
	                <span>待付款</span>
		        </li>
		        <li>
	                <img src="../assets/nav-1_f74ca94.png">
	                <span>待收货</span>
		        </li>
		        <li>
	                <img src="../assets/nav-4_42676a4.png">
	                <span>退换修</span>
		        </li>
		    </ul>
		</div>
		<div class="items">
		    <ul>
		        <li>
		        	<a href="#">
		           		 <img src="../assets/i-wallet_13a8fda.png">
		           	</a>
		            <span>我的优惠</span>
		        </li>
		        <li>
		            <a href="#">
		                <img src="../assets/right.jpg">
		            </a>
		        </li>
		    </ul>
		    <ul>
		        <li>
		        <a href="#">
		        	<img src="../assets/i-service_7b9f412.png">
		        </a>
		        <span>服务中心</span>
		    	</li>
		        <li>
		            <a href="#">
		                <img src="../assets/right.jpg">
		            </a>
		        </li>
		    </ul>
		    <ul>
		        <li>
		        	<a href="#">
		            	<img src="../assets/i-mihome_c836072.png">
		            </a>
		            <span>小米之家</span>
		        </li>
		        <li>
		            <a href="#">
		                <img src="../assets/right.jpg">
		            </a>
		        </li>
		    </ul>
		    <ul>
		        <li>
		        	<a href="#">
		            	<img src="../assets/i-setting_4ddebe5.png">
		            </a>
		            <span>设置</span>
		        </li>
		        <li>
		            <a href="#">
		                <img src="../assets/right.jpg">
		            </a>
		        </li>
		    </ul>
		</div>
    </div>
</template>
<script>
export default{
	
}
</script>
<style>
	*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	}
	html{
	    font-size: 10px;
	}
	a{
	    text-decoration: none;
	}
	ul,li{
	    list-style: none;
	}
	img{
	    border: none;
	}
	header{
	     background: url(../assets/bg_0425a88.png) center 0 #f37d0f;
	    background-size: auto 100%;
	    padding: .32rem 0;
	    width: 100%;
	    height: 8rem;
	}
	header img{
	    width: 4.5rem;
	    height: 4.5rem;
	    margin-top: 1.8rem;
	    margin-left: 1.8rem;
	    float: left;
	}
	header span{
	    width: 5.5rem;
	    height: 1.6rem;
	    margin-top: 3.9rem;
	    float: left;
	    margin-left: .9rem;
	}
	header span a{
	    color: white;
	    font-size: 1.2rem;
	}
	.page{
	    width: 100%;
	    height: 71.9rem;
	    background: #F5F5F5;
	}
	.myindent{
	    height: 4.2rem;
	    width: 100%;
	    background: white;
	}
	.myindent ul{
	    display: flex;
	    justify-content: space-between;
	}
	.myindent ul li{
		display: flex;
		align-items: center;
		justify-content : center;
		height:4rem;
	} 
	.myindent ul .mine{
		margin-left:2rem;
		font-size:1.6rem;
	}
	.myindent ul .all{
		margin-right:1.8rem;
	}
	.myindent ul .all img{
		margin:0 .5rem;
		width:1rem;
		height:1.7rem;
	}
	.nav{
	    width: 100%;
	    background: white;
	    border-top: 1px solid #d8d8d8;
	}
	.nav ul{
	    display: flex;
	    justify-content: space-around;
	    height: 9.1rem;
	}
	.nav ul li{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content : center;
	}
	.nav li img{
	    width: 2.5rem;
	    height: 2.5rem;
	}
	.nav li span{
		font-size:1.4rem;
	}
	.items{
	    width: 100%;
	}
	.items ul li:first-of-type img{
	    width: 2.5rem;
	    height: 2.5rem;
	    margin:0 1.5rem;
	}
	.items ul li span{
		font-size:1.7rem;
	}
	.items ul li:last-of-type img{
	    width: 1rem;
	    height: 1.7rem;
	    margin-right:2rem;
	}
	.items ul{
	    display: flex;
	    justify-content: space-between;
	    background: white;
	    height: 5rem;
	    align-items: center;
	}
	.items ul li{
		display: flex;
		align-items: center;
	}
	.items ul:first-of-type{
		margin:.7rem 0;
	}
	.items ul:nth-of-type(2){
		margin-bottom: 2px;
	}
	.items ul:last-of-type{
		margin-top:1rem;
	}
</style>