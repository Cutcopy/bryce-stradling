import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: {
      background: '#00ffc2',
      forground: '#ff003d',
      backgroundOld: '#00ffc2',
      forgroundOld: '#ff003d'
    }
  },
  getters: {
    getColors: state => state.colors,
  },
  mutations: {
  }
})
