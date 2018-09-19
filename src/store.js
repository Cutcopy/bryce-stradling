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
    },
    range: 0,
  },
  getters: {
    getColors: state => state.colors,
    getRange: state => state.range,
  },
  mutations: {
    setRange: (state, options) => state.range = options
  },
  actions: {

  }
})
