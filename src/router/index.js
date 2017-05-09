import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Market from '@/components/Market'
import Cart from '@/components/Cart'
import Login from '@/components/Login'
import Search from '@/components/Search'
import NewPaper from '@/components/NewPaper'
import NewPro from '@/components/NewPro'
import ShopCar from '@/components/ShopCar'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:"/mine",
    	component:Mine
    },{
    	path:"/market",
    	component:Market
    },{
    	path:"/cart",
    	component:Cart
    },{
      path:"/home/login",
      component:Login
    },{
      path:"/home/search",
      component:Search
    },{
      path:"/home/newPaper",
      component:NewPaper
    },{
      path:"/home/newProduct",
      component:NewPro
    }{
      path:"/home/shopCar",
      component:ShopCar
    },
  ]
})
