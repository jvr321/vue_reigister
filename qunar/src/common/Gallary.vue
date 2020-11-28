<template>
    <div class="gallary">
      <div class="wrapper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="gallaryImg,index in gallaryImgs" :key="index">
            <img class="swiper-img" :src="gallaryImg" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
    export default {
        name:'CommonGallary',
        props:['gallaryImgs'],
        data() {
          return {
            swiperOptions: {
              //分页器
              pagination: {
                el: '.swiper-pagination',
                type : 'fraction'
              },
              observer:true,
              observeParents:true,
            }
          }
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.wrapper >>> .swiper-container
  overflow inherit
.gallary
  position fixed
  z-index 10
  left: 0
  right: 0
  bottom: 0
  top: 0
  background-color: #000
  .wrapper
    position absolute
    top: 0
    bottom: 0
    margin auto
    height: 0
    width: 100%
    padding-bottom 62.5%
    background-color: #fff;
    .swiper-img
      width: 100%
    .swiper-pagination
      bottom: -1rem
      color #fff
</style>
