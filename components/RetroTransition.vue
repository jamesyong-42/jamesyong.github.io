<template>
  <div id="container">
    <div v-if="routeTo === '/projects'" id="projects-pl" class="bg-placeholder">
      <projects-loading-placeholder></projects-loading-placeholder>
    </div>
    <div v-if="routeTo === '/cv'" id="cv-pl" class="bg-placeholder">
      <cv-loading-placeholder></cv-loading-placeholder>
    </div>
    <canvas id="retroTransition">
    </canvas>
  </div>

</template>
<script type="text/ecmascript-6">
  import { mapActions, mapGetters } from 'vuex'
  import ProjectsLoadingPlaceholder from '~/components/ProjectsLoadingPlaceholder.vue'
  import CvLoadingPlaceholder from '~/components/CvLoadingPlaceholder.vue'
  import html2canvas from 'html2canvas'
  export default {
    components: {
      ProjectsLoadingPlaceholder,
      CvLoadingPlaceholder
    },
    props: {
      progress: Number,
      routeTo: String,
      callback: Function

    },

    data () {
      return {
        width: 0,
        height: 0,
        rectWidth: 25,
        rectHeight: 25,
        speed: 25,
        canvas: null,
        ctx: null,
        cords: null,
        bgClr: 'rgba(28, 250, 255, 0.5)',
        bgClrTest: [0, 0, 0, 0],
        neonColor: ['#fb9367', '#f92581', '#b314ba', '#528efc', '#33c6fa', '#528efc', '#b314ba', '#f92581', '#fb9367'],
        screenshotReady: false,
        circleDone: false,
        container: null
      }
    },
    computed: {
      ...mapGetters({
        scrollBar: 'scrollBar'
      }),
      bgColorTest () {
        const rgb =  this.hex2Rgb(this.bgColor)
        return [rgb.r, rgb.g, rgb.b, 255]
      }
    },
    mounted () {
      this.init()

    },
    beforeDestroy () {

    },

    methods: {
      ...mapActions({
        setTransition: 'setTransition'
      }),
      hex2Rgb (hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null
      },
      open (callback) {

        const cords = {
          x: this.width / 2,
          y: this.height / 2
        }
        const self = this

        this.neonCircle(cords.x, cords.y, self.bgClrTest)

        setTimeout(function () {
          self.clearCircle(cords.x, cords.y, self.bgClrTest, callback)
        }, 100)
      },

      init () {
        this.width = window.innerWidth
        this.height = window.innerHeight
        const wid = Math.max(window.innerWidth * 0.02, 15)
        this.rectWidth = wid
        this.rectHeight = wid
        this.speed = wid
        this.canvas = document.getElementById('retroTransition')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = this.width
        this.canvas.height = this.height



        const options = {
          canvas: this.canvas,
          scrollY: this.scrollBar.offset.y
        }
        const self = this

        switch (this.routeTo) {
          case '/projects': {
            this.bgEl = document.getElementById('projects-pl')
            break
          }
          case '/cv': {
            this.bgEl = document.getElementById('cv-pl')
            break
          }
        }

        if (self.bgEl) {
          self.bgEl.style.opacity = 1
        }
        self.open(() => {

          self.callback()

        })

//        this.container = document.getElementById('container')
//
//        html2canvas(this.scrollBar.contentEl, options).then(() => {
//          // this.container.style.opacity = 1
//          if (self.bgEl) {
//            self.bgEl.style.opacity = 1
//          }
//          self.open(() => {
//
//            self.callback()
//
//          })
////          setTimeout(() => {
////
////          }, 1000)
//
//        })
      },

      drawRect (x, y, fill) {
        this.ctx.fillStyle = fill
        this.ctx.fillRect(Math.floor(x), Math.floor(y), this.rectWidth, this.rectHeight)
      },

      clearRect (x, y) {
        this.ctx.clearRect(Math.floor(x), Math.floor(y), this.rectWidth, this.rectHeight)
      },

      distributeRects (spawnX, spawnY, radius, elemCount, fill) {
        //    var width = this.width
        //    var height = this.height
        let angle = 0
        const step = (2 * Math.PI) / elemCount

        for (let i = 0; i < elemCount; i++) {
          const x = spawnX + radius * Math.cos(angle) - this.rectWidth / 2
          const y = spawnY + radius * Math.sin(angle) - this.rectHeight / 2
          this.drawRect(x, y, fill)
          angle += step
        }
      },

      distributeClearRects (spawnX, spawnY, radius, elemCount) {

        let angle = 0
        const step = (2 * Math.PI) / elemCount

        for (let i = 0; i < elemCount; i++) {
          const x = spawnX + radius * Math.cos(angle) - this.rectWidth / 2
          const y = spawnY + radius * Math.sin(angle) - this.rectHeight / 2
          this.clearRect(x, y)
          angle += step
        }
      },
//      spawnCircle (x, y, fill, finishColor, callback) {
//        let count = 0
//        let colorCount = 0
//        let tempColor
//        const offset = 0.5
//        const self = this
//
//        function draw (timestamp, finishColor, callback) {
//          if (fill === 'random') {
//            if (colorCount === 9) {
//              colorCount = 0
//            }
//            // tempColor = randomColor({hue: 'purple'})
//            tempColor = self.neonColor[colorCount]
//            colorCount++
//          } else {
//            tempColor = fill
//          }
//
//          self.distributeRects(x, y, self.rectWidth * count * offset, 4 * count, tempColor)
//
//          if (self.checkDone(finishColor)) {
//            if (callback && typeof (callback) === 'function') callback()
//          } else {
//            count++
//            requestAnimationFrame(function (timestamp) {
//              draw(timestamp, finishColor, callback)
//              console.log('FFFFFFFFFFFFFFFFFFFFFin')
//            })
//          }
//        }
//        requestAnimationFrame(function (timestamp) {
//          draw(timestamp, finishColor, callback)
//          console.log('FFFFFFFFFFFFFFFFFFFFFin')
//        })
//      },
      neonCircle (x, y, finishColor, callback) {
        let count = 0
        let colorCount = 0
        let tempColor
        const offset = 0.5
        const self = this

        function draw (timestamp, finishColor, callback) {

          if (colorCount === 9) {
            colorCount = 0
          }
          // tempColor = randomColor({hue: 'purple'})
          tempColor = self.neonColor[colorCount]
          colorCount++

          const radius = self.rectWidth * count * offset
          const ratioW = Math.min(1, radius * 2 / self.width)
          const ratioH = Math.min(1, radius * 2 / self.height)
          const w = self.width * ratioW
          const h = self.height * ratioH
          // console.log('OOOOOOOOOO', x, y, w, h, `translate3d(${x - w / 2}px, ${y - h / 2}px, 0) scale(${ratioW}, ${ratioH})`)
          // self.bgEl.style.transform = `scale(${ratioW}, ${ratioH})`

          self.bgEl.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`


          self.distributeRects(x, y, radius, 4 * count, tempColor)

          if (self.circleDone) {
            if (callback && typeof (callback) === 'function') callback()
          } else {
            count++
            requestAnimationFrame(function (timestamp) {
              draw(timestamp, finishColor, callback)
              // console.log('FFFFFFFFFFFFFFFFFFFFFin')
            })
          }
        }
        requestAnimationFrame(function (timestamp) {
          draw(timestamp, finishColor, callback)
          // console.log('FFFFFFFFFFFFFFFFFFFFFin')
        })
      },

      clearCircle (x, y, finishColor, callback) {
        let count = 0
        const offset = 0.5
        const self = this

        function draw (timestamp, finishColor, callback) {

          const radius = self.rectWidth * count * offset
          const ratioW = Math.min(1, radius * 2 / self.width)
          const ratioH = Math.min(1, radius * 2 / self.height)
          const w = self.width * ratioW
          const h = self.height * ratioH
          // console.log('OOOOOOOOOO', x, y, w, h, `translate3d(${x - w / 2}px, ${y - h / 2}px, 0) scale(${ratioW}, ${ratioH})`)
          // self.bgEl.style.transform = `scale(${ratioW}, ${ratioH})`

          // self.bgEl.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`


          self.distributeClearRects(x, y, radius, 4 * count)

          if (self.checkDone(radius)) {
            self.circleDone = true
            if (callback && typeof (callback) === 'function') callback()
          } else {
            count++
            requestAnimationFrame(function (timestamp) {
              draw(timestamp, finishColor, callback)
              // console.log('FFFFFFFFFFFFFFFFFFFFFin')
            })
          }
        }
        requestAnimationFrame(function (timestamp) {
          draw(timestamp, finishColor, callback)
          // console.log('FFFFFFFFFFFFFFFFFFFFFin')
        })
      },

//      checkDone (finishColor) {
//        const topLeftSensor = this.ctx.getImageData(0, 0, 1, 1).data
//        const topRightSensor = this.ctx.getImageData(this.width - 1, 0, 1, 1).data
//        const bottomRightSensor = this.ctx.getImageData(this.width - 1, this.height - 1, 1, 1).data
//        const bottomLeftSensor = this.ctx.getImageData(0, this.height - 1, 1, 1).data
//        let diff = topLeftSensor[0] + topRightSensor[0] + bottomRightSensor[0] + bottomLeftSensor[0] - finishColor[0] * 4 + topLeftSensor[1] + topRightSensor[1] + bottomRightSensor[1] + bottomLeftSensor[1] - finishColor[1] * 4 + topLeftSensor[2] + topRightSensor[2] + bottomRightSensor[2] + bottomLeftSensor[2] - finishColor[2] * 4 + topLeftSensor[3] + topRightSensor[3] + bottomRightSensor[3] + bottomLeftSensor[3] - finishColor[3] * 4
//        diff = Math.abs(diff)
//        if (diff < 10) {
//          return true
//        }
//      },
      checkDone (radius) {
        const rMax = Math.max(this.width, this.height) / 2 * 1.5
        if (radius > rMax) {
          return true
        }
      },
      destroy () {
//        const canvas = document.getElementById('retroTransition')
//        canvas.parentNode.removeChild(canvas)
      }
    }
  }
</script>

<style lang="scss">
 #container {
   opacity: 1;
   -webkit-transition: opacity 1s;
   -moz-transition: opacity 1s;
   -ms-transition: opacity 1s;
   -o-transition: opacity 1s;
   transition: opacity 1s;
 }
 #retroTransition {
   z-index: 8;
   top: 0;
   left: 0;
   position: fixed;
 }
 .bg-placeholder {
   opacity:0;
   width: 100vw;
   height: 100vh;
   position: fixed;
   left: 0;
   top: 0;
   z-index: 7;
   filter: blur(15px);
   transform-origin: 50% 50%;
 }

</style>
