<template>
    <div class="home">
      <home-header></home-header>
      <div class="wrapper" ref="wrapper">
        <div>
          <home-swiper :swiperList="swiperList"></home-swiper>
          <home-nav :imgsList="imgsList"></home-nav>
          <HomeGuessYou :guessList="commendList"></HomeGuessYou>
          <home-weekend :weekendList="weekendList"></home-weekend>
        </div>
      </div>
    </div>
</template>

<script>
    import {getHome} from '@/api/index.js'
    import HomeHeader from './base/Header'
    import HomeSwiper from './base/Swiper'
    import HomeNav from './base/Nav'
    import HomeGuessYou from './base/GuessYou'
    import HomeWeekend  from './base/Weekend'
    import BScroll from 'better-scroll'
    export default {
        name: 'Home',
        data() {
            return {
              swiperList:[],
              imgsList:[],
              commendList:[],
              weekendList:[]
            }
        },
        components:{
          HomeHeader,
          HomeSwiper,
          HomeNav,
          HomeGuessYou,
          HomeWeekend
        },
        created(){
          this.getData();
        },
        mounted(){
          new BScroll(this.$refs.wrapper,{
            click:true
          })
        },
        methods:{
          async getData(){
             let {swiperList, imgsList, commendList, weekendList} = await getHome()
              this.swiperList = swiperList
              this.imgsList = imgsList
              this.commendList = commendList
              this.weekendList = weekendList
          }
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.wrapper
  overflow hidden
  position fixed
  top: .88rem
  left: 0
  right: 0
  bottom: 0
</style>
