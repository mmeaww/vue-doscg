import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const config = require('../config/config')

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

const api = axios.create({
  baseURL: `${config.apiPrefix}`,
  adapter: cache.adapter
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    direction: {}
  },
  mutations: {
    updateDirection (state, data) {
      state.direction = data
    }
  },
  actions: {
    getDirection ({ commit }, options) {
      // const url = `${config.apiPrefix}/finding-best-way`
      api.get(`http://localhost:3000/api/doscg/finding-best-way`).then(async (response) => {
        commit('updateDirection', response.data)
      }).catch(console.error)
    }
  }
})
