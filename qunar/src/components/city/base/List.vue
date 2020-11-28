<template>
    <div class="city-list" ref="wrpper">
      <div>
        <div class="current-city btn">
          <h3 class="title">当前城市</h3>
          <ul>
            <li class="border" v-show="$store.state.currentCity">{{$store.state.currentCity}}</li>
          </ul>
        </div>
        <div class="hot-city btn">
          <h3 class="title">热门城市</h3>
          <ul>
            <li class="border" v-for="hot in hotCitys" @click='clickCity(hot.name)'>{{hot.name}}</li>
          </ul>
        </div>
        <div class="letter-sort" v-for="citys,key in cities">
          <h3 class="title" :ref="key">{{key}}</h3>
          <ul>
            <li v-for="city in  citys" class="border-bottom" @click='clickCity(city.name)'>{{city.name}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: 'CityList',
        props:['hotCitys', 'cities'],
        computed:{
          letter(){
            return this.$store.state.letter
          }
        },
        methods:{
          //把当前的城市存仓库
          clickCity(cityName){
            this.$store.commit('saveCurrentCity', cityName)

            //跳转到首页
            this.$router.push('/')
          }
        },
        mounted(){
          this.scroll = new BScroll(this.$refs.wrpper,{
            click:true
          })
        },
        watch:{
          letter(key){
            //scrollToElement  跳到指定dom节点
            this.scroll.scrollToElement(this.$refs[key][0])
            console.log(this.$refs[key])
          }
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.border-bottom:before
  border-bottom-color  #bbb
.city-list
  position fixed
  top: 1.56rem
  left: 0
  right: 0
  bottom: 0
  overflow hidden
.btn
  padding .1rem 0
  .title
    padding .2rem .1rem
    background-color: #eee
  ul
    display flex
    flex-wrap wrap
    .border
      width: 20%
      border 1px solid #ccc
      padding .2rem  0
      margin .15rem
      text-align center
.letter-sort
  h3
    padding .32rem .2rem
    background-color: #ccc;
  ul
    padding 0 .1rem
    li
      padding .2rem 0
      text-indent .32rem


</style>
