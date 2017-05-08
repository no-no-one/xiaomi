import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Market from '@/components/Market'
import Cart from '@/components/Cart'
import Indent from '@/components/Indent'
import Record from '@/components/Record'
import Privilege from '@/components/Privilege'
import Service from '@/components/Service'
import Set from '@/components/Set'
import Family from '@/components/Family'
import Familys from '@/components/Familys'
import Enter from '@/components/Enter'
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
      path:"/indent",//订单
      component:Indent
    },{
      path:"/record",//售后
      component:Record
    },{
      path:"/privilege",//优惠
      component:Privilege
    },{
      path:"/service",//服务
      component:Service
    },{
      path:"/set",//设置
      component:Set
    },{
      path:"/family",//小米之家
      component:Family
    },{
      path:"/familys",//小米之家内部
      component:Familys
    },{
      path:"/enter",//登录
      component:Enter
    }

  ]
})
