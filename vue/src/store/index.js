import { createStore } from 'vuex'
import user from './modules/user'

export default createStore({
  state: {
    is_menuOpen: false
  },
  mutations: {
    OPEN_MENU(state) {
      state.is_menuOpen = true;
    },
    CLOSE_MENU(state) {
      state.is_menuOpen = false;
    },
  },
  actions: {
    //
  },
  getters: {
    //
  },
  modules: {
    user
  }
})
