<!--  -->
<template>
  <div class="home-header">
    <i class="iconfont icon-xiangzuo"></i>
    <div class="search">
      <i class="iconfont icon-icon-sousuo"></i>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link class="address" to='/city' tag='div'>
      <span>{{$store.state.cityListName}}</span>
      <i class="iconfont icon-shixinjiantou-xiangshang-copy"></i>
    </router-link>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang='stylus' scoped>
.home-header
  display flex
  height .88rem
  line-height .88rem
  background-color #00bcd4
  color #fff
  .icon-xiangzuo 
    width .88rem
    font-size .4rem
    text-align center
  .search
    flex 1
    background-color #fff
    height 0.6rem
    margin-top .14rem
    line-height .6rem
    border-radius .1rem
    input 
      border none
      width 88%
      vertical-align middle 
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder 
      color #e4e7ea  
    .icon-icon-sousuo
      padding .1rem 
      vertical-align middle
      color #e4e7ea
  .address
    width 1.32rem
    text-align center
</style>
