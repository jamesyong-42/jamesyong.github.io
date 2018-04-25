<template>
  <section :class="['parallax-outer', scaleClass, isIOSSafari ? 'i-safari' : '']" ref="block" :style="sectionStyle">
    <div
      :class="['parallax-inner', scaleClass, isIOSSafari ? 'i-safari' : '']"
      ref="parallax"
      >
      <slot></slot>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">


  export default {
    props: {
      isIOSSafari: false,
      actualTop: {
        default: 0,
        type: Number
      },
      scrollOffset: {
        default: 0,
        type: Number
      },
      scrollBar: null,
      sectionStyle: {},
      speedFactor: {
        default: 0.15,
        type: Number
      },
      sectionHeight: {
        default: 70,
        type: Number,
        required: false
      },
      scaleClass: {
        type: String,
        default: 'scale-1x'
      }
    },

    data () {
      return {
        el: null,
        block: null,
        lastSpeedFactor: 0
      }
    },
    computed: {

    },
    watch: {
//      scrollOffset (val) {
//        const vh = window.innerHeight / 100
//        const offset = this.actualTop * vh - val
//        const parallaxOffset = offset * this.speedFactor
////        requestAnimationFrame(() => {
////
////        })
//
//        this.el.style.transform = `translate3d(0, ${-offset + parallaxOffset}px ,0)`
//      },
      // watch scrollOffset 的话会造成不同步，scrollbar自身listener才能同步
      scrollBar (val) {
        if (val) {
          val.addListener(this.scrollHandler)
        }

      }
    },
    mounted () {
      this.el = this.$refs.parallax
      this.init()
      this.block = this.$refs.block

    },
    beforeDestroy () {
      this.scrollBar.removeListener(this.scrollHandler)
    },
    methods: {

      init () {
        if (this.scrollBar.addListener) {
          this.scrollBar.addListener(this.scrollHandler)
        }

      },
      scrollHandler (status) {
        let vh = window.innerHeight / 100

        console.log('VBVBDFSDVSDSDF', status.offset.y, window.innerHeight, offset, this.scrollBar.size)
        const offset = this.actualTop * vh - status.offset.y
        const parallaxOffset = offset * this.speedFactor
        this.el.style.transform = `translate3d(0, ${-offset + parallaxOffset}px ,0)`
      }
    }
  }
</script>

<style lang="scss">
  $ios-ratio: 559/628;
.parallax-outer {
  position: relative;

  overflow: hidden;
  transform-style: preserve-3d;

}

.parallax-inner {
  left: 0;
  position: absolute;
  will-change: transform;
  right: 0;
  top: 0;
  // -webkit-transition-property: all;
  // transition-property: all;
  // -webkit-transition-timing-function: ease;
  // transition-timing-function: ease;
}
.scale-1x {
  height: 100vh;
  max-width: none;
  width: 100%;
  &.i-safari {
    height: 100vh*$ios-ratio;
  }
  /*-webkit-box-align: center;*/
  /*-ms-flex-align: center;*/
  /*align-items: center;*/
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  /*display: flex;*/
}
.scale-2x {
  height: 200vh;
  max-width: none;
  width: 100%;
  &.i-safari {
    height: 200vh*$ios-ratio;
  }
  /*-webkit-box-align: center;*/
  /*-ms-flex-align: center;*/
  /*align-items: center;*/
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  /*display: flex;*/
}
.scale-5x {
  height: 500vh;
  max-width: none;
  width: 100%;
  &.i-safari {
    height: 500vh*$ios-ratio;
  }
  /*-webkit-box-align: center;*/
  /*-ms-flex-align: center;*/
  /*align-items: center;*/
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  /*display: flex;*/
}
.scale-10x {
  height: 1000vh;
  max-width: none;
  width: 100%;
  &.i-safari {
    height: 1000vh*$ios-ratio;
  }
  /*-webkit-box-align: center;*/
  /*-ms-flex-align: center;*/
  /*align-items: center;*/
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  /*display: flex;*/
}
</style>
