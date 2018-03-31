import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'

const store = () => new Vuex.Store({
  strict: false,
  // process.env.NODE_ENV !== 'development',
  actions,
  getters,
  state: state.state,
  mutations: state.mutations
})

export default store
