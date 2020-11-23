<!--  -->
<template>
  <div>
      <detail-header ></detail-header>
      <list :weekendInfo='weekendInfo'></list>
  </div>
</template>

<script>
import {getHomeWeekendDetail} from '@/model'
import DetailHeader from './base/DetailHeader'
import List from './base/List'
export default {
    components:{
        DetailHeader,
        List
    },
    data(){
        return {
            weekendInfo:[]
        }
    },
    activated(){
        this.getHomeWeekendDetailData()
    },
    methods:{
        async getHomeWeekendDetailData(){
            const {weekendInfo} = await getHomeWeekendDetail(this.$route.params.id)
            this.weekendInfo = weekendInfo
        }
    }
}
</script>

<style  scoped>

</style>
