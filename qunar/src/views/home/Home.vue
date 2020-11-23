<!--  -->
<template>
  <div class="home">  
      <home-header></home-header>
      <div class="wrapper" ref='wrapper'>
        <div class="content">
          <home-swiper :banners='banners'></home-swiper>
          <home-nav :navlis='navlis'></home-nav>
          <home-like :commentList='commentList'></home-like>
          <home-weekend :weekendList='weekendList'></home-weekend>
        </div>
      </div>
  </div>
</template>

<script>
import {getHome} from '@/model'
import BScroll from 'better-scroll'
import HomeHeader from './base/HomeHeader'
import HomeSwiper from './base/HomeSwiper'
import HomeNav from './base/HomeNav'
import HomeLike from './base/HomeLike'
import HomeWeekend from './base/HomeWeekend'
export default {
  name:'Home',  
  data () {
    return {
      banners:[],
      navlis:[], 
      commentList:[], 
      weekendList:[]
    }
  },
  components:{
      HomeHeader,
      HomeSwiper,
      HomeNav,
      HomeLike,
      HomeWeekend
  },
  // created(){
  //   this.getHomeData()
  // },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{click:true})
  },
  activated(){
    //当组件被(keep-alive缓存显示)时会触发activated
    console.log('home --activated')
    this.getHomeData()
  },
  deactivated(){
    //被(keep-alive缓存的组件没显示)时会触发deactivated
    console.log('home --deactivated')
  },
  methods:{
    async getHomeData(){
      let {banners, navlis, commentList, weekendList} = await getHome()
      this.banners = banners
      this.navlis = navlis
      this.commentList = commentList
      this.weekendList = weekendList
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper
  overflow hidden
  position fixed
  top .88rem
  left 0
  right 0
  bottom 0
</style>
