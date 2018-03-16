<template>
  <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
    <p class="menu-label">
      目录
    </p>
    <ul class="menu-list">
      <li>
        <button class='myButt three'>
          经典系列
        </button>
      </li>
      <li>
        <button class='myButt three'>
          时尚系列
        </button>
      </li>
      <li>
        <button class='myButt three'>
          二次元系列
        </button>
      </li>
      <li>
        <button class='myButt three'>
          保养与配饰
        </button>
      </li>
    </ul>
  </aside>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapActions } from 'vuex'
  export default {

    props: {
      show: Boolean
    },

    data () {
      return {
        isReady: false
      }
    },

    mounted () {
      let route = this.$route
      if (route.name) {
        this.isReady = true
        this.shouldExpandMatchItem(route)
      }
    },

    computed: mapGetters({
      menu: 'menuitems'
    }),

    methods: {
      ...mapActions([
        'expandMenu'
      ]),

      isExpanded (item) {
        return item.meta.expanded
      },

      toggle (index, item) {
        this.expandMenu({
          index: index,
          expanded: !item.meta.expanded
        })
      },

      shouldExpandMatchItem (route) {
        let matched = route.matched
        let lastMatched = matched[matched.length - 1]
        let parent = lastMatched.parent || lastMatched
        const isParent = parent === lastMatched

        if (isParent) {
          const p = this.findParentFromMenu(route)
          if (p) {
            parent = p
          }
        }

        if ('expanded' in parent.meta && !isParent) {
          this.expandMenu({
            item: parent,
            expanded: true
          })
        }
      },

      generatePath (item, subItem) {
        return `${item.component ? item.path + '/' : ''}${subItem.path}`
      },

      findParentFromMenu (route) {
        const menu = this.menu
        for (let i = 0, l = menu.length; i < l; i++) {
          const item = menu[i]
          const k = item.children && item.children.length
          if (k) {
            for (let j = 0; j < k; j++) {
              if (item.children[j].name === route.name) {
                return item
              }
            }
          }
        }
      }
    },

    watch: {
      $route (route) {
        this.isReady = true
        this.shouldExpandMatchItem(route)
      }
    }

  }
</script>

<style lang="scss" type="text/scss">
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';
  .myButt {
    outline: none;
    font-family: Helvetica,sans-serif;
    color: #F44336;
    padding: 20px;
    display: block;
    margin: 25px auto;
    cursor: pointer;
    font-size: 15px;
    background-color: transparent;
    position: relative;
    border: 2px solid #fff;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
  }
  .three {
    color: #4a4a4a;
    border-color: transparent;
  }
  .three:before, .three:after {
    width: 0;
    height: 3px;
    content: " ";
    background-color: #F44336;
    position: absolute;
    top: 0;
    left: 50%;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
  }
  .three:after {
    top: 100%;
  }
  .three:hover {
    letter-spacing: 8px;
    color: #F44336;
  }
  .three:hover:before, .three:hover:after {
    width: 100%;
    left: 0;
  }
  .three:hover:after {
    width: 100%;
    left: 0;
  }

  .app-sidebar {
    padding: 0.75rem;
    color: #4a4a4a !important;
    font-size: 18px !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
    font-weight: 400 !important;
    line-height: 1.5 !important;
    position: fixed;
    top: 150px;
    left: 100px;
    bottom: 0;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% - 50px);
    z-index: 1024 - 1;
    background: transparent;
    border: none;
    overflow-y: auto;
    overflow-x: hidden;

  @include mobile() {
    transform: translate3d(-180px, 0, 0);
  }

  .icon {
    vertical-align: baseline;
  &.is-angle {
     position: absolute;
     right: 10px;
     transition: transform .377s ease;
   }
  }

  .menu-label {
    padding-left: 5px;
  }

  .menu-list {
  li a {
  &[aria-expanded="true"] {
  .is-angle {
    transform: rotate(180deg);
  }
  }
  }

  li a + ul {
    margin: 0 10px 0 15px;
  }
  }

  }
</style>
