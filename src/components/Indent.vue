<template lang="html">
   <div class="indent">
   		<div class="header">
	   		<a href="javascript:history.go(-1)"><img src="../assets/icon_back_n.png" alt=""></a>
	   		<span>我的订单</span>
	   		<img src="../assets/1mjp3jvupwan87lzygaaspwfq4eyxqv3.png" alt="">
   		</div>
   		<div class="mine">
   			<div class="noShop">
   				<img src="../assets/empty.png" alt="">
   				<div class="allShop">
   					<router-link to="market"><span>全部商品</span></router-link>
   					<span>精选商品</span>
   				</div>
   			</div>
   		</div>
   </div>
</template>
<script>
export default{

}
</script>
<style lang="css">
	 .header{
		width: 100%;
		height: 4rem;
		background: #f2f2f2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	 .header img{
		width: 2rem;
		height: 2rem;
	}
	 .header img:first-of-type{
		margin-left: 1rem;
	}
	 .header img:last-of-type{
		margin-right: 1rem;
	}
	 .header span{
		font-size: 1.8rem;
		color:#666;
	}
	.indent .mine{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.indent .mine img{
		width: 10rem;
		height: 10rem;
		margin-top: 10rem;
		margin-left: 7rem;
	}
	.indent .mine .allShop{
		font-size: 2rem;
		margin-top: 4rem;
		width: 100%;
		display: flex;
		justify-content:space-around;
	}
	.indent .mine .allShop a{
		width: 12rem;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
		background: #f2f2f2;
	}
	.indent .mine .allShop>span{
		color: #fff;
		width: 12rem;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
		background: #FF5722;
	}
</style>