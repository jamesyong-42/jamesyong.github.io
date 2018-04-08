<template>
  <div class="Home">
    <div class="Home__StarBG">
      <div class="Home__StarBG__TinyStars" data-depth="0.25"></div>
      <div class="Home__StarBG__MidStars" data-depth="0.85"></div>
      <div class="Home__StarBG__BigStars" data-depth="2.15"></div>
    </div>
    <div class="Home__Logo hover-box" id="hover-box">
      <img class="hover-content" id="logo-J" :style="hoverContentStyle1" src="/J.svg"/>
      <img class="hover-content" id="logo-ames" :style="hoverContentStyle2" src="/ames.svg"/>
      <img class="hover-content" id="logo-Y" :style="hoverContentStyle3" src="/Y.svg"/>
      <img class="hover-content" id="logo-ong" :style="hoverContentStyle4" src="/ong.svg"/>
      <img class="hover-content" id="logo-42" :style="hoverContentStyle5" src="/42.svg"/>
    </div>
  </div>
</template>

<script>
  import Parallax from 'parallax-js'
  import requestAnimationFrame from 'raf'
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

        // retro transition
        width: 0,
        height: 0,
        rectWidth: 25,
        rectHeight: 25,
        speed: 25,
        canvas: null,
        ctx: null,
        cords: null,
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
      this.elem = document.getElementById('hover-box')
      this.offsetTop = this.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop - document.documentElement.clientTop
      this.offsetLeft = this.elem.getBoundingClientRect().left + window.pageXOffset || document.documentElement.scrollLeft - document.documentElement.clientLeft
      document.addEventListener('mousemove', this.mouseMoving)

      const BG = document.querySelector('.Home__StarBG')
      const parallaxBG = new Parallax(BG)
      console.log(parallaxBG)
    },

    beforeRouteLeave (to, from, next) {
      console.log('sdasdasd')
      document.removeEventListener('mousemove', this.mouseMoving)
      this.$store.dispatch('toggleMobileNav', false)
      if (!this.switching) {
        this.switching = true
        this.init()
        var self = this
        this.open(function () {
          self.switching = false
          self.destroy()
          console.log('its on!')
          next()
        })
      }
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
      },
      // retro transition
      iconClick (e) {
        e.preventDefault()
        if (!this.switching) {
          this.switching = true
          this.init()
          var self = this
          if (!self.switchOn) {
            this.open(e, function () {
              self.switching = false
              self.turnOnSwitch()
              self.destroy()
              console.log('its on!')
            })
          } else {
            this.close(e, function () {
              self.switching = false
              self.turnOffSwitch()
              self.destroy()
              console.log('its off!')
            })
          }
        }
      },
      open (callback) {
        let elem = document.getElementById('hover-box')
        var rect = elem.getBoundingClientRect()
        var cords = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        }
        var self = this

        this.spawnCircle(cords.x, cords.y, 'random', self.switchOnColorArr)

        setTimeout(function () {
          self.spawnCircle(cords.x, cords.y, self.switchOnColor, self.switchOnColorArr, callback)
        }, 100)
      },
      close (e, callback) {
        var rect = e.target.getBoundingClientRect()
        var cords = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        }
        var self = this

        this.spawnCircle(cords.x, cords.y, 'random', self.switchOffColorArr)

        setTimeout(function () {
          self.spawnCircle(cords.x, cords.y, self.switchOffColor, self.switchOffColorArr, callback)
        }, 100)
      },
      init () {
        this.width = window.innerWidth
        this.height = window.innerHeight
        var wid = Math.max(window.innerWidth * 0.02, 15)
        this.rectWidth = wid
        this.rectHeight = wid
        this.speed = wid
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')

        this.canvas.id = 'pixel-overlay'
        this.canvas.style.zIndex = 8
        this.canvas.style.top = 0
        this.canvas.style.left = 0
        this.canvas.style.position = 'fixed'

        document.body.appendChild(this.canvas)

        this.ctx.canvas.width = this.width
        this.ctx.canvas.height = this.height
      },
      drawRect (x, y, fill) {
        this.ctx.fillStyle = fill
        this.ctx.fillRect(x, y, this.rectWidth, this.rectHeight)
      },
      distributeRects (spawnX, spawnY, radius, elemCount, fill) {
        //    var width = this.width
        //    var height = this.height
        var angle = 0
        var step = (2 * Math.PI) / elemCount

        for (var i = 0; i < elemCount; i++) {
          var x = spawnX + radius * Math.cos(angle) - this.rectWidth / 2
          var y = spawnY + radius * Math.sin(angle) - this.rectHeight / 2
          this.drawRect(x, y, fill)
          angle += step
        }
      },
      spawnCircle (x, y, fill, finishColor, callback) {
        var count = 0
        var colorCount = 0
        var tempColor
        var offset = 0.5
        var self = this

        function draw (timestamp, finishColor, callback) {
          if (fill === 'random') {
            if (colorCount === 9) {
              colorCount = 0
            }
            // tempColor = randomColor({hue: 'purple'})
            tempColor = self.neonColor[colorCount]
            colorCount++
          } else {
            tempColor = fill
          }

          self.distributeRects(x, y, self.rectWidth * count * offset, 4 * count, tempColor)

          if (self.checkDone(finishColor)) {
            if (callback && typeof (callback) === 'function') callback()
          } else {
            count++
            requestAnimationFrame(function (timestamp) {
              draw(timestamp, finishColor, callback)
            })
          }
        }
        requestAnimationFrame(function (timestamp) {
          draw(timestamp, finishColor, callback)
        })
      },
      checkDone (finishColor) {
        var topLeftSensor = this.ctx.getImageData(0, 0, 1, 1).data
        var topRightSensor = this.ctx.getImageData(this.width - 1, 0, 1, 1).data
        var bottomRightSensor = this.ctx.getImageData(this.width - 1, this.height - 1, 1, 1).data
        var bottomLeftSensor = this.ctx.getImageData(0, this.height - 1, 1, 1).data
        var diff = topLeftSensor[0] + topRightSensor[0] + bottomRightSensor[0] + bottomLeftSensor[0] - finishColor[0] * 4 + topLeftSensor[1] + topRightSensor[1] + bottomRightSensor[1] + bottomLeftSensor[1] - finishColor[1] * 4 + topLeftSensor[2] + topRightSensor[2] + bottomRightSensor[2] + bottomLeftSensor[2] - finishColor[2] * 4 + topLeftSensor[3] + topRightSensor[3] + bottomRightSensor[3] + bottomLeftSensor[3] - finishColor[3] * 4
        diff = Math.abs(diff)
        if (diff < 10) {
          return true
        }
      },
      destroy () {
        var canvas = document.getElementById('pixel-overlay')
        canvas.parentNode.removeChild(canvas)
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

  #logo-J {
    width: $logo-J-width;
    top: $logo-J-top;
    left: $logo-J-left;
    z-index: 9;
  }
  #logo-ames {
    width: $logo-ames-width;
    top: $logo-ames-top;
    left: $logo-ames-left;
    z-index: 5;
  }
  #logo-Y {
    width: $logo-Y-width;
    top: $logo-Y-top;
    left: $logo-Y-left;
    z-index: 4;
  }
  #logo-ong {
    width: $logo-ong-width;
    top: $logo-ong-top;
    left: $logo-ong-left;
    z-index: 9;
  }
  #logo-42 {
    width: $logo-42-width;
    top: $logo-42-top;
    left: $logo-42-left;
    z-index: 8;
  }



</style>
