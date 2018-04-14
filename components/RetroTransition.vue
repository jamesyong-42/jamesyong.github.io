<template>
  <canvas id="retroTransition">
  </canvas>
</template>
<script type="text/ecmascript-6">
  import { mapActions, mapGetters } from 'vuex'
  export default {

    props: {
      progress: Number,
      bgColor: String,
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
        neonColor: ['#fb9367', '#f92581', '#b314ba', '#528efc', '#33c6fa', '#528efc', '#b314ba', '#f92581', '#fb9367']
      }
    },
    computed: {
      bgColorTest () {
        const rgb =  this.hex2Rgb(this.bgColor)
        return [rgb.r, rgb.g, rgb.b, 255]
      }
    },
    mounted () {
      this.init()
      const self = this
      this.open(() => {
//        self.destroy()
//        self.setTransition({
//          on: false,
//          color: ''
//        })
        self.callback()

      })
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

        this.spawnCircle(cords.x, cords.y, 'random', self.bgColorTest)

        setTimeout(function () {
          self.spawnCircle(cords.x, cords.y, self.bgColor, self.bgColorTest, callback)
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

        this.canvas.style.zIndex = 8
        this.canvas.style.top = 0
        this.canvas.style.left = 0
        this.canvas.style.position = 'fixed'


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
        let angle = 0
        const step = (2 * Math.PI) / elemCount

        for (let i = 0; i < elemCount; i++) {
          const x = spawnX + radius * Math.cos(angle) - this.rectWidth / 2
          const y = spawnY + radius * Math.sin(angle) - this.rectHeight / 2
          this.drawRect(x, y, fill)
          angle += step
        }
      },
      spawnCircle (x, y, fill, finishColor, callback) {
        let count = 0
        let colorCount = 0
        let tempColor
        const offset = 0.5
        const self = this

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
              console.log('FFFFFFFFFFFFFFFFFFFFFin')
            })
          }
        }
        requestAnimationFrame(function (timestamp) {
          draw(timestamp, finishColor, callback)
          console.log('FFFFFFFFFFFFFFFFFFFFFin')
        })
      },
      checkDone (finishColor) {
        const topLeftSensor = this.ctx.getImageData(0, 0, 1, 1).data
        const topRightSensor = this.ctx.getImageData(this.width - 1, 0, 1, 1).data
        const bottomRightSensor = this.ctx.getImageData(this.width - 1, this.height - 1, 1, 1).data
        const bottomLeftSensor = this.ctx.getImageData(0, this.height - 1, 1, 1).data
        let diff = topLeftSensor[0] + topRightSensor[0] + bottomRightSensor[0] + bottomLeftSensor[0] - finishColor[0] * 4 + topLeftSensor[1] + topRightSensor[1] + bottomRightSensor[1] + bottomLeftSensor[1] - finishColor[1] * 4 + topLeftSensor[2] + topRightSensor[2] + bottomRightSensor[2] + bottomLeftSensor[2] - finishColor[2] * 4 + topLeftSensor[3] + topRightSensor[3] + bottomRightSensor[3] + bottomLeftSensor[3] - finishColor[3] * 4
        diff = Math.abs(diff)
        if (diff < 10) {
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



</style>
