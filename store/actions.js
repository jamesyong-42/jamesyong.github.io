import * as types from './mutation-types'

export const changeLan = ({ commit }, lan) => {
  commit(types.SET_LANGUAGE, lan)
}

export const setScrollBar = ({ commit }, scrollBar) => {
  commit(types.SET_SCROLLBAR, scrollBar)
}

export const setScrollOffset = ({ commit }, scrollOffset) => {
  commit(types.SET_SCROLLOFFSET, scrollOffset)
}

export const setBlurNav = ({ commit }, blurNav) => {
  commit(types.SET_BLURNAV, blurNav)
}

export const toggleMobileNav = ({ commit }, mobileNavShow) => {
  commit(types.TOGGLE_MOBILENAV, mobileNavShow)
}
