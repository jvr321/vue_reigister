import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    letter:'',
    currentCity:localStorage.getItem('currentCity') ||'长沙'
  },
  mutations:{
    saveLetter(state, letter){
      state.letter = letter
    },
    saveCurrentCity(state, currentCity){
      state.currentCity = currentCity
      localStorage.setItem('currentCity', currentCity)
    }
  }
})
