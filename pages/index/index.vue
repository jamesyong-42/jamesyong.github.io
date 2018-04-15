<template>
  <div class="Home">
    <div class="Home__StarBG">
      <div class="Home__StarBG__TinyStars" data-depth="0.25"></div>
      <div class="Home__StarBG__MidStars" data-depth="0.85"></div>
      <div class="Home__StarBG__BigStars" data-depth="2.15"></div>
    </div>
    <div class="Home__Logo hover-box" id="hover-box">
      <div class="hover-content logo-sprite" id="logo-J" :style="hoverContentStyle1"></div>
      <div class="hover-content logo-sprite" id="logo-ames" :style="hoverContentStyle2"></div>
      <div class="hover-content logo-sprite" id="logo-Y" :style="hoverContentStyle3"></div>
      <div class="hover-content logo-sprite" id="logo-ong" :style="hoverContentStyle4"></div>
      <div class="hover-content logo-sprite" id="logo-42" :style="hoverContentStyle5"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Parallax from 'parallax-js'
  import requestAnimationFrame from 'raf'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
    },
    data () {
      return {
        bannerDeg: 15,
        offsetPercentY: 0,
        offsetPercentX: 0,
        isBannerOver: false,
        elem: null,
        offsetTop: 0,
        offsetLeft: 0,
        rotCoe: 0.8,


        // switchOn: false,
        switching: false,
        switchOnColor: '#1b195b',
        switchOffColor: '#ffffff',
        neonColor: ['#fb9367', '#f92581', '#b314ba', '#528efc', '#33c6fa', '#528efc', '#b314ba', '#f92581', '#fb9367'],
        switchOnColorArr: [27, 25, 91, 255],
        switchOffColorArr: [255, 255, 255, 255],
        starsTinyScale: 1.2,
        starsMidScale: 1.6,
        starsBigScale: 1.8,
        starsTinyNum: 300,
        starsMidNum: 150,
        starsBigNum: 50,
        starsTinyPos: [{}],
        starsMidPos: [],
        starsBigPos: [],
        starsTinyCoe: 0.025,
        starsMidCoe: 0.05,
        starsBigCoe: 0.2,
        mouseSpeed: 1,
        mouseX: -1,
        mouseY: -1
      }
    },
    computed: {
      ...mapGetters({
        lan: 'language',
        scrollBar: 'scrollBar'
      }),
      hoverContentStyle1 () {
        return {
          'transform': `rotateX(${this.bannerDeg * -this.offsetPercentY * this.rotCoe}deg) rotateY(${this.bannerDeg * this.offsetPercentX * this.rotCoe}deg)`
        }
      },
      hoverContentStyle2 () {
        return {
          'transform': `rotateX(${this.bannerDeg * this.offsetPercentY * this.rotCoe}deg) rotateY(${this.bannerDeg * -this.offsetPercentX * this.rotCoe}deg)`
        }
      },
      hoverContentStyle3 () {
        return {
          'transform': `rotateX(${this.bannerDeg * -this.offsetPercentY * this.rotCoe}deg) rotateY(${this.bannerDeg * -this.offsetPercentX * this.rotCoe}deg)`
        }
      },
      hoverContentStyle4 () {
        return {
          'transform': `rotateX(${this.bannerDeg * this.offsetPercentY * this.rotCoe}deg) rotateY(${this.bannerDeg * this.offsetPercentX * this.rotCoe}deg)`
        }
      },
      hoverContentStyle5 () {
        return {
          'transform': `rotateX(${this.bannerDeg * -this.offsetPercentY * this.rotCoe}deg) rotateY(${this.bannerDeg * this.offsetPercentX * this.rotCoe}deg)`
        }
      }
    },

    mounted () {
      const isDesktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i)
      if (isDesktop) {
        this.elem = document.getElementById('hover-box')
        this.offsetTop = this.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop - document.documentElement.clientTop
        this.offsetLeft = this.elem.getBoundingClientRect().left + window.pageXOffset || document.documentElement.scrollLeft - document.documentElement.clientLeft
        document.addEventListener('mousemove', this.mouseMoving)

        const BG = document.querySelector('.Home__StarBG')
        const parallaxBG = new Parallax(BG)

      }

    },

    beforeRouteLeave (to, from, next) {
      console.log('sdasdasd')
      document.removeEventListener('mousemove', this.mouseMoving)
      this.$store.dispatch('toggleMobileNav', false)

      this.$nuxt.$loading.start()

//      this.scrollBar.contentEl.style.filter = 'blur(10px)'
      this.$store.dispatch('setTransition', {
        on: true,
        to: to.fullPath,
        callback: () => {
//          this.scrollBar.contentEl.style.filter = 'blur(0)'
          next()
        }
      })


    },
    methods: {

      mouseMoving (e) {
        // console.log(e.pageX, e.pageY)
        let x = e.pageX
        let y = e.pageY
        this.mouseSpeed = Math.max(Math.abs(x - this.mouseX), Math.abs(y - this.mouseY))
        // console.log(this.mouseSpeed)
        this.mouseX = x
        this.mouseY = y
        let centerX = window.innerWidth / 2
        let centerY = window.innerHeight / 2
        let deltaX = x - centerX
        let deltaY = y - centerY
        this.offsetPercentX = deltaX / centerX
        this.offsetPercentY = deltaY / centerY
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";

  $logo-width: 50vmin;
  $logo-height: 0.81 * $logo-width;
  $logo-J-width: 0.358 * $logo-width;
  $logo-J-top: 0;
  $logo-J-left: 0;
  $logo-ames-width: 0.478 * $logo-width;
  $logo-ames-top: 0.209 * $logo-width;
  $logo-ames-left: 0.224 * $logo-width;
  $logo-Y-width: 0.239 * $logo-width;
  $logo-Y-top: 0.433 * $logo-width;
  $logo-Y-left: 0.254 * $logo-width;
  $logo-ong-width: 0.254 * $logo-width;
  $logo-ong-top: 0.433 * $logo-width;
  $logo-ong-left: 0.418 * $logo-width;
  $logo-42-width: 0.403 * $logo-width;
  $logo-42-top: 0.119 * $logo-width;
  $logo-42-left: 0.597 * $logo-width;
  .Home {
    width: 100%;
    min-height: 100vh;
    background-color: $mainBG;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    &__StarBG {
      position: fixed;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;

      &__TinyStars {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background: url("/stars-tiny.png");
      }
      &__MidStars {
        position: absolute;
        width: 120%;
        height: 120%;
        margin-left: -10%;
        margin-top: -10%;
        opacity: 0.6;
        background: url("/stars-mid.png");
      }
      &__BigStars {
        position: absolute;
        width: 200%;
        height: 200%;
        margin-left: -50%;
        margin-top: -50%;
        background: url("/stars-big.png");
      }
    }
    &__Logo {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      /* flex-grow: 1; */
      flex-shrink: 1;
      margin: auto;
      width:  $logo-width;
    }

  }



  .hover-box{
    min-height:  $logo-height;
    perspective: 1000px;
    cursor: crosshair;
  }
  .hover-content{
    position: absolute;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease;
  }



  $sprite-px: $logo-42-width / 423;

  .logo-sprite {
    background-image: url('/jamesyong42-sprite2.png');
    background-repeat: no-repeat;
    background-size: $sprite-px * 1054 $sprite-px * 1072;
    display: block;
  }

  #logo-J {
    width: 354 * $sprite-px;
    height: 557 * $sprite-px;
    background-position: -438 * $sprite-px -5 * $sprite-px;
    top: $logo-J-top;
    left: $logo-J-left;
    z-index: 9;
  }
  #logo-ames {
    width: 557 * $sprite-px;
    height: 326 * $sprite-px;
    background-position: -5 * $sprite-px -572 * $sprite-px;
    top: $logo-ames-top;
    left: $logo-ames-left;
    z-index: 5;
  }
  #logo-Y {
    width: 247 * $sprite-px;
    height: 384 * $sprite-px;
    background-position: -802 * $sprite-px -5 * $sprite-px;
    top: $logo-Y-top;
    left: $logo-Y-left;
    z-index: 4;
  }
  #logo-ong {
    width: 415 * $sprite-px;
    height: 495 * $sprite-px;
    background-position: -572 * $sprite-px -572 * $sprite-px;
    top: $logo-ong-top;
    left: $logo-ong-left;
    z-index: 9;
  }
  #logo-42 {
    width: $logo-42-width;
    height: $sprite-px * 459;
    background-position: -5 * $sprite-px -5 * $sprite-px;
    top: $logo-42-top;
    left: $logo-42-left;
    z-index: 8;
  }






</style>
