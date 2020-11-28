<template>
    <div class="home-weekend">
      <h3>周末去哪儿</h3>
      <ul>
        <li class="list-item" v-for="item in weekendList">
          <img class="list-img" :src="item.imgUrl" alt="">
          <div class="desc">
            <h4>{{item.title}}</h4>
            <p>{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name:'HomeWeekend',
        props:['weekendList'],
        data() {
            return {}
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.home-weekend
  h3
    padding .24rem .48rem
    background-color: #f2f2f2
  ul
    .list-item
      .list-img
        width: 100%
      .desc
        padding .14rem 1.4rem .2rem  .2rem
        line-height .48rem
        p
          white-space nowrap
          overflow-x hidden
          text-overflow ellipsis
</style>
