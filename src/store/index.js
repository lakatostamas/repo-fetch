import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    response: {
      items: [],
      statusCode: null
    },
    errorCode: '',
    lastRepoFetch: null
  },
  getters: {

  },
  actions: {
    fetch: ({commit}, {uri}) => {
      return window.fetch(uri).then(response => {
        response.json().then(items => commit('SET_RESPONSE', {items, statusCode: response.status}))
      }).catch(e => {
        throw new Error(e)
      })
    }
  },
  mutations: {
    SET_RESPONSE: (state, {items, statusCode}) => {
      console.log(items)
      Vue.set(state.response, 'items', items)
      Vue.set(state.response, 'statusCode', statusCode)
    }
  }
})
