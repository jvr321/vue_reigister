<!--  -->
<template>
  <div class="home-nav">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for='(page, index) in twoDimensionArr' :key='index'>
            <ul>
                <li v-for="navli in page" :key="navli.id">
                    <img :src="navli.imgUrl" alt="">
                    <span>{{navli.navDesc}}</span>
                </li>  
            </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    props:{
        navlis:{
            type:Array
        }
    },
  data () {
    return {
         swiperOptions: {
            pagination: {
                el: ".swiper-pagination"
            }
        }   
    }
  },
  computed:{
      twoDimensionArr(){
            let target =[]
            this.navlis.forEach((val, index)=>{
                const idx =Math.floor(index/8)
                if(!target[idx]){
                    target[idx]=[]
                   
                }
                target[idx].push(val)
                
            })
            return target
      }
  }
}
</script>

<style  lang='stylus' scoped>
.swiper-wrapper      
    ul 
        display flex
        flex-wrap wrap
        padding .1rem 0
        li
            display flex
            flex-direction column
            align-items center
            width 25%
            img 
                width 1.1rem
            span 
                margin .2rem 0
.swiper-pagination
    position absolute  
    bottom 0              
</style>
