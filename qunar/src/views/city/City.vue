<template>
  <div class="city">
      <city-header></city-header>
      <city-search :cities='cities'></city-search>
      <city-list :hotCitys='hotCitys' :cities='cities'></city-list>
      <city-alphabet  :cities='cities'></city-alphabet>
  </div>
</template>

<script>
import {getCity} from '@/model'
import CityHeader from './base/CityHeader'
import CitySearch from './base/CitySearch'
import CityList from './base/CityList'
import CityAlphabet from './base/CityAlphabet' //字母表
export default {
  components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
  },
  data(){
    return {
      cities:[], 
      hotCitys:[]
    }
  },
  created(){
    this.getCityData()
  },
  methods:{
    async getCityData(){
      let {data:{cities, hotCitys}} = await getCity()
      this.cities = cities, 
      this.hotCitys = hotCitys
    }
  }
}
</script>

<style  scoped>

</style>
