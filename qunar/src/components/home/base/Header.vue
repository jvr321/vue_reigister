<template>
    <div class="header">
      <i class="iconfont icon-fanhui"></i>
      <div class="header-input">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="输入城市/景点/游玩主题">
      </div>
      <router-link to="/city" tag="div" class="header-right">
        <span v-show="$store.state.currentCity">{{$store.state.currentCity}}</span>
        <i class="iconfont icon-xiangxia"></i>
      </router-link>
    </div>
</template>

<script>
    export default {
        name:'HomeHeader',
        data() {
            return {}
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<!--
  css预处理器流行有less sass stylus

  stylus使用步骤
    1. 安装stylus
    2. 安装stylus-loader
    3. 在组件中的style标签写lang="stylus"属性
-->
<style lang="stylus" scoped>
.header
  display: flex
  height: .88rem
  background-color: #00afc7
  line-height: .88rem
  color: #fff
  .icon-fanhui
    width: .88rem
    text-align: center
  .header-input
    flex: 1
    height: .6rem
    margin-top: .14rem
    padding-left: .2rem
    background-color: #fff
    line-height: .6rem
    border-radius: .1rem
    .icon-sousuo
      color: #ccc
      vertical-align: middle
    input
      width: 86%
      font-size: .26rem
      vertical-align: middle
      color: #605F5F
    input::-webkit-input-placeholder
      color: #ddd
  .header-right
    margin: 0 .2rem
    .icon-xiangxia
      font-size: .24rem
</style>
