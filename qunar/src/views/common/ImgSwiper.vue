<!--  -->
<template>
  <div class="img-swiper" @click='handleHide'>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for='(gallaryImg,index) in  gallaryImgs' :key='index'>
            <img :src="gallaryImg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    props:['gallaryImgs'],
  data () {
    return {
        swiperOptions:{
            pagination:{
                el:'.swiper-pagination',
                type:'fraction'
            },

            //解决Swiper滑动不流畅,不整张图片滑动 配置如下 
            observer: true,
            // 修改swiper的父元素时，自动初始化swiper
            observeParents: true
            // 修改swiper的子元素时，自动初始化swiper
        }
    }
  },
  methods:{
      handleHide(){
          this.$emit('closeImgSwiper')
      }
  }
}
</script>

<style lang='stylus' scoped>
.img-swiper
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 999999
    background-color #000
    .swiper-container
        width 100%
        height 5rem
        position absolute
        left 0
        bottom 0
        top 0
        bottom 0
        margin auto
        .swiper-wrapper
            .swiper-slide
                img 
                    width 100%
        >>>.swiper-pagination
            font-size .5rem
            color #fff
            
</style>
