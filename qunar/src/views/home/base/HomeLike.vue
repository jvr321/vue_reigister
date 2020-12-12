<!--  -->
<template>
  <div class="home-like">
    <div class="title">
      <i class="iconfont icon-aixin"></i>
      <h3>猜你喜欢</h3>
    </div>
    <ul>
      <router-link :to="{name:'detaillink', params:{id:comment.id}, query:{q:9999}}" 
        tag='li' 
        class="border-bottom" 
        v-for='comment in commentList' :key='comment.id'>
        <img :src="comment.imgUrl" alt="">
        <div class="desc">
          <h3 class="mar-bottom">{{comment.title}}</h3>
          <div class="comment mar-bottom">
            <div class="star" >
              <i class="iconfont icon-xingxing" v-for="item in 5" :key='item'></i>
              <span :style="comment.score|widthObj">
                <i class="iconfont icon-xingxing" v-for="item in 5" :key='item'></i>
              </span> 
            </div>
            <span>{{comment.comment}}条评论</span>
          </div>
          <p class="price mar-bottom">
            <span>￥<em>{{comment.price}}</em></span>起
            <span class="address">{{comment.address}}</span>
          </p>
          <div class="feature">
            <span>{{comment.feature}}</span>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    commentList:{
      type:Array
    }
  },
  filters:{
     widthObj(score){
      return {
        width:(score/5)*100+'%'
      }
    }
  }
}
</script>

<style  lang='stylus' scoped>
.title
  display flex
  padding .24rem  .26rem 
  font-size .32rem
  .icon-aixin
    margin-right .1rem
    color red
ul 
  li
    display flex
    margin-left .2rem 
    padding .2rem .2rem .2rem 0
    img 
      width 2rem
      height 2rem
      vertical-align top
    .desc
      position relative
      flex 1
      margin  .2rem 
      vertical-align top
      .comment .star
        position absolute
      .comment > span
        margin-left 2rem  
      .comment>.star> .icon-xingxing
        color #e0e0e0
      .comment > .star > span
        overflow hidden 
        position absolute
        left 0
        color red 
      .mar-bottom
        line-height .6rem  
    .price .address
      position absolute 
      right 0
    .price span:first-child
      color red
      em
        font-size .5rem
    .feature
      margin-top .2rem
      color red
</style>
