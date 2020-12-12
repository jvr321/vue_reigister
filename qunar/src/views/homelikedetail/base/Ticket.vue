<template>
  <div class="ticket">
      <ul class="ticket-title border-bottom">
          <li @click='targetTicket'>门票</li>
          <li @click='oneTour'>一日游</li>
      </ul>
      <div class="ticket-item" v-for="(item,index) in ticketInfo" :key='index'>
          <h3 class="border-bottom" ref='chen'>{{item.ticketInfo.title}}</h3>
          <div class="ticket-info border-bottom" v-for="(result,index2) in item.ticketInfo.result" :key="index2">
              <div class="ticket-left">
                  <h4 class="ticket-title">{{result.subtitle}}</h4>
              </div>
              <div class="ticket-right" @click='clickOpen(result)'>
                  <span>￥{{result.price}} <i class="iconfont icon-xiangyou" :style="result.styObj"></i></span>
              </div>
              <recommend :recommendInfo='result.recommendInfo' v-show='result.isShow'></recommend>
          </div>
      </div>
  </div>
</template>

<script>
import Recommend from './Recommend'
export default {
    props:['ticketInfo'],
  components:{
      Recommend
  },
  methods:{
      clickOpen(result){
          result.isShow = !result.isShow
          result.styObj.transform = 'rotate('+result.isShow*90+'deg)'
      },
      targetTicket(){
        //   window.scrollTo(x,y)   document.documentElement.scrollTop
        document.documentElement.scrollTop = this.$refs.chen[0].offsetTop-90
        //console.log(this.$refs.chen[0].clientHeight)
      },
      oneTour(){
           window.scrollTo(0,this.$refs.chen[1].offsetTop-40)
        
      }
  }
}
</script>
<style lang='stylus' scoped>
.ticket .recommend >>>  .recommend
    width 100%
.ticket .recommend >>> .recommend-title
    line-height .4rem
.border-bottom 
    &::before
        border-color #ccc
.ticket
    .recommend 
        background-color #f5f5f5
    .ticket-item
        padding 0 .2rem
        border-bottom .2rem solid #f5f5f5
    .ticket-title 
        display flex 
        li 
            width 50%
            height 1rem
            line-height 1rem
            text-align center
            font-size .3rem
    .ticket-item
        h3 
            line-height 1rem 
            font-size .32rem 
        .ticket-info 
            display flex 
            flex-wrap wrap
            justify-content space-between
            padding .1rem 0
            .ticket-left 
                width 6rem
                color #616161
                h4 
                    display -webkit-box
                    overflow hidden 
                    line-height .6rem 
                    font-size .28rem
                    -webkit-line-clamp 2
                    -webkit-box-orient vertical
                p 
                    line-height .5rem 
                    font-size .28rem
                span 
                    color #00afc7
                    font-size .24rem 
            .ticket-right 
                display flex
                flex-direction column 
                justify-content center
                width 1.8rem
                text-align center
                span 
                    color #ff9852 
                    font-size .35rem 
                    font-weight normal
                    &::first-letter
                        font-size .24rem
                    i 
                        position absolute
                        font-size  .24rem 
                        color #bbb         
</style>

