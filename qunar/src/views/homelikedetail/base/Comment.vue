<!--  -->
<template>
  <div class="comment">
      <h3 class="border-bottom">用户评论</h3>
      <div class="comment-container border-bottom" v-for='(comment,index) in commentInfo' :key='index'>
        <p class="comment-desc">{{comment.desc}}</p>
        <div class="comment-item" @click="showSwiper(comment)">
          <img
            v-for="(item,j) in comment.imgs" :key='j' 
            :src="item"  v-show='j<6'
            class="comment-img">
          <span class="img-amount" v-if='comment.imgs.length>6'>共{{comment.imgs.length}}张</span>
        </div>
        <img-swiper :gallaryImgs='comment.imgs' v-show="comment.isShow" @closeImgSwiper='closeImgSwiper(comment)'></img-swiper>
      </div>
  </div>
</template>

<script>
import ImgSwiper from '@/views/common/ImgSwiper'
export default {
 props:['commentInfo'],
 components:{
   ImgSwiper
 },
 methods:{
   showSwiper(comment){
     comment.isShow = true
   },
   closeImgSwiper(comment){
      comment.isShow = false
   }
 }
}
</script>

<style lang='stylus' scoped>
.border-bottom::before
  border-color :#ccc
h3 
  line-height .8rem 
  padding-left .42rem 
  font-size .3rem
.comment-container 
  padding 0 .2rem .4rem 
  line-height .42rem 
  color #616161
  .comment-desc 
    overflow auto 
    height 2rem
    padding .2rem 0
  .comment-item 
    position relative 
    overflow hidden 
    .comment-img 
      float left 
      width 32%
      margin-right 1.2%
      margin-bottom 1.2%
  .img-amount 
    position absolute
    right 0.1rem
    bottom 0.3rem
    padding 0 .05rem 
    font-size .28rem 
    color #fff 
    border-radius .2rem 0 0 .2rem  
    background-color rgba(0,0,0,.5)       
</style>
