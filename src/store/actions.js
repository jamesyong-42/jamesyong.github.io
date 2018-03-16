import * as types from './mutation-types'

export const changeLan = ({ commit }, lan) => {
  commit(types.SET_LANGUAGE, lan)
}

export const setScrollBar = ({ commit }, scrollBar) => {
  commit(types.SET_SCROLLBAR, scrollBar)
}
export const setBlurNav = ({ commit }, blurNav) => {
  commit(types.SET_BLURNAV, blurNav)
}

