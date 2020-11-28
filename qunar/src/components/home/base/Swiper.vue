<template>
    <div class="swiper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>
<!-- swiper官网  https://www.swiper.com.cn/api/loop/22.html-->
<script>
    export default {
      name:'HomeSwiper',
      props:['swiperList'],
      data() {
        return {
          swiperOptions: {
            //分页器
            pagination: {
              el: '.swiper-pagination'
            },
            loop : true,//循环
            autoplay: { disableOnInteraction: false }, //自动切换
            delay: 1000 //一次切换图片的时间
          }
        }
      }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<!--
    VUE中CSS样式穿透   https://blog.csdn.net/Alex81320/article/details/86234369
-->
<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
  background-color: #fff
img
  width: 100%
</style>
