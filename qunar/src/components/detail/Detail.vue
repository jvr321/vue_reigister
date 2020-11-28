<template>
    <div class="detail">
      <detail-banner
        :bannerImg="bannerImg"
        :sightName="sightName"
        :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-header></detail-header>
    </div>
</template>

<script>
    import DetailBanner from './base/Banner'
    import DetailHeader from './base/Header'
    import {getDetail} from "@/api"

    export default {
       components:{
         DetailBanner,
         DetailHeader
       },
        created(){
           this.getData()
        },
        data(){
          return  {
            bannerImg:'',
            sightName:'',
            gallaryImgs:''
          }
        },
        methods:{
           async getData(){
             let {bannerImg, sightName, gallaryImgs} = await getDetail(this.$route.params.id)
             this.bannerImg = bannerImg
             this.sightName = sightName
             this.gallaryImgs = gallaryImgs
           }
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
.detail
  height: 2000px
</style>
