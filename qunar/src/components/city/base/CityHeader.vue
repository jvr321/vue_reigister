<template>
    <div class="city-header">
      <div class="top-header">
        <router-link to="/" tag="i" class="iconfont icon-fanhui"></router-link>
        <h3 class="title">城市选择</h3>
      </div>
      <!--<div class="center-header">-->
        <!--<ul class="box-auto">-->
          <!--<li class="lis-item">境内</li>-->
          <!--<li class="lis-item">境外港澳台</li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
        name:'CityHeader',
        data() {
            return {}
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.city-header
  background-color: #00bcd4
  .top-header
    position relative
    display: flex
    line-height .68rem
    color: #fff
    .icon-fanhui
      position absolute
      left:.2rem
    .title
      width: 100%
      text-align center
      font-size .32rem
  /*.center-header
    padding: .2rem 1rem;
    .box-auto
      display flex
      width: 6.28rem
      border 1px solid #fff
      margin auto
      color: #fff;
      line-height .4rem
      .lis-item
        flex 1
        text-align center*/

      
</style>
