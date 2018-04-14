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

export const setTransition = ({ commit }, transition) => {
  commit(types.SET_TRANSITION, transition)
}

export const toggleMobileNav = ({ commit }, mobileNavShow) => {
  commit(types.TOGGLE_MOBILENAV, mobileNavShow)
}

export const setWormholeCache = ({ commit }, wormholeCache) => {
  commit(types.SET_WORMHOLE_CACHE, wormholeCache)
}

export const setFireworkCache = ({ commit }, firework) => {
  commit(types.SET_FIREWORK_CACHE, firework)
}
