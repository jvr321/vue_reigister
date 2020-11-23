import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
       letter:'',
       cityListName:localStorage.getItem('cityListName')||'广州'
    },
    mutations:{
        letterTarget(state, letter){
            state.letter = letter
        },
        //保存citylist.vue的所有列表中被点击的城市名  并且保存到本地
        cityList(state,cityName){
            state.cityListName = cityName
            localStorage.setItem('cityListName', cityName)
        }
    }
})