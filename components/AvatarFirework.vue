<template>
  <canvas width="400%" height="400%" id="firework">

  </canvas>
</template>

<script type="text/ecmascript-6">
  import anime from 'animejs'
  import Scrollbar from 'smooth-scrollbar'
  export default {
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
        particules: [],
        particulesL: [],
        particulesR: [],
        particules1: [],
        particules2: [],
        particules3: [],
        particules4: [],
        particules5: [],
        fireworkMainAnime: null,
        fireworkTopAnimeSidekick: [],
        fireworkBottomAnimeSidekick: []
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.canvasEl = document.getElementById('firework')
        this.ctx = this.canvasEl.getContext('2d')
        let ssr = Scrollbar.get(document.querySelector('#smooth-scrollbar'))
        if (!ssr) {
          ssr = Scrollbar.init(document.querySelector('#smooth-scrollbar'), this.scrollBarOptions)
        }
        this.scrollBar = ssr
        this.render = anime({
          duration: Infinity,
          update: () => {
            this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height)
          }
        })
        ssr.addListener(this.animation)
        // window.addEventListener('resize', resizeHandler)
        const x = this.canvasEl.width / 2
        const y = this.canvasEl.height / 2
        this.circle = this.createCircle(x, y)
        for (let i = 0; i < this.numberOfParticules; i++) {
          this.particules.push(this.createParticule(x, y, 100, 5, 20))
        }
        for (let i = 0; i < 10; i++) {
          this.particulesL.push(this.createParticule(x + 150, y, 80, 5, 15))
          this.particulesR.push(this.createParticule(x - 150, y, 80, 5, 15))
        }
        for (let i = 0; i < 5; i++) {
          this.particules1.push(this.createParticule(x - 100, y + 50, 30, 2, 8))
          this.particules2.push(this.createParticule(x - 50, y + 50, 30, 2, 8))
          this.particules3.push(this.createParticule(x, y + 50, 30, 2, 8))
          this.particules4.push(this.createParticule(x + 50, y + 50, 30, 2, 8))
          this.particules5.push(this.createParticule(x + 100, y + 50, 30, 2, 8))
        }
        this.fireworkMainAnime = anime.timeline().add({
          targets: this.particules,
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
          targets: this.particulesL,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
        this.fireworkTopAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particulesR,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))

        this.fireworkBottomAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particules1,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
        this.fireworkBottomAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particules2,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
        this.fireworkBottomAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particules3,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
        this.fireworkBottomAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particules4,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
        this.fireworkBottomAnimeSidekick.push(anime({
          autoplay: false,
          targets: this.particules5,
          x: p => { return p.endPos.x },
          y: p => { return p.endPos.y },
          radius: 0.1,
          duration: 500,
          easing: 'easeOutExpo',
          update: this.renderParticule
        }))
      },
//      resizeHandler () {
//      },
      animation () {
        switch (this.scrollBar.offset.y) {
          case 0: {
            if (!this.animated) {
              this.animated = true
              // console.log('WWWWWWWWWWWWWWWWWWWWWW', x, y)
              this.render.play()
              this.fireworkMainAnime.restart()
              setTimeout(() => {
                this.fireworkTopAnimeSidekick[0].restart()
                setTimeout(() => {
                  this.fireworkTopAnimeSidekick[1].restart()
                }, 100)
              }, 100)
              // anime({duration: 200}).finished.then({})
            }
            break
          }
          case (this.scrollBar.size.content.height - window.innerHeight): {
            if (!this.animated) {
              this.animated = true
              // console.log('WWWWWWWWWWWWWWWWWWWWWW', x, y)
              this.render.play()
              this.fireworkMainAnime.restart()
              setTimeout(() => {
                this.fireworkBottomAnimeSidekick[0].restart()
                setTimeout(() => {
                  this.fireworkBottomAnimeSidekick[1].restart()
                  setTimeout(() => {
                    this.fireworkBottomAnimeSidekick[2].restart()
                    setTimeout(() => {
                      this.fireworkBottomAnimeSidekick[3].restart()
                      setTimeout(() => {
                        this.fireworkBottomAnimeSidekick[4].restart()
                      }, 100)
                    }, 100)
                  }, 100)
                }, 100)
              }, 200)
              // anime({duration: 200}).finished.then({})
            }
            break
          }
          default: {
            this.animated = false
          }
        }
//        if (this.scrollBar.offset.y === 0 || this.scrollBar.offset.y === ) {
//          if (!this.animated) {
//            this.animated = true
//
//            // console.log('WWWWWWWWWWWWWWWWWWWWWW', x, y)
//            this.render.play()
//            this.fireworkTopAnime.restart()
//            // anime({duration: 200}).finished.then({})
//          }
//        } else {
//          this.animated = false
//        }
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
        var p = {}
        p.x = x
        p.y = y
        // p.color = this.colors[anime.random(0, this.colors.length - 1)]
        p.color = '#FFF'
        p.radius = anime.random(rmin, rmax)
        p.endPos = this.setParticuleDirection(p, R)
        p.draw = () => {
          this.ctx.beginPath()
          this.ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
          this.ctx.fillStyle = p.color
          this.ctx.fill()
        }
        return p
      },
      createCircle (x, y) {
        var p = {}
        p.x = x
        p.y = y
        p.color = '#FFF'
        p.radius = 0.1
        p.alpha = 0.5
        p.lineWidth = 6
        p.draw = () => {
          this.ctx.globalAlpha = p.alpha
          this.ctx.beginPath()
          this.ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
          this.ctx.lineWidth = p.lineWidth
          this.ctx.strokeStyle = p.color
          this.ctx.stroke()
          this.ctx.globalAlpha = 1
        }
        return p
      },
      renderParticule (anim) {
        for (let i = 0; i < anim.animatables.length; i++) {
          anim.animatables[i].target.draw()
        }
      }
    }
  }
</script>

<style lang="scss">

  #firework {
    position: absolute;
    top:50%;
    left: 50%;
    width: 400%;
    height: 400%;
    margin-top: -200%;
    margin-left: -200%;
  }

</style>
