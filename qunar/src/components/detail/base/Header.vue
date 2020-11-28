<template>
    <div class="detail-header">
      <router-link tag="i"
        class="header-goback iconfont icon-fanhui"
        to="/"
        v-show="!isShow"></router-link>
      <div class="header-fixed" v-show="isShow">
        <router-link to="/">
          <i class="iconfont icon-fanhui header-back"></i>
        </router-link>
        <h2>景点详情</h2>
      </div>
    </div>
</template>

<script>
    export default {
        name:'DetailHeader',
        data() {
            return {
              isShow:false
            }
        },
        activated(){
          window.addEventListener('scroll', this.scrollFn)
        },
        methods:{
          scrollFn(){
            console.log(document.documentElement.scrollTop)
          }
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
  .detail-header
    position fixed
    left: 0
    top: 0
    right: 0
    z-index 1
    .header-goback
      position absolute
      width: .8rem
      height: .8rem
      line-height .8rem
      border-radius 50%
      text-align center
      background-color: rgba(0, 0, 0, .7);
      color: #fff
  .header-fixed
    position relative
    line-height .86rem
    background-color: #00bcd4
    color #fff
    text-align center
    .header-back
      position absolute
      left: 0
      top: 0
      width: .8rem
      color: #fff
    h2
      text-align center
      font-size: .32rem
</style>
