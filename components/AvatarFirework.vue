<template>
  <div class="AvatarSidekick">
    <canvas width="400" height="400" id="firework">

    </canvas>
  </div>

</template>

<script type="text/ecmascript-6">
  import anime from 'animejs'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: {
      progress: {
        default: 0,
        type: Number
      }
    },
    data () {
      return {
        scrollBar: {},
        canvasEl: null,
        ctx: null,
        numberOfParticules: 20,
        pointerX: 0,
        pointerY: 0,
        // colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        animated: false,
        render: null,
        circle: null,
        particles: {
          main: [],
          L: [],
          R: [],
          b1: [],
          b2: [],
          b3: [],
          b4: [],
          b5: []
        },
        fireworkMainAnime: null,
        fireworkTopAnimeSidekick: [],
        fireworkBottomAnimeSidekick: []
      }
    },
    computed: {
      ...mapGetters({
        fireworkCache: 'fireworkCache'
      })
    },
    watch: {
      progress (val) {

        switch (val) {
          case 0: {
            if (!this.animated) {
              this.animated = true
              // console.log('WWWWWWWWWWWWWWWWWWWWWW', x, y)
              this.render.play()
              this.fireworkMainAnime.restart()
              setTimeout(() => {
                this.fireworkTopAnimeSidekick[1].restart()
                this.$emit('introLeftDone')
                setTimeout(() => {
                  this.fireworkTopAnimeSidekick[0].restart()
                  this.$emit('introRightDone')
                }, 300)
              }, 300)
              // anime({duration: 200}).finished.then({})
            }
            break
          }
          case 1: {
            if (!this.animated) {
              this.animated = true
              // console.log('WWWWWWWWWWWWWWWWWWWWWW', x, y)
              this.render.play()
              this.fireworkMainAnime.restart()
              setTimeout(() => {
                this.fireworkBottomAnimeSidekick[0].restart()
                this.$emit('bottomIcon1Done')
                setTimeout(() => {
                  this.fireworkBottomAnimeSidekick[1].restart()
                  this.$emit('bottomIcon2Done')
                  setTimeout(() => {
                    this.fireworkBottomAnimeSidekick[2].restart()
                    this.$emit('bottomIcon3Done')
                    setTimeout(() => {
                      this.fireworkBottomAnimeSidekick[3].restart()
                      this.$emit('bottomIcon4Done')
                    }, 200)
                  }, 200)
                }, 200)
              }, 300)
              // anime({duration: 200}).finished.then({})
            }
            break
          }
          default: {
            this.animated = false
          }
      }
    }
    },
    mounted () {
      this.init()
    },
    beforeDestroy () {
      // console.log('avatarGGGGGGGGGGGGGGGGGGGGGGGGGGGG')
      // this.scrollBar.removeListener(this.animation)
    },
    methods: {
      ...mapActions({
        setFireworkCache: 'setFireworkCache'
      }),
      init () {
        this.canvasEl = document.getElementById('firework')
        this.ctx = this.canvasEl.getContext('2d')


//        if (this.fireworkCache) {
////          this.render = this.fireworkCache.render
////          this.fireworkMainAnime = this.fireworkCache.fireworkMainAnime
////          this.fireworkTopAnimeSidekick = this.fireworkCache.fireworkTopAnimeSidekick
////          this.fireworkBottomAnimeSidekick = this.fireworkCache.fireworkBottomAnimeSidekick
//          this.particles = Object.assign({}, this.fireworkCache.particles)
//          this.circle = Object.assign({}, this.fireworkCache.circle)
//          console.log('YYYYYYYYYYYYY', this.particles)
//        } else {
//          const x = this.canvasEl.width / 2
//          const y = this.canvasEl.height / 2
//
//          // console.log(this.canvasEl.width, this.canvasEl.height)
//
//          this.circle = this.createCircle(x, y)
//
//          for (let i = 0; i < this.numberOfParticules; i++) {
//            this.particles.main.push(this.createParticule(x, y, 100, 5, 20))
//          }
//          for (let i = 0; i < 10; i++) {
//            this.particles.L.push(this.createParticule(x + 115, y, 80, 5, 15))
//            this.particles.R.push(this.createParticule(x - 115, y, 80, 5, 15))
//          }
//          for (let i = 0; i < 4; i++) {
//            this.particles.b1.push(this.createParticule(x - 60, y + 70, 30, 2, 8))
//            this.particles.b2.push(this.createParticule(x - 25, y + 70, 30, 2, 8))
//            this.particles.b3.push(this.createParticule(x + 25, y + 70, 30, 2, 8))
//            this.particles.b4.push(this.createParticule(x + 60, y + 70, 30, 2, 8))
//          }
//
//          this.setFireworkCache({
////            render: this.render,
////            fireworkMainAnime: this.fireworkMainAnime,
////            fireworkTopAnimeSidekick: this.fireworkTopAnimeSidekick,
////            fireworkBottomAnimeSidekick: this.fireworkBottomAnimeSidekick,
//            particles: Object.assign({}, this.particles),
//            circle: Object.assign({}, this.circle)
//
//          })
//
//        }
        const x = this.canvasEl.width / 2
        const y = this.canvasEl.height / 2

        // console.log(this.canvasEl.width, this.canvasEl.height)

        this.circle = this.createCircle(x, y)

        for (let i = 0; i < this.numberOfParticules; i++) {
          this.particles.main.push(this.createParticule(x, y, 100, 5, 20))
        }
        for (let i = 0; i < 10; i++) {
          this.particles.L.push(this.createParticule(x + 115, y, 80, 5, 15))
          this.particles.R.push(this.createParticule(x - 115, y, 80, 5, 15))
        }
        for (let i = 0; i < 4; i++) {
          this.particles.b1.push(this.createParticule(x - 60, y + 70, 30, 2, 8))
          this.particles.b2.push(this.createParticule(x - 25, y + 70, 30, 2, 8))
          this.particles.b3.push(this.createParticule(x + 25, y + 70, 30, 2, 8))
          this.particles.b4.push(this.createParticule(x + 60, y + 70, 30, 2, 8))
        }


        this.render = anime({
          duration: Infinity,
          update: () => {
            this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height)
          }
        })


        this.fireworkMainAnime = anime.timeline().add({
          targets: this.particles.main,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 1200,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }).add({
          targets: this.circle,
          radius: 80,
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: 'linear',
            duration: 600
          },
          duration: 1200,
          easing: 'easeOutExpo',
          update: this.renderParticule,
          offset: 0
        })

        this.fireworkTopAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particles.L,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
        this.fireworkTopAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particles.R,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))

        this.fireworkBottomAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particles.b1,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
        this.fireworkBottomAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particles.b2,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
        this.fireworkBottomAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particles.b3,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
        this.fireworkBottomAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particles.b4,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))


      },

      setParticuleDirection (p, R) {
        const angle = anime.random(0, 360) * Math.PI / 180
        // const value = 100
        const radius = [-1, 1][anime.random(0, 1)] * R
        return {
          x: p.x + radius * Math.cos(angle),
          y: p.y + radius * Math.sin(angle)
        }
      },
      createParticule (x, y, R, rmin, rmax) {
        let p = {}
        p.x = x
        p.y = y

        // p.color = this.colors[anime.random(0, this.colors.length - 1)]
        p.color = '#FFF'
        p.radius = anime.random(rmin, rmax)
        p.endPos = this.setParticuleDirection(p, R)
        p.draw = (ctx) => {
          ctx.beginPath()
          ctx.arc(Math.floor(p.x), Math.floor(p.y), Math.floor(p.radius), 0, 2 * Math.PI, true)

          ctx.fillStyle = p.color
          ctx.fill()
        }
        return p
      },
      createCircle (x, y) {
        let p = {}
        p.x = x
        p.y = y
        p.color = '#FFF'
        p.radius = 0.1
        p.alpha = 0.5
        p.lineWidth = 6
        p.draw = (ctx) => {
          ctx.globalAlpha = p.alpha
          ctx.beginPath()
          ctx.arc(Math.floor(p.x), Math.floor(p.y), Math.floor(p.radius), 0, 2 * Math.PI, true)
          ctx.lineWidth = p.lineWidth
          ctx.strokeStyle = p.color
          ctx.stroke()
          ctx.globalAlpha = 1

        }
        return p
      },
      renderParticule (anim) {
        for (let i = 0; i < anim.animatables.length; i++) {
          anim.animatables[i].target.draw(this.ctx)
        }
      }
    }
  }
</script>

<style lang="scss">
  .AvatarSidekick {
    position: absolute;
    top:50%;
    left: 50%;
    width: 400%;
    height: 400%;
    margin-top: -200%;
    margin-left: -200%;
  }
  #firework {
    position: absolute;
    top:50%;
    left: 50%;
    width: 100%;
    height: 100%;
    margin-top: -50%;
    margin-left: -50%;
  }

</style>
