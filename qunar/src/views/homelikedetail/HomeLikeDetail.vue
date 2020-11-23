<!--  -->
<template>
  <div class="home-like-detail">
      <banner 
        :bannerImg='bannerImg'
        :sightName='sightName'
        :gallaryImgs='gallaryImgs'></banner>
        <detail-header></detail-header>
        <card  :cardInfo='cardInfo'></card>
        <recommend :recommendInfo='recommendInfo'>
            <h4 class="border-bottom">去哪儿推荐</h4>
        </recommend>
        <ticket :ticketInfo='ticketInfo'></ticket>
        <comment :commentInfo='commentInfo'></comment>
  </div>
</template>

<script>
import {getHomeLinkDetail} from '@/model'
import Banner from './base/Banner'
import DetailHeader from './base/DetailHeader'
import Card from './base/Card'
import Recommend from './base/Recommend'
import Ticket from './base/Ticket'
import Comment from './base/Comment'

export default {
  components:{
    Banner,
    DetailHeader,
    Card,
    Recommend,
    Ticket,
    Comment
  },
  data(){
    return {
      bannerImg:'',
      sightName:'',
      gallaryImgs:[],
      cardInfo:{},
      recommendInfo:[],
      ticketInfo:[],
      commentInfo:[]
    }
  },
  activated(){
    this.getHomeLinkDetailData()
  },
  methods:{
    async getHomeLinkDetailData(){
      const {bannerImg,sightName,gallaryImgs,cardInfo,recommendInfo,ticketInfo,commentInfo} = await getHomeLinkDetail(this.$route.params.id)
      this.bannerImg = bannerImg
      this.sightName = sightName
      this.gallaryImgs = gallaryImgs
      this.cardInfo = cardInfo
      this.recommendInfo = recommendInfo
      this.ticketInfo = ticketInfo
      this.commentInfo = commentInfo
    }
  }
}
</script>

<style  scoped>
.home-like-detail{
  height: 40rem;
}
</style>
