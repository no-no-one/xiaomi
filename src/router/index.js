import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Market from '@/components/Market'
import Cart from '@/components/Cart'
<<<<<<< HEAD
import CartSerch from '@/components/CartSerch'
import PhoneList from '@/components/PhoneList'
=======
import channel from '@/components/channel'
>>>>>>> origin/classify
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
<<<<<<< HEAD
    },{
      path:"/cartserch",
      component:CartSerch
    },{
      path:"/phonelist/:isLogin",
      component:PhoneList
=======
    },
    {
      path:"/market/channel",
      component:channel
>>>>>>> origin/classify
    }
      
  ]
})
