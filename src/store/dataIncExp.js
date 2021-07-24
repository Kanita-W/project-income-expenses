import Vue from 'vue'
import Vuex from 'vuex'
import json from "../../public/data.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: [],
  },

  getters: {
      dataIncExp: (state) => state.data,
  },

  mutations: {
    fetch (state, { res }) {
      state.data = res
    },

    submit(state, { payload }){
      state.data.push(payload)
    }
  },
  actions: {
    // commit เป็น keyword ใช้เรียก mutation
    async fetchdataIncExp( { commit }) {
      let res = json
      commit('fetch', { res })
    },

    submitData({ commit }, payload) {
      // call api to
      commit('submit', { payload })
    }
  },
  modules: {
  }
})
