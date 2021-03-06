// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import LessLoader from 'less-loader'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FlexibleJs from '../lib/flexible'
// 引入jquery
import $ from 'jquery'
// 一个动画插件 实现加入购物车效果
import '../lib/jquery.fly'
// 引入懒加载插件
import '../lib/jquery.lazyload.min.js'

import '../lib/reset.css'
import '../lib/bootstrap.css'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

import Home from './pages/home/home'
import Market from './pages/market/market'
import Car from './pages/car/car'
import Mine from './pages/mine/mine'
const routes = [
    { path: '', component: Home },
    { path: '/home', component:Home },
    { path: '/market', component: Market },
    { path: '/car', component: Car },
    { path: '/mine', component: Mine }
]

const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  data: {
      a: 1,
      allGoodsObj: {
          isEmpt: true
      },
      allCarGoodsObj: {

      },
      numberBesideCar: 0
  }
})
