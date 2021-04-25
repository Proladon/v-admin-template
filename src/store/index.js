import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: false
  },
  mutations: {
    SHOW_MENU: (state, val) => {
      state.showMenu = val
    }
  },
  actions: {
  },
  modules: {
  }
})
