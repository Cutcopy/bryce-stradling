import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: {
      background: '#00ffc2',
      forground: '#E53592',
      backgroundOld: '#00ffc2',
      forgroundOld: '#E53592'
    }
  },
  getters: {
    getColors: state => state.colors
  },
  mutations: {
  }
})
