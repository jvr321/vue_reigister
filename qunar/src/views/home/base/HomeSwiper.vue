<template>
  <!-- v-if="banners.length > 0" 解决图片不能自动轮播问题 -->
  <swiper ref="mySwiper" :options="swiperOptions" v-if="banners.length > 0">
    <swiper-slide v-for='banner in  banners' :key='banner.id'>
        <img :src="banner.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    props:{
      banners:{
        type:Array
      }
    },
    data () {
      return {
        swiperOptions: {
            loop:true,
            autoplay:{
              delay:2000,
              disableOnInteraction:false
            },
            pagination: {
                el: ".swiper-pagination"
            }
        }   
      }
    }
 }
</script>
<style  scoped lang='stylus'>
.swiper-pagination >>> .swiper-pagination-bullet-active
    background-color #fff
.swiper-slide img
    width 100% 

</style>
