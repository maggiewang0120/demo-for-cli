import Vue from 'vue'
import Vuex from 'vuex'
// import { store } from './store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numbers:[4,3,2,4,5],
    clock:11,
    one:12,
    two:2,
    three:3
  },
  mutations: {
    ADD_NUMBER(state,payload){
      state.numbers.push(payload)
    }
  },
  actions: {
    // context 是一個物件，裡面可以讓你使用
    // store中的commit、getter或是state屬性
    addNumber(context,number) {
      context.commit("ADD_NUMBER", number)
    }
  },
  getters: {
    sortedNumbers(state) {
      return state.numbers.sort((a, b) => a - b)
    },
},

})
