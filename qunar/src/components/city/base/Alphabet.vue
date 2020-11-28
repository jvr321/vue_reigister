<template>
    <div class="city-alphabet">
      <ul>
        <li v-for="citie,letter in cities"
            :key="letter"
            @click="HandleCilck(letter)">{{letter}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name:'City-Alphabet',
        props:['cities'],
        methods:{
          HandleCilck(letter){
            this.$store.commit('saveLetter', letter)
          }
        }
    }
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style lang="stylus" scoped>
  .city-alphabet
    position fixed
    display flex
    flex-direction column
    justify-content center
    right: 0
    top: 1.56rem
    bottom: 0
    width: .4rem
    li
      line-height .5rem
      text-align center
      color: red
      font-weight bold
</style>
