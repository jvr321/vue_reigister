<!--  -->
<template>
  <div class="city-list" ref="wrapper">
    <div class="content">
        <div class="curr-city tit">
            <h4>当前城市</h4>
            <ul class="list">
                <li class="item border" @click='clickCity($store.state.cityListName)'>{{$store.state.cityListName}}</li>
            </ul>
        </div>  
        <div class="hot-city tit">
            <h4>热门城市</h4>
            <ul class="list">
                <li class="item border" 
                    v-for='city in hotCitys' :key='city.id' 
                    @click='clickCity(city.name)'>{{city.name}}</li>
            </ul>
        </div>
        <div class="all-city tit" v-for='(cityCat,key, index) in  cities' :key='index'>
            <h4 :ref='key'>{{key}}</h4>
            <ul class="citys" >
                <li  class="city-name border-bottom" 
                    v-for="cityName in cityCat" 
                    :key='cityName.id'
                    @click='clickCity(cityName.name)'>{{cityName.name}}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:['hotCitys','cities'],
    mounted(){
        //使用better-scroll 页面不能点击    想点击配置第二个参数click:true
        this.scroll = new BScroll(this.$refs.wrapper, {click:true})
    },
    methods:{
        clickCity(cityName){
            this.$store.commit('cityList', cityName)
            this.$router.push('/')
        }
    },
    computed:{
       letter(){
            return this.$store.state.letter
       }
    },
    watch:{
        letter(targetLetter){
            //better-scroll滚动到指定位置的方法  scrollToElement(目标节点)
            this.scroll.scrollToElement(this.$refs[targetLetter][0])
        }
    }
}
</script>

<style  lang='stylus' scoped>
.city-list
    position fixed
    top 1.8rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .tit
        h4 
            padding .2rem .3rem
            background-color #ddd
        .list
            display flex
            flex-wrap wrap
            justify-content space-between
            padding-top .1rem
            .item
                width 32%
                line-height .88rem
                text-align center
                margin-bottom .1rem
            .border::before
                border-color #333      
        .citys
            .city-name   
                padding-left .2rem
                line-height .8rem
            .border-bottom:before
                border-style solid 
                border-color #ccc
</style>
