<template>
  <section :class="['parallax-outer', scaleClass]" ref="block" :style="sectionStyle">
    <div
      :class="['parallax-inner', scaleClass]"
      ref="parallax"
      >
      <slot></slot>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">

  // 获取元素顶部与窗口顶部的相对位移
  function getElementViewTopOffset (scrollOffset, element) {
    let actualTop = element.offsetTop
    let current = element.offsetParent
    while (current !== null) {
      actualTop += current.offsetTop
      current = current.offsetParent
    }
    // return actualTop - window.pageYOffset
    return actualTop - scrollOffset
  }
  function addClass (obj, cls) {
    var objClass = obj.className
    // 获取 class 内容.
    var blank = (objClass !== '') ? ' ' : ''
    // 判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    var added = objClass + blank + cls
    // 组合原来的 class 和需要添加的 class.
    obj.className = added
    // 替换原来的 class.
  }
  function hasClass (obj, cls) {
    var objClass = obj.className
    // 获取 class 内容.
    return (objClass.indexOf(cls) !== -1)
  }
  function removeClass (obj, cls) {
    var objClass = ' ' + obj.className + ' '
    // 获取 class 内容, 并在首尾各加一个空格. ex) 'abc        bcd' -> ' abc        bcd '
    objClass = objClass.replace(/(\s+)/gi, ' ')
    // 将多余的空字符替换成一个空格. ex) ' abc        bcd ' -> ' abc bcd '
    var removed = objClass.replace(' ' + cls + ' ', ' ')
    // 在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    removed = removed.replace(/(^\s+)|(\s+$)/g, '')
    // 去掉首尾空格. ex) 'bcd ' -> 'bcd'
    obj.className = removed
    // 替换原来的 class.
  }
  export default {
    props: {
      scrollOffset: {
        default: 0,
        type: Number
      },
      sectionStyle: {},
      speedFactor: {
        default: 0.15,
        type: Number
      },
      breakpoint: {
        default: '(min-width: 968px)',
        type: String
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
        mediaQuery: null,
        block: null,
        accumulatedOffset: 0,
        lastSpeedFactor: 0,
        parallaxChildren: []
      }
    },
    computed: {

    },
    watch: {
      scrollOffset (val) {
        const vh = window.innerHeight / 100
        const offset = getElementViewTopOffset(val, this.block) / vh
        if (this.lastSpeedFactor !== this.speedFactor) {
          this.accumulatedOffset = this.accumulatedOffset + offset * (this.lastSpeedFactor - this.speedFactor)
        }
        // const parallaxOffset = (offset - this.oldOffset) * this.speedFactor
        const parallaxOffset = offset * this.speedFactor
        // console.log('parallaxViewTop', elementViewTopOffset, 'parallaxOffset', elementParallaxOffset)
        this.lastSpeedFactor = this.speedFactor
        // console.log(this.accumulatedOffset, parallaxOffset)
        if (this.parallaxChildren.length > 0) {
          // console.log('11111111', this.parallaxChildren)
          this.parallaxChildren.forEach((d) => {
            let parallaxoffset = 0
            let leftoffset = 0
            if (d.dataset.leftoffset) {
              let os = offset - d.dataset.leftoffsetorigin
              if (os <= 0) {
                if (os >= d.dataset.leftoffset) {
                  leftoffset = os
                } else {
                  leftoffset = d.dataset.leftoffset
                }
              }
            }
            console.log('###############', offset)
            if (d.dataset.startsign <= offset) {
              console.log('beginning')
            } else if (d.dataset.stopsign <= offset) {
              parallaxoffset = (offset - parseInt(d.dataset.startsign)) * d.dataset.parallaxfactor
              if (hasClass(d, d.dataset.stopclass)) {
                removeClass(d, d.dataset.stopclass)
              }
            } else if (d.dataset.restartsign <= offset) {
              parallaxoffset = (parseInt(d.dataset.stopsign) - parseInt(d.dataset.startsign)) * d.dataset.parallaxfactor
              if (!hasClass(d, d.dataset.stopclass)) {
                addClass(d, d.dataset.stopclass)
              }
            } else {
              parallaxoffset = (offset - parseInt(d.dataset.restartsign) + parseInt(d.dataset.stopsign) - parseInt(d.dataset.startsign)) * d.dataset.parallaxfactor
              if (hasClass(d, d.dataset.stopclass)) {
                removeClass(d, d.dataset.stopclass)
              }
            }

            d.style.transform = `translate3d(${leftoffset}vh, ${parallaxoffset + parseInt(d.dataset.originoffset)}vh ,0)`

          })
        }
        this.el.style.transform = `translate3d(0, ${-offset + this.accumulatedOffset + parallaxOffset}vh ,0)`
      }
    },
    mounted () {
      this.el = this.$refs.parallax
      this.init()
      this.block = this.$refs.block
      this.lastSpeedFactor = this.speedFactor
      // console.log('11111111', this.el.childNodes)
      if (this.el.childNodes) {
        this.el.childNodes.forEach(d => {
          if (d.dataset) {
            if (d.dataset.parallaxfactor) {
              this.parallaxChildren.push(d)
              // console.log('22222222', this.parallaxChildren)
            }
            if (!d.dataset.stopclass) {
              d.dataset.stopclass = ''
              // console.log('22222222', this.parallaxChildren)
            }
          }
        })
      }
    },
    beforeDestroy () {

    },
    methods: {

      init () {

      }
    }
  }
</script>

<style lang="scss">

.parallax-outer {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  transform-style: preserve-3d;

}

.parallax-inner {
  left: 0;
  position: absolute;
  will-change: transform;
  right: 0;
  top: 0;
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}
.scale-1x {
  height: 100vh;
  max-width: none;
  width: 100%;
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
  /*-webkit-box-align: center;*/
  /*-ms-flex-align: center;*/
  /*align-items: center;*/
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  /*display: flex;*/
}
</style>
