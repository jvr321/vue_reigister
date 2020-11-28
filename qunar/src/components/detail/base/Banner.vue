<template>
    <div class="banner" @click="showImg">
      <div>
        <img :src="bannerImg" alt="">
        <div class="desc">
          <span>{{sightName}}</span>
          <p>
            <i class="iconfont icon-tupiantubiao"></i>
            <span>{{gallaryImgs.length}}</span>
          </p>
        </div>
      </div>
      <common-gallary  v-show="isShow"  :gallaryImgs="gallaryImgs" ></common-gallary>
    </div>

</template>

<script>
   import CommonGallary from '@/common/Gallary'
    export default {
        name:'DetailBanner',
        props:['bannerImg', 'sightName', 'gallaryImgs'],
        components:{
          CommonGallary
        },
        data() {
            return {
              isShow:false
            }
        },
        methods:{
          showImg(){
            this.isShow = !this.isShow
          }
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.banner
  position relative
  img
    width: 100%
  .desc
    position absolute
    bottom: 0
    width: 96%
    line-height .7rem
    padding 0 2%
    background-color: #ccc;
    p
      float right
      font-size 0
      .icon-tupiantubiao
        vertical-align top
      span
        font-size .28rem
        vertical-align top
</style>
