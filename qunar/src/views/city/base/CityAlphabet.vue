<template>
  <div class="city-alphabet">
      <ul >
          <li class="alphabet-name" v-for="(cityCat,letter) in cities" :key='letter'
            @click='letterAddress(letter)'>{{letter}}</li>
      </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:['cities'],
    methods:{
        letterAddress(letter){
            this.$store.commit('letterTarget',letter)
        }
    }
}
</script>

<style lang='stylus'  scoped>
.city-alphabet
    position  fixed
    right 0
    width .4rem
    text-align center
    color red
    font-size .30rem
    font-weight bold
    .alphabet-name
        padding .14rem 0
</style>
