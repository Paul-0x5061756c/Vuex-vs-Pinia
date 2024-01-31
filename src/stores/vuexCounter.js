import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    doubleCountFromState : (state) => state.count * 2
  },
  getters: {
    doubleCount: (state) => state.count * 2
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({commit}) {
      commit('increment')
    }
  }
});