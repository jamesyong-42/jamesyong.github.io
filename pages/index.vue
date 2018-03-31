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
  import { mapActions } from 'vuex'
  function easeOut (t, b, c, d) {
    t /= d
    var m = -c * t * (t - 2) + b
    // console.log(t, b, c, d, m)
    return m
  }
  export default {
    data () {
      return {
        interval: null, // scroll is being eased
        mult: 0, // how fast do we scroll
        dir: 0, // 1 = scroll down, -1 = scroll up
        steps: 50, // how many steps in animation
        length: 30 // how long to animate
      }
    },
    mounted () {
      // nonstandard: Chrome, IE, Opera, Safari
      // window.addEventListener('mousewheel', this.MouseWheelHandler, false)
      // nonstandard: Firefox
      // window.addEventListener('DOMMouseScroll', this.MouseWheelHandler, false)
      let scrollBar = Scrollbar.get(document.querySelector('#smooth-scrollbar'))
      if (!scrollBar) {
        scrollBar = Scrollbar.init(document.querySelector('#smooth-scrollbar'), this.scrollBarOptions)
      }
      this.setScrollBar(scrollBar)
    },
    beforeMount () {
      const handler2 = () => {
        console.log(document.documentElement.scrollTop)
      }
      document.addEventListener('onscroll', handler2)
    },
    methods: {
      ...mapActions({
        setScrollBar: 'setScrollBar',
        scrollBarOptions: 'scrollBarOptions'
      }),
      MouseWheelHandler (e) {
        e.preventDefault() // prevent default browser scroll
        if (this.interval) {
          clearInterval(this.interval) // cancel previous animation
        }
        ++this.mult // we are going to scroll faster
        let delta = -Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) // cross-browser
        if (this.dir !== delta) { // scroll direction changed
          this.mult = 1 // start slowly
          this.dir = delta
        }
        // in this cycle, we determine which element to scroll
//        for (var tgt = e.target; tgt !== document.documentElement; tgt = tgt.parentNode) {
//          var oldScroll = tgt.scrollTop
//          tgt.scrollTop += delta
//          if (oldScroll !== tgt.scrollTop) break
//          // else the element can't be scrolled, try its parent in next iteration
//        }
//        console.log(tgt)
        // Internet Explorer 6-11
        let isIE = !!document.documentMode
        let tgt = document.documentElement
        if (isIE) {
          tgt = document.documentElement
        }
        // var tgt = document.body
        let start = tgt.scrollTop
        let end = start + this.length * this.mult * delta // where to end the scroll
        let change = end - start // base change in one step
        let step = 0 // current step
        const that = this
        this.interval = setInterval(function () {
          console.log(tgt)
          console.log('wwwww', step++, start, change, that.steps)
          let pos = easeOut(step++, start, change, that.steps) // calculate next step
          console.log(pos)
          tgt.scrollTop = pos // scroll the target to next step
          if (step >= that.steps) { // scroll finished without speed up - stop animation
            that.mult = 0 // next scroll will start slowly
            clearInterval(that.interval)
          }
        }, 10)
      }
    }
  }

</script>

<style lang="scss">
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';
  body.bespoke{
    background-image: -webkit-linear-gradient(315deg, #5E1F68 0%, #2A1E73 100%);
    background-image: linear-gradient(135deg, #5E1F68 0%, #2A1E73 100%);
  }
  body.login{
    background-image: -webkit-linear-gradient(315deg, #5E1F68 0%, #2A1E73 100%);
    background-image: linear-gradient(135deg, #5E1F68 0%, #2A1E73 100%);
  }
  .app-main {
    padding-top: 0;
    transform: translate3d(0, 0, 0);

    @include mobile() {
      margin-left: 0;
    }

  }
  #smooth-scrollbar {
    height: 100vh;
    overflow: auto;
  }
  .app-content {
    padding: 0;
  }
</style>
