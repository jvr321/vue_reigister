<!--  -->
<template>
    <div class="home-weekend">
      <h3 class="title">周末去哪儿</h3>
        <ul>
            <router-link :to="{name:'weekendlink',params:{id:weekend.id}}" v-for="weekend in weekendList" :key='weekend.id' tag='li'>
                <img :src="weekend.imgUrl" alt="">
                <div class="desc">
                    <h4 class="line-heig">{{weekend.title}}</h4>
                    <p class="line-heig">{{weekend.desc}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  props:['weekendList']
}
</script>

<style lang='stylus' scoped>
.title
    background-color: #eee;
    padding-left .2rem
    line-height 1rem
    font-size .4rem
img 
   width 100% 
.desc
    padding .3rem .2rem
    .line-heig
        line-height .5rem     
    p
        overflow hidden
        white-space nowrap 
        text-overflow ellipsis    
</style>
