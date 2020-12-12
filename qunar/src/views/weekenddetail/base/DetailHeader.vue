<!--  -->
<template>
  <div class="header">
        <router-link tag='i' to ='/' class="iconfont icon-xiangzuo"></router-link>
        <h3 class="title">广州必打卡</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' scoped>
.header
    position relative
    height .88rem
    background-color #00bcd4
    line-height .88rem
    color #fff
    .title
        text-align center
        font-size .4rem
    .icon-xiangzuo
        position absolute 
        left .2rem 
        font-size .4rem 
  
       

</style>