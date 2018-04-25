<template>
  <section class="app-main">
    <div class="app-content" id="smooth-scrollbar">
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <nuxt-child/>
      </transition>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import Scrollbar from 'smooth-scrollbar'

  import { mapActions, mapGetters } from 'vuex'
  export default {

    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        scrollBar: 'scrollBar',
        scrollBarOptions: 'scrollBarOptions',
        transition: 'transition'
      })
    },
    mounted () {
      this.scrollEl = document.getElementById('smooth-scrollbar')
      this.scrollEl.style.height = `${window.innerHeight}px`
      let scrollBar = Scrollbar.get(document.querySelector('#smooth-scrollbar'))
      if (!scrollBar) {
        scrollBar = Scrollbar.init(document.querySelector('#smooth-scrollbar'), this.scrollBarOptions)
      }

      this.setScrollBar(scrollBar)
      this.scrollBar.addListener((status) => {
        this.setScrollOffset(status.offset.y)
      })
      window.addEventListener('resize', this.resizeHandler)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.resizeHandler)
    },
    beforeMount () {
//      const handler2 = () => {
//        console.log(document.documentElement.scrollTop)
//      }
//      document.addEventListener('onscroll', handler2)
    },
    methods: {
      ...mapActions({
        setScrollBar: 'setScrollBar',
        setScrollOffset: 'setScrollOffset'
      }),
      resizeHandler () {
        this.scrollEl.style.height = `${window.innerHeight}px`
      },
    }
  }

</script>

<style lang="scss">
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';

  .app-main {
    padding-top: 0;
    transform: translate3d(0, 0, 0);

    @include mobile() {
      margin-left: 0;
    }

  }
  #smooth-scrollbar {

    overflow: auto;
  }
  .app-content {
    padding: 0;
  }
</style>
