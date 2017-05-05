<template>
  <div id="app">
    
    <router-view></router-view>
    <footer>
       <router-link to="/">首页</router-link>
       <router-link to="market">闪送超市</router-link>
       <router-link to="/cart">购物车</router-link>
       <router-link to="mine">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
footer{
  position:fixed;
  bottom:0;
  height:30px;
  display:flex;
  justify-content:space-around;
  width:100%;
  background:blue;
}
footer a{
  flex:1 1 25%;
  text-align:center;
}
</style>
