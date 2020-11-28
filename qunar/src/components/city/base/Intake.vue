<template>
    <div class="intake">
      <input type="text" placeholder="请输入城市和拼音" v-model="keyWord">
      <div class="intake-content" v-show="keyWord" ref="wrpper">
        <ul>
          <li v-for="city in filterCity" :key="city.id" class="intake-item border-bottom" @click='clickCity(city.name)'>{{city.name}}</li>
          <li v-show="isShow" class="intake-item">未匹配到数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name:'Intake',
        props:['cities'],
        data() {
            return {
              keyWord: ''
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
        computed:{
          filterCity(){
            const res = []//储存过滤后的城市

            for(let key in this.cities){
              this.cities[key].forEach(city=>{
                if(city.name.includes(this.keyWord) || city.spell.includes(this.keyWord)){
                  res.push(city)
                }
              })
            }
            return res
          },

          isShow(){
            return  !this.filterCity.length
          }
        },
        mounted(){
          new BScroll(this.$refs.wrpper,{
            click:true
          })
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.border-bottom::before
  border-bottom-color #999
.intake
  height .68rem
  padding .1rem
  background-color: #00bcd4
  input
    width: 100%
    height 100%
    border-radius .1rem
    text-align center
  .intake-content
    overflow hidden
    position fixed
    z-index 4
    top: 1.56rem
    left: 0
    right: 0
    bottom: 0
    background-color: #ccc
    .intake-item
      padding .2rem .3rem
      background-color: #fff;
</style>
