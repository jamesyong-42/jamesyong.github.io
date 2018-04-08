import * as types from './mutation-types'

const state = {

  language: 'ZH',
  // ZH/EN
  scrollBar: {},
  scrollOffset: 0,
  blurNav: {},
  mobileNavShow: false,
  scrollBarOptions: {
    damping: 0.02,
    thumbMinSize: 20,
    alwaysShowTracks: false,
    continuousScrolling: true,
    plugins: {overscroll: { enable: true,
      effect: 'bounce',
      damping: 0.2,
      maxOverscroll: 150}}
  }
}
const mutations = {

  [types.SET_LANGUAGE] (state, _lan) {
    state.language = _lan
  },
  [types.SET_SCROLLBAR] (state, scrollBar) {
    state.scrollBar = scrollBar
  },
  [types.SET_SCROLLOFFSET] (state, scrollOffset) {
    state.scrollOffset = scrollOffset
  },
  [types.SET_BLURNAV] (state, blurNav) {
    state.blurNav = blurNav
  },
  [types.TOGGLE_MOBILENAV] (state, mobileNavShow) {
    state.mobileNavShow = mobileNavShow
  }
}

export default {
  state,
  mutations
}
