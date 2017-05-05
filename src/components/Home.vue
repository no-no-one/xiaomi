<template lang="html">
   <div>
   <h1>主页{{address}}</h1>
   <ul>
      <li v-for="x in itemData">{{x}}</li>
   </ul>
   </div>

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
	  this.$http.get("http://h5.yztctech.net/api/axf/apimiaosha.php")
	  .then(function(res){
	  this.itemData = JSON.parse(res.body).product
	  })
	}
}
</script>
<style>
</style>