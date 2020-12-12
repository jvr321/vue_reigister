<template>
  <div class="banner">
    <img :src="bannerImg" alt="" @click='showSwiper'>
    <div class="info">
      <p class="headfigure">
        <i class="iconfont icon-tupiantubiao"></i>
        <span>{{gallaryImgs.length}}</span>
      </p>
      <div class="title">
        <h3>{{sightName}}</h3>
        <div class="right-video">
          <span>视频</span>
          <i class="iconfont icon-xiangyou"></i>
        </div>
      </div>
    </div>
     <fade-animation>
       <img-swiper :gallaryImgs='gallaryImgs' v-show='isShow' @closeImgSwiper='closeImgSwiper'></img-swiper>
    </fade-animation>
    
  </div>
</template>

<script>
import ImgSwiper from '../../common/ImgSwiper'
import FadeAnimation from '../../common/FadeAnimation'
export default {
  props:['bannerImg','sightName','gallaryImgs'],
  components:{
    ImgSwiper,
    FadeAnimation
  },
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    showSwiper(){
      this.isShow = true
    },
    closeImgSwiper(){
      this.isShow = false
    }
  }
}
</script>

<style  lang='stylus' scoped>
.banner
  position relative
  height 4.6rem
  color #fff
  img 
      width 100%
  .info
    position absolute
    bottom .5rem
    left .2rem
    width 100%
    .headfigure
      width 1.2rem
      height .4rem   
      margin .1rem 0
      background-color rgba(0,0,0,.5) 
      text-align center
      line-height .4rem
      border-radius .2rem .2rem .2rem .2rem
    .title
      position absolute
      width 100%
      .right-video
        position absolute
        right .5rem
        top 0
            
</style>
