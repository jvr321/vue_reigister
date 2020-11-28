<template>
    <div class="guess-you">
      <div class="title">
        <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
        <h3>猜你喜欢</h3>
      </div>
      <ul>
        <router-link tag="li" :to="{name:'detailLink',params:{id:guess.id}}" class="list-item border-bottom" v-for="guess in guessList" :key="guess.id">
          <img class="list-img" :src="guess.imgUrl" alt="">
          <div class="desc">
            <h4>{{guess.title}}</h4>
            <div class="comment">
              <p class="xingxing">
                <i class="iconfont icon-shixinxingxing" v-for="item in 5"></i>
                <span :style="guess.score|star">
                  <i class="iconfont icon-shixinxingxing" v-for="item in 5"></i>
                </span>
              </p>
              <span>{{guess.comment}}条评论</span>
            </div>
            <p class="price">
              <span class="red">￥<em>{{guess.price}}</em></span>起
              <span>{{guess.address}}</span>
            </p>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name:'HomeGuessYou',
        props:['guessList'],
        data() {
            return {}
        },
        filters:{
          star(score){
            return {
              width: score*100/5 + '%'
            }
          },
          priceFilter(price){
            return '￥' + price
          }
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.guess-you
  padding 0 0 0 .24rem
  .title
    padding .24rem 0
    background-color: #f2f2f2
    .title-img
      width: .3rem
      vertical-align: top
    h3
      display inline-block
      vertical-align top
      font-size .44rem
  .list-item
    position relative
    padding .2rem 0
    .list-img
      width: 2rem
      vertical-align top
    .desc
      display inline-block
      padding-left .24rem
      vertical-align top
      h4
        margin-top .24rem
        line-height .44rem
      .comment
        margin-top:.14rem
        line-height .34rem
        color: #616161
        font-size .24rem
        .xingxing
          display inline-block
          position relative
          color #ccc
          span
            overflow hidden
            position absolute
            left -10px;
            color: red
        span
          margin-left .2rem
      .price
        margin-top .24rem
        line-height .4rem
        font-size .24rem
        span + span
          position: absolute;
          right: .2rem
          bottom: .2rem;
          color: #616161
        .red
          color: red
        span em
          font-size: .4rem
          font-weight:bold


</style>
