<template>
    <div class="nav">
      <!--<ul>-->
        <!--<li v-for="item in filterImg[0]" :key="item.id">-->
          <!--<img :src="item.imgUrl" alt="">-->
          <!--<span>{{item.desc}}</span>-->
        <!--</li>-->
      <!--</ul>-->

      <swiper :options="swiperOptions">
        <swiper-slide v-for="(imgs,index) in filterImg" :key="index">  <!--这种情况  想不出啥作为key值-->
          <ul>
            <li v-for="item in imgs" :key="item.id">
              <img :src="item.imgUrl" alt="">
              <span>{{item.desc}}</span>
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name:'HomeNav',
        props:['imgsList'],
        data() {
            return {
              swiperOptions: {
                pagination: {
                  el: '.swiper-pagination'
                }
              }
            }
        },
        computed:{
          filterImg(){
            let imgs = []
            this.imgsList.forEach((item,index)=>{
              let arrFristItem = ~~(index/8)
              if(!imgs[arrFristItem]){
                imgs[arrFristItem] = []
              }
              imgs[arrFristItem].push(item)
            })
            return imgs
          }

        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.nav
  width: 100%
  ul
    display: flex
    flex-wrap: wrap
    width: 100%
    padding-top: .2rem
    li
      display flex
      flex-direction column
      align-items center
      width: 25%
      height: 1.85rem
      img
        width: 1.1rem;


</style>
