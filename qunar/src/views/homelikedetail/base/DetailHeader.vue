<!--  -->
<template>
  <div class="header">
        <router-link to='/' tag="i" v-show='isShow' class="iconfont icon-xiangzuo header-goback"></router-link>
        <div class="header-fixed" v-show='!isShow' :style="styTransition">
            <router-link to='/' tag='i' class="iconfont icon-xiangzuo header-back"></router-link>
            <h3>长隆欢乐世界</h3>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow:true,
      styTransition:{}
    }
  },
  methods:{
    handleScroll(){
      console.log('scroll detailheader')
      let scrollY = window.pageYOffset
      if(scrollY>42){
        this.isShow = false
        this.styTransition = {
          opacity:(scrollY-42)/100
        }
      }else{
        this.isShow = true
        
      }
    }
  },
  activated(){
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated(){
    //不激活时取消window上scroll绑定
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style  lang='stylus' scoped>
.header
    position fixed
    left 0
    right 0
    top 0
    z-index 1
    .header-goback
        position absolute
        width 0.8rem
        height 0.8rem
        line-height .8rem
        text-align center
        background-color rgba(0,0,0,.8)
        color #fff
        border-radius 50%
    .header-fixed
        position relative
        background-color #00bcd4
        line-height .86rem
        color  #fff
        text-align center
        .header-back
            position absolute
            left 0
            top 0
            width 0.8rem
            color #fff
        h3
            text-align center
            font-size .32rem       
</style>
