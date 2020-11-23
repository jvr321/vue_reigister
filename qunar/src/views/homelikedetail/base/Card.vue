<!--  -->
<template>
  <div class="card">
     <div class="card-desc border-bottom">
         <div class="card-left card-item">
             <h3>
                 {{cardInfo.score}}分 <span>{{cardInfo.desc}}</span>
             </h3>
             <p>
                 <span>{{cardInfo.comment}}条评论</span>
                 <span>{{cardInfo.walkthrough}}条攻略</span>
             </p>
             <i class="iconfont icon-xiangyou"></i>
         </div>
         <div class="crad-right card-item">
             <h4>景点介绍</h4>
             <p>开放时间、贴士</p>
             <i class="iconfont icon-xiangyou"></i>
         </div>
     </div>
     <p class="card-address">
         {{cardInfo.address}} <i class="iconfont icon-xiangyou"></i>
     </p>
  </div>
</template>

<script>
export default {
    props:['cardInfo'],
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~css/mixins.styl'
.border-bottom
&::before
    border-color #ccc
.card 
    padding .2rem .2rem 0
    border-bottom .2rem solid #f5f5f5    
    .card-desc
        display flex
        .card-item 
            position relative
            width 50%
            h3 
                color #ff8300
                line-height .4rem
                font-size .32rem
                span 
                    font-size .28rem
                    line-height .1rem
            p 
                color #9e9e9e
                font-size .24rem 
                line-height .5rem
                span 
                    margin-right .1rem 
            .icon-xiangyou
                location()
    .card-address 
        position relative 
        line-height .8rem
        .icon-xiangyou
            line-height .1rem 
            location()
                   
</style>
