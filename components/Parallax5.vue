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
      actualTop: {
        default: 0,
        type: Number
      },
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
        block: null,
        accumulatedOffset: 0,
        parallaxChildrenLinear: [],
        parallaxChildrenEase: [],
        easing: null,
        easingMaps: []
      }
    },
    watch: {
      scrollOffset (val) {

        const offset = -val

        const parallaxOffset = offset * this.speedFactor

        const totalOffset = -offset + parallaxOffset

        this.parallaxChildrenEase.forEach((d) => {
          console.log('BBBBBBBBBBBBBBB', d)
          const speed = d.dataset.speed
          const anchor = d.dataset.anchor
          const parentOffset = d.offsetTop
          const windowHeight = window.innerHeight
          const length = windowHeight * speed
          let startOffset = parentOffset - length + (anchor - 50) / 100 * windowHeight
          if (startOffset < 0) {
            startOffset = 0
          }
          if (offset <= -startOffset) {
            // originOffset是正常滚距离，要对冲掉
            const originOffset = -startOffset - offset
            const originMoveProgress = originOffset / windowHeight
            // console.log('VVVVVVVVVVVVVVVV', originOffset, originMoveProgress)

            if (offset > -startOffset - windowHeight * 1.2) {

              const easedProgress = this.easingMaps[Math.round(originMoveProgress * 1000)]
              const remappedOffset = easedProgress * length
              d.dataset.progress = easedProgress
              // console.log('!!!!!!!!!!', originMoveProgress, this.easing(originMoveProgress), length)
              d.style.transform = `translate3d(0, ${(originOffset - remappedOffset).toFixed(1)}px ,0)`
              console.log('BBBBBBBBBBBBBBB', `translate3d(0, ${(originOffset - remappedOffset).toFixed(1)}px ,0)`)
            }


          }
        })
        this.parallaxChildrenLinear.forEach((d) => {
          const speed = d.dataset.speed
          const anchor = d.dataset.anchor
          const parentOffset = d.offsetTop
          const windowHeight = window.innerHeight
          const length = windowHeight * speed
          let startOffset = parentOffset - length + (anchor - 50) / 100 * windowHeight
          if (startOffset < 0) {
            startOffset = 0
          }
          if (offset <= -startOffset) {
            // originOffset是正常滚距离，要对冲掉
            const originOffset = -startOffset - offset
            const originMoveProgress = originOffset / windowHeight
            // console.log('VVVVVVVVVVVVVVVV', originOffset, originMoveProgress)

            const remappedOffset = originMoveProgress * length
            d.style.transform = `translate3d(${(parseInt(d.dataset.xoffset) * speed).toFixed(1)}px, ${(originOffset - remappedOffset).toFixed(1)}px ,0)`
            console.log('BBBBBBBBBBBBBBB', `translate3d(0, ${(originOffset - remappedOffset).toFixed(1)}px ,0)`)
          }
        })
        this.el.style.transform = `translate3d(0, ${totalOffset.toFixed(1)}px ,0)`
      }
    },
    computed: {
    },
    mounted () {
      this.init()
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
      preRender () {
        // const vh = window.innerHeight / 100

      },
      init () {
//        // nonstandard: Chrome, IE, Opera, Safari
  //      window.addEventListener('mousewheel', this.MouseWheelHandler, false)
//        // nonstandard: Firefox
//        window.addEventListener('DOMMouseScroll', this.MouseWheelHandler, false)

        this.el = this.$refs.parallax
        this.block = this.$refs.block
        this.easing = BezierEasing(0.40, 0.94, 0.59, 0.09)
        let easingMaps = []
        for (let i = 0; i < 1201; i++) {
          easingMaps.push(this.easing(i / 1000))
        }
        this.easingMaps = easingMaps


        console.log('BBBBBBBBBBBBBBB', this.el.childNodes, this.el.children)
        if (this.el.childNodes) {
          console.log('BBBBBBBBBBBBBBB000000000000000000')
          this.el.childNodes.forEach(d => {
            console.log('BBBBBBBBBBBBBBB', d.dataset)
            if (d.dataset) {
              console.log('BBBBBBBBBBBBBBB', d.dataset)
              if (d.dataset.speed) {
                console.log('BBBBBBBBBBBBBBB', d.dataset.speedcurve)
                if (!d.dataset.anchor) {
                  d.dataset.anchor = 50
                }
                if (!d.dataset.xoffset) {
                  d.dataset.xoffset = 0
                }
                switch (d.dataset.speedcurve) {
                  case 'ease': {
                    this.parallaxChildrenEase.push(d)
                    break
                  }
                  case 'linear': {

                    this.parallaxChildrenLinear.push(d)

                    break
                  }
                }

              }

            }
          })
        }

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
