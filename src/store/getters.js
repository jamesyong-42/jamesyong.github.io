const pkg = state => state.pkg
const app = state => state.app

const componententry = state => {
  return state.menu.items.filter(c => c.meta && c.meta.label === 'Components')[0]
}

const language = state => state.app.language
const scrollBar = state => state.app.scrollBar
const blurNav = state => state.app.blurNav
const scrollBarOptions = state => state.app.scrollBarOptions

export {
  pkg,
  app,
  componententry,
  language,
  scrollBar,
  blurNav,
  scrollBarOptions
}
