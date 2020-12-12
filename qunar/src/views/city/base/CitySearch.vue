<!--  -->
<template>
  <div class="city-search">
      <input type="text" placeholder="请输入城市和拼音" 
        v-model='keyword'>
      <div class="search-content" v-show="keyword" ref='wrapper'>
            <ul>
                <li class="city-list border-bottom" v-for="cityName in  filterCities" :key='cityName.id'  @click='clickCity(cityName.name)'>{{cityName.name}}</li>
                <li class="city-list border-bottom"  v-show="isShow">没有匹配到你要搜索的数据</li>
            </ul>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:['cities'],
  data () {
    return {
        keyword:''
    }
  },
  methods:{
    clickCity(cityName){
        this.$store.commit('cityList', cityName)
        this.$router.push('/')
    }
  },
  mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{click:true})
  },
  computed:{
      filterCities(){
          let res = []
          for(let key in this.cities){
              this.cities[key].forEach(city=>{
                  if(city.spell.includes(this.keyword) ||  city.name.includes(this.keyword)){
                      res.push(city)
                  }
              })
          }
          return res
      },
      isShow(){
          return !this.filterCities.length
      }
  }
}
</script>

<style lang='stylus'  scoped>
.city-search
    height .72rem
    padding .1rem
    background-color #00bcd4
    input 
        border 0
        width 100%
        height 100%
        text-align center
        border-radius .1rem
    .search-content
        overflow hidden
        position fixed
        top 1.8rem
        left 0
        right 0
        bottom 0
        z-index 99999
        background-color #ddd
        .city-list
            padding-left .2rem
            background-color #fff
            line-height .8rem
</style>
