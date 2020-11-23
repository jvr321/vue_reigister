// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// //初始化样式
// import './assets/css/reset.css'
// //移动端一像素边框
// import './assets/css/border.css'
// //阿里图标
// import './assets/css/iconfont.css'
import 'css/reset.css'
import 'css/border.css'
import 'css/iconfont.css'

//swiper轮播插件
import  VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
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
