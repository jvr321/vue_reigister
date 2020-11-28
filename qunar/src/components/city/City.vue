<template>
    <div class="city">
        <city-header></city-header>
        <city-intake :cities="cities"></city-intake>
        <city-list :hotCitys="hotCitys" :cities="cities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import {getCity} from "@/api"
    import CityHeader from './base/CityHeader'
    import CityIntake from './base/Intake'
    import CityList from './base/List'
    import CityAlphabet from './base/Alphabet'
    export default {
        name:'City',
        data() {
            return {
              cities:[],
              hotCitys:[]
            }
        },
        created(){
          this.cityData()
        },
        methods:{
          async cityData(){
            let {data:{cities, hotCitys}} = await getCity()
            this.cities = cities
            this.hotCitys = hotCitys
          }
        },
        components:{
          CityHeader,
          CityIntake,
          CityList,
          CityAlphabet
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style scoped>

</style>
