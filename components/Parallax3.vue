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

  import BezierEasing from 'bezier-easing'
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
//  function addClass (obj, cls) {
//    var objClass = obj.className
//    // 获取 class 内容.
//    var blank = (objClass !== '') ? ' ' : ''
//    // 判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
//    var added = objClass + blank + cls
//    // 组合原来的 class 和需要添加的 class.
//    obj.className = added
//    // 替换原来的 class.
//  }
//  function hasClass (obj, cls) {
//    var objClass = obj.className
//    // 获取 class 内容.
//    return (objClass.indexOf(cls) !== -1)
//  }
//  function removeClass (obj, cls) {
//    var objClass = ' ' + obj.className + ' '
//    // 获取 class 内容, 并在首尾各加一个空格. ex) 'abc        bcd' -> ' abc        bcd '
//    objClass = objClass.replace(/(\s+)/gi, ' ')
//    // 将多余的空字符替换成一个空格. ex) ' abc        bcd ' -> ' abc bcd '
//    var removed = objClass.replace(' ' + cls + ' ', ' ')
//    // 在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
//    removed = removed.replace(/(^\s+)|(\s+$)/g, '')
//    // 去掉首尾空格. ex) 'bcd ' -> 'bcd'
//    obj.className = removed
//    // 替换原来的 class.
//  }
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
        parallaxChildren: [],
        easing: null
      }
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
        const totalOffset = -offset + this.accumulatedOffset + parallaxOffset
        if (this.parallaxChildren.length > 0) {
          // console.log('11111111', this.parallaxChildren)
          this.parallaxChildren.forEach((d) => {
            const speed = d.dataset.speed
            const speedCurve = d.dataset.speedcurve
            const anchor = d.dataset.anchor
            const parentOffset = d.offsetTop
            const windowHeight = window.innerHeight
            const length = windowHeight * speed
            let startOffset = parentOffset - length + (anchor - 50) / 100 * windowHeight
            if (startOffset < 0) {
              startOffset = 0
            }
            const offsetvh = offset * vh
            if (offsetvh <= -startOffset) {
              // originOffset是正常滚距离，要对冲掉
              const originOffset = -startOffset - offsetvh
              const originMoveProgress = originOffset / windowHeight
              // console.log('VVVVVVVVVVVVVVVV', originOffset, originMoveProgress)
              switch (speedCurve) {
                case 'ease': {
                  if (offsetvh <= -startOffset - windowHeight * 1.2) break
                  const easedProgress = this.easing(originMoveProgress)
                  const remappedOffset = easedProgress * length
                  d.dataset.progress = easedProgress
                  // console.log('!!!!!!!!!!', originMoveProgress, this.easing(originMoveProgress), length)
                  d.style.transform = `translate3d(0, ${(originOffset - remappedOffset).toFixed(1)}px ,0)`
                  break
                }
                case 'linear': {
                  const remappedOffset = originMoveProgress * length
                  d.style.transform = `translate3d(${(parseInt(d.dataset.xoffset) * speed).toFixed(1)}px, ${(originOffset - remappedOffset).toFixed(1)}px ,0)`
                  break
                }
              }
            }
          })
        }
        this.el.style.transform = `translate3d(0, ${totalOffset.toFixed(2)}vh ,0)`
      }
    },
    computed: {
    },
    mounted () {
      this.el = this.$refs.parallax
      this.init()
      this.block = this.$refs.block
      this.lastSpeedFactor = this.speedFactor
      console.log('11111111', this.el.childNodes)
      if (this.el.childNodes) {
        this.el.childNodes.forEach(d => {
          if (d.dataset) {
            if (d.dataset.speed) {
              if (!d.dataset.anchor) {
                d.dataset.anchor = 50
              }
              if (!d.dataset.xoffset) {
                d.dataset.xoffset = 0
              }
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


//      setupListener () {
//        if (this.mediaQuery.matches) {
//          // window.addEventListener('scroll', this.scrollHandler, false)
//          const ssr = Scrollbar.get(document.querySelector('#smooth-scrollbar'))
//          ssr.addListener(this.scrollHandler)
//        } else {
//          // window.removeEventListener('scroll', this.scrollHandler, false)
//          const ssr = Scrollbar.get(document.querySelector('#smooth-scrollbar'))
//          ssr.removeListener(this.scrollHandler)
//        }
//      },

      init () {
//        // nonstandard: Chrome, IE, Opera, Safari
  //      window.addEventListener('mousewheel', this.MouseWheelHandler, false)
//        // nonstandard: Firefox
//        window.addEventListener('DOMMouseScroll', this.MouseWheelHandler, false)
        this.easing = BezierEasing(0.40, 0.94, 0.59, 0.09)
//        let ssr = Scrollbar.get(document.querySelector('#smooth-scrollbar'))
//        if (!ssr) {
//          ssr = Scrollbar.init(document.querySelector('#smooth-scrollbar'), this.scrollBarOptions)
//        }
//        this.scrollBar = ssr
//        ssr.addListener(this.scrollHandler)
//        this.setScrollBar(ssr)

//        this.mediaQuery = window.matchMedia(this.breakpoint)
//        console.log(this.mediaQuery)
//        if (this.mediaQuery) {
//          this.mediaQuery.addListener(this.setupListener)
//          this.setupListener()
//        }
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
