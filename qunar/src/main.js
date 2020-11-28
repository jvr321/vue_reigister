// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//定义简化路由的指令  作用：优化路由
//1. 在build/webpack.base.config.js配置alias

//导入初始化样式
import 'style/reset.css'
//导入实现移动端一像素边框
import 'style/border.css'
//导入阿里图标样式
import 'style/iconfont.css'
import 'style/iconfont1.css'
//轮播图插件 https://github.com/surmon-china/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
//使用轮播图插件
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
