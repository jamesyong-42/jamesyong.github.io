<template>
  <div class="CV">
    <parallax :scrollOffset="scrollOffset" :speedFactor="1">
      <div class="space">
        <svg id="space" class="space-path" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 5400">
          <title>space</title>
          <g id="bg" data-name="bg">
            <g>
              <path id="spacePath" stroke-dasharray="5579.802"
                    :stroke-dashoffset="(1 - progress) * 5579.802" style="fill:none;stroke:aqua;stroke-miterlimit:10;stroke-width:10px;" d="M951.5,563.5S952,968,952,1102c0,211-472,266-472,550,0,410,959,664,959,1072,0,430-959,626-958,1097,.61,287,473,323.88,472,523-1,209-1.5,538.5-1.5,538.5"/>
            </g>
          </g>
        </svg>

        <rocket-flames :scrollOffset="scrollOffset" :progress="progress" id="rocket"></rocket-flames>
        <div :class="['animated']" id="avatar">
          <avatar-firework :progress="progress"
                           v-on:introLeftDone="introLeftDone"
                           v-on:introRightDone="introRightDone"
                           v-on:bottomIcon1Done="bottomIcon1Done"
                           v-on:bottomIcon2Done="bottomIcon2Done"
                           v-on:bottomIcon3Done="bottomIcon3Done"
                           v-on:bottomIcon4Done="bottomIcon4Done"
          ></avatar-firework>
        </div>
        <div id="top-intro-left" :class="{'shoutOut': introLeftHigh}">
          <h1>雍世康</h1>
          <h2>WEB前端工程师</h2>
        </div>
        <div id="top-intro-right" :class="{'shoutOut': introRightHigh}">
          <span class="l">Be</span>
          <span class="s">the</span>
          <span class="l">change</span>
          <br>
          <span class="m">you want to see</span>
          <br>
          <span class="s">in the</span>
          <span class="l">world</span>
        </div>
        <div id="bottom-contact">
          <a href="mailto:me@jamesyong42.com">
            <svg class="icon"
                  :class="{'shoutOut': bottomIcon1High}"
                  id="bottom-contact__email"
          ><use xlink:href="#icon-envelope"></use></svg>
          </a>
          <a href="https://github.com/Sakilove">
            <svg class="icon"
                 :class="{'shoutOut': bottomIcon2High}"
                 id="bottom-contact__github"
            ><use xlink:href="#icon-github"></use></svg>
          </a>
          <a href="https://behance.net/jamesyong">
            <svg class="icon"
                 :class="{'shoutOut': bottomIcon3High}"
                 id="bottom-contact__behance"
            ><use xlink:href="#icon-behance"></use></svg>
          </a>
          <a href="https://www.facebook.com/jamesyong42">
            <svg class="icon"
                 :class="{'shoutOut': bottomIcon4High}"
                 id="bottom-contact__facebook"
            ><use xlink:href="#icon-facebook"></use></svg>
          </a>
          <a id="bottom-contact__download" href="/Web Front-End JamesYong.pdf" target="_blank" class="download">
            <template v-if="lan == 'ZH'">下载简历</template>
            <template v-else-if="lan == 'EN'">Download Resume</template>
          </a>
        </div>
      </div>
      <div id="CV-Skills" class="CV__Section CV-headline"  data-progress="0" data-speed="1" data-speedcurve="ease">
        <div class="CV__Section__Skills">
          <cv-skills :progress="CVSkillsProgress"></cv-skills>
        </div>
      </div>
      <div id="CV-Skills-title" class="CV-headline" data-speed="1" data-speedcurve="ease" data-anchor="15">
        <template v-if="lan == 'ZH'">技能</template>
        <template v-else-if="lan == 'EN'">Skills</template>
      </div>
      <div id="CV-Projects-title" class="CV-headline" @click="routeToProjects" data-speed="1" data-speedcurve="ease">
        <svg>
          <use xlink:href="#icon-projects"></use>
        </svg>
        <template v-if="lan == 'ZH'">项目</template>
        <template v-else-if="lan == 'EN'">Projects</template>
      </div>
      <div id="CV-Education-title" class="CV-headline" data-speed="1" data-speedcurve="ease" data-anchor="75">
        <template v-if="lan == 'ZH'">教育</template>
        <template v-else-if="lan == 'EN'">Education</template>
      </div>
      <div id="CV-Education" class="CV__Section CV-headline"  data-progress="0" data-speed="1" data-speedcurve="ease">
        <div class="CV__Section__Education">
          <cv-education></cv-education>
        </div>
      </div>
      <div id="tiny-stars" class="stars" data-speed="0.24" data-speedcurve="linear" :data-direction="movingDirection" :data-xoffset="midOffset"></div>
      <div id="mid-stars" class="stars" data-speed="0.64" data-speedcurve="linear" :data-direction="movingDirection" :data-xoffset="midOffset"></div>
      <div id="big-stars" class="stars" data-speed="1.16" data-speedcurve="linear" :data-direction="movingDirection" :data-xoffset="midOffset"></div>

    </parallax>
  </div>

</template>

<script>
  import RocketFlames from '~/components/RocketFlames.vue'
  import AvatarFirework from '~/components/AvatarFirework.vue'
  import CvSkills from '~/components/CVSkills.vue'
  import CvEducation from '~/components/CVEducation.vue'
  import Parallax from '~/components/Parallax7.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      Parallax,
      RocketFlames,
      AvatarFirework,
      CvSkills,
      CvEducation
    },
    data () {
      return {
        blurContent: null,
        mark1: 7.25,
        flag1: false,
        progress: 0,
        space: null,
        spacePath: null,
        avatar: null,
        rocket: null,
        topIntroLeft: null,
        topIntroRight: null,
        lastSVGPoint: null,
        movingDirection: -90,
        midOffset: 0,

        lastRocketW: 0,
        lastRocketH: 0,

        rocketFlame1: {},
        rocketFlame2: {},
        rocketFlame3: {},
        rocketFlame4: {},
        rocketFlame5: {},
        rocketFlame6: {},
        rocketFlaming: true,

        // scrollOffset: 0,
        rocketCenterOffsetX: Number(0),
        rocketCenterOffsetY: Number(0),
        avatarCenterOffsetX: Number(0),
        avatarCenterOffsetY: Number(0),

        CVSkillsEl: {},
        CVSkillsProgress: 0,

        introLeftHigh: false,
        introRightHigh: false,
        bottomIcon1High: false,
        bottomIcon2High: false,
        bottomIcon3High: false,
        bottomIcon4High: false,

        bottomContactEls: null
      }
    },
    watch: {
      scrollOffset (val) {
        const scrollOffset = val
        const contentHeight = this.$el.clientHeight
        const progress = scrollOffset / (contentHeight - window.innerHeight)

        console.log('VBVBDFSDVSDSDF', val, window.innerHeight, contentHeight, progress, window.outerHeight, screen.availHeight, screen.height)
        // console.log('Scrolllllllllllll', val)
        this.progress = progress
        // console.log('progress', progress, this.movingDirection)

        this.updateView (progress)

      }
    },
    computed: {
      ...mapGetters({
        lan: 'language',
        scrollBar: 'scrollBar',
        scrollOffset: 'scrollOffset',
        blurNav: 'blurNav'
      })
    },
    beforeMount () {
      console.log('FGFGFFGDFGDFGDFG', navigator.userAgent)
      this.isIOSSafari = navigator.userAgent.match(/(iPhone|iPod|iPad)/i) && navigator.userAgent.match(/(Safari)/i)
    },

    mounted () {

//      const pageContent = document.getElementById('page-content')
//      console.log(pageContent)
//      console.log(this.scrollBar.containerEl)
//      console.log(this.scrollBar.contentEl)
//      const pagecopy = pageContent.cloneNode(true)
//      this.blurNav.appendChild(pagecopy)
      // console.log('FFFFFFFFFFFFFFFFFF', this.$el.clientHeight)

      this.space = document.getElementById('space')
      this.spacePath = document.getElementById('spacePath')
      this.avatar = document.getElementById('avatar')
      this.rocket = document.getElementById('rocket')
      this.topIntroLeft = document.getElementById('top-intro-left')
      this.topIntroRight = document.getElementById('top-intro-right')
      this.bottomContactEls = {
        email: document.getElementById('bottom-contact__email'),
        github: document.getElementById('bottom-contact__github'),
        behance: document.getElementById('bottom-contact__behance'),
        facebook: document.getElementById('bottom-contact__facebook'),
        download: document.getElementById('bottom-contact__download')
      }

      this.CVSkillsEl = document.getElementById('CV-Skills')

      this.reactiveHandler()
      this.avatar.style.opacity = 1
      this.rocket.style.opacity = 1
      window.addEventListener('resize', this.reactiveHandler)

      this.updateView(0)

      this.setTransition({
        on: false,
        to: '',
        callback: () => {}
      })

    },

    beforeRouteLeave (to, from, next) {

      window.removeEventListener('resize', this.reactiveHandler)
      this.$store.dispatch('toggleMobileNav', false)


      switch (to.fullPath) {
        case '/projects': {
          this.$store.dispatch('setTransition', {
            on: true,
            to: '/projects',
            callback: () => {
              next()
            }
          })
          break
        }
        default: {
          next()
        }
      }
    },

    methods: {
      ...mapActions({
        setTransition: 'setTransition'
      }),
      reactiveHandler () {

        // getBoundingClientRect()考虑了旋转高度,需修正
        // const rocketCenterOffsetX = (window.innerWidth - this.rocket.getBoundingClientRect().width) / 2
        // const rocketCenterOffsetY = -this.rocket.getBoundingClientRect().height / 2
        const dir = Math.abs(this.movingDirection / 180 * Math.PI)
        const cosa = Math.abs(Math.cos(dir))
        const sina = Math.sin(dir)
        const cos2a = Math.cos(dir * 2)
        if (cos2a === 0) {
          // 此时getBoundingClientRect是正方形，彻底丢失子长方形特征信息，需要按比例复原
          const W = this.rocket.getBoundingClientRect().width
          const ratioW = this.lastRocketW / (this.lastRocketW + this.lastRocketH)
          const ratioH = this.lastRocketH / (this.lastRocketW + this.lastRocketH)
          const w = ratioW * W
          const h = ratioH * W
          const rocketCenterOffsetX = (window.innerWidth - w) / 2
          const rocketCenterOffsetY = -h / 2

          this.rocketCenterOffsetX = rocketCenterOffsetX
          this.rocketCenterOffsetY = rocketCenterOffsetY

        } else {

          const W = this.rocket.getBoundingClientRect().width
          const H = this.rocket.getBoundingClientRect().height
          const w = (cosa * W - sina * H) / cos2a
          const h = (cosa * H - sina * W) / cos2a
          this.lastRocketW = w
          this.lastRocketH = h

          const rocketCenterOffsetX = (window.innerWidth - w) / 2
          const rocketCenterOffsetY = -h / 2

          this.rocketCenterOffsetX = rocketCenterOffsetX
          this.rocketCenterOffsetY = rocketCenterOffsetY
          // console.log('clueeeeeeeeeeee', cosa, sina, cos2a, this.movingDirection, dir, W, H, w, h)
        }


        const avatarCenterOffsetX = (window.innerWidth - this.avatar.offsetWidth) / 2
        const avatarCenterOffsetY = -this.avatar.offsetHeight / 2

        this.avatarCenterOffsetX = avatarCenterOffsetX
        this.avatarCenterOffsetY = avatarCenterOffsetY


//        const spaceCenterOffset = (window.innerWidth - this.space.getBoundingClientRect().width) / 2
//        const ratio = this.space.getBoundingClientRect().width / this.space.viewBox.baseVal.width
//
//        const totalL = this.spacePath.getTotalLength()
//        const curL = totalL * this.progress
//        const curPoint = this.spacePath.getPointAtLength(curL)
//        const y = curPoint.y * ratio
//
//        // console.log('!!!!!!!!!!!!!!', typeof roffsX)
//        this.space.style.transform = `translate3d(${spaceCenterOffset.toFixed(1)}px, 0 ,0)`
//        this.avatar.style.transform = `translate3d(${avatarCenterOffsetX.toFixed(1)}px, ${(avatarCenterOffsetY + y).toFixed(1)}px, 0) scale(1, 1)`
//        this.rocket.style.transform = `translate3d(${rocketCenterOffsetX.toFixed(1)}px, ${(rocketCenterOffsetY + y).toFixed(1)}px, 0)`
//

        const contentHeight = this.$el.clientHeight
        const reMappedScrollOffset = this.progress * (contentHeight - window.innerHeight)
        // console.log('reMappppppp', reMappedScrollOffset)

        if (this.scrollOffset === reMappedScrollOffset) {
          this.updateView(this.progress)
        } else {
          this.scrollBar.scrollTo(0, reMappedScrollOffset)
          this.scrollBar.update()
        }
//        this.updateView(this.progress)
//        this.scrollBar.scrollTo(0, reMappedScrollOffset)
//        this.scrollBar.update()

      },
      updateView (progress) {


        const ratioX = this.space.getBoundingClientRect().width / this.space.viewBox.baseVal.width
        const ratioY = this.space.getBoundingClientRect().height / this.space.viewBox.baseVal.height


        const totalL = this.spacePath.getTotalLength()
        const curL = totalL * progress
        const curPoint = this.spacePath.getPointAtLength(curL)
        if (this.lastSVGPoint) {
          this.movingDirection = -Math.atan2(curPoint.y - this.lastSVGPoint.y, curPoint.x - this.lastSVGPoint.x) * 180 / Math.PI
        }
        this.lastSVGPoint = curPoint

        const y = curPoint.y * ratioY
        const avatarFlag = Math.abs(progress - 0.5)

        const spaceCenterOffset = (window.innerWidth - this.space.getBoundingClientRect().width) / 2


        if (avatarFlag >= 0.45) {
          let scale = (1 - (0.5 - avatarFlag) / 0.05).toFixed(2)

          this.avatar.style.transform = `translate3d(${this.avatarCenterOffsetX.toFixed(1)}px, ${(this.avatarCenterOffsetY + y).toFixed(1)}px, 0) scale(${scale}, ${scale})`

          this.topIntroLeft.style.transform = `scale(${scale}, ${scale}) translate3d(0, ${(this.avatarCenterOffsetY + y).toFixed(1)}px, 0)`
          this.topIntroRight.style.transform = `scale(${scale}, ${scale}) translate3d(0, ${(this.avatarCenterOffsetY + y).toFixed(1)}px, 0)`
          this.bottomContactEls.email.style.transform = `scale(${scale}, ${scale})`
          this.bottomContactEls.github.style.transform = `scale(${scale}, ${scale})`
          this.bottomContactEls.behance.style.transform = `scale(${scale}, ${scale})`
          this.bottomContactEls.facebook.style.transform = `scale(${scale}, ${scale})`
          this.bottomContactEls.download.style.transform = `scale(${scale}, ${scale})`

        } else {

          this.avatar.style.transform = `translate3d(${this.avatarCenterOffsetX.toFixed(1)}px, ${(this.avatarCenterOffsetY + y).toFixed(1)}px, 0) scale(0, 0)`

          this.topIntroLeft.style.transform = `scale(0, 0)`
          this.topIntroRight.style.transform = `scale(0, 0)`

          this.bottomContactEls.email.style.transform = `scale(0, 0)`
          this.bottomContactEls.github.style.transform = `scale(0, 0)`
          this.bottomContactEls.behance.style.transform = `scale(0, 0)`
          this.bottomContactEls.facebook.style.transform = `scale(0, 0)`
          this.bottomContactEls.download.style.transform = `scale(0, 0)`
        }

        const midOffset = (this.space.viewBox.baseVal.width / 2 - curPoint.x) * ratioX
        this.midOffset = midOffset

        this.space.style.transform = `translate3d(${(spaceCenterOffset + midOffset).toFixed(1)}px, 0 ,0)`
        this.rocket.style.transform = `translate3d(${this.rocketCenterOffsetX.toFixed(1)}px, ${(this.rocketCenterOffsetY + y).toFixed(1)}px, 0) rotate(${(-this.movingDirection - 90).toFixed(1)}deg)`

        // const rocketCenterOffsetY = -this.rocket.getBoundingClientRect().height / 2
        // console.log('clueeeeeeeeeeeeeeeee', totalL, curL, y, rocketCenterOffsetY, this.rocketCenterOffsetY, `translate3d(${this.rocketCenterOffsetX.toFixed(1)}px, ${(this.rocketCenterOffsetY + y).toFixed(1)}px, 0) rotate(${(-this.movingDirection - 90).toFixed(1)}deg)`)
        const prog = Math.min(this.CVSkillsEl.dataset.progress, 1)
        this.CVSkillsProgress = 1 - Math.abs((prog - 0.5) / 0.5)
      },
      introLeftDone () {

        this.introLeftHigh = true
        setTimeout(() => {
          this.introLeftHigh = false
        }, 1200)
      },
      introRightDone () {
        this.introRightHigh = true
        setTimeout(() => {
          this.introRightHigh = false
        }, 1200)
      },
      bottomIcon1Done () {
        this.bottomIcon1High = true
        setTimeout(() => {
          this.bottomIcon1High = false
        }, 1200)
      },
      bottomIcon2Done () {
        this.bottomIcon2High = true
        setTimeout(() => {
          this.bottomIcon2High = false
        }, 1200)
      },
      bottomIcon3Done () {
        this.bottomIcon3High = true
        setTimeout(() => {
          this.bottomIcon3High = false
        }, 1200)
      },
      bottomIcon4Done () {
        this.bottomIcon4High = true
        setTimeout(() => {
          this.bottomIcon4High = false
        }, 1200)
      },
      routeToProjects () {
        this.$router.push('/projects')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";


  .CV {
    width: 100%;

  }

  .space {
    width: 100%;
    height: 100%;
    background-image: url("/space-bg.svg");
    background-size: 100% 100%;
    // text-align: center;
  }
  .space-bg {
    height: 100%;
  }
  .space-path {
    // display: inline-block;
    height: 100%;
    // margin: auto;
    opacity: 0.1;
  }
  #avatar {
    max-width: 250px;
    max-height: 250px;
    width: 25vmin;
    height: 25vmin;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    // margin-left: -125px;
    // margin-top: -125px;
    background-image: url("/avatar.png");
    background-size: contain;
    transform-style: preserve-3d;
    transform-origin: center;
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    z-index: 999;
  }


  #rocket {
    opacity: 0;
    max-width: 800px;
    max-height: 800px;
    width: 80vmin;
    height: 80vmin;
    position: absolute;
    top: 0;
    left: 0;
    // margin-left: -400px;
    // margin-top: -400px;

    // transform-style: preserve-3d;
    transform-origin: center;
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    z-index: 999;
  }
  .shoutOut {
    animation-name: shoutOut;
    animation-duration: 1s;
    animation-delay: 0.1s;
    animation-timing-function: ease;
  }
  @keyframes shoutOut {
    /*0% {*/
      /*filter: invert(0);*/
    /*}*/
    /*10% {*/
      /*filter: drop-shadow(0 0 0.75rem crimson) invert(1);*/
    /*}*/
    /*100% {*/
      /*filter: invert(0);*/
    /*}*/
    0% {
      filter: blur(0);
    }
    10% {
      filter: blur(10px);
    }
    100% {
      filter: blur(0);
    }
  }
  #top-intro-left {
    will-change: filter, transform;
    position: absolute;
    top:0;
    left: 50vw;
    width: 220px;
    margin-left: calc(-300px - 5vw);
    margin-top: 5vh;
    color: white;
    font-family: $fontAXIS;
    text-align: center;
    > h1 {
      font-size: 60px;
    }
    > h2 {
      font-size: 24px;
    }
    @media (max-width: 760px) {
      margin-left: calc(-200px - 5vw);
      margin-top: 3.5vh;
      > h1 {
        font-size: 30px;
      }
      > h2 {
        font-size: 12px;
      }
    }
  }

  $fs-l: 30px;
  $fs-m: $fs-l * 0.79;
  $fs-s: $fs-l * 0.5;
  #top-intro-right {
    will-change: filter, transform;
    position: absolute;
    top: 0;
    left: 50vw;
    margin-left: calc(85px + 5vw);
    margin-top: 6vh;
    width: 240px;
    font-family: $fontAXIS;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    > .l {
      font-size: $fs-l;
      color: #ff6666;
    }
    > .m {
      font-size: $fs-m;
      color: white;
      // line-height: 20px;
    }
    > .s {
      font-size: $fs-s;
      color: white;
      margin: 10px;
    }
    @media (max-width: 760px) {
      width: 150px;
      margin-top: 4vh;
      margin-left: calc(25px + 5vw);
      > .l {
        font-size: $fs-l / 2;
        color: #ff6666;
      }
      > .m {
        font-size: $fs-m / 2;
        color: white;
        // line-height: 20px;
      }
      > .s {
        font-size: $fs-s / 2;
        color: white;
        margin: 2px;
      }
    }
  }
  #bottom-contact {
    height: 60px;
    width: 400px;
    overflow: visible;
    // background-color: #ff6666;
    position: absolute;
    bottom: 25vh;
    left: calc(50vw - 200px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    .icon {
      fill: white;
      margin: 0 20px;
      height: 60px;
      width: 60px;
      cursor: pointer;
    }
    #bottom-contact__email {
      height: 55px;
      width: 55px;
    }
    .download {
      width: 100%;
      height: 60px;

      color: #ffffff;
      text-align: center;
      font-size: 30px;
      position: absolute;
      top:100px;
      left: 0;
    }
    @media (max-width: 768px) {
      .icon {
        margin: 0 20px;
        height: 38px;
        width: 38px;
        cursor: pointer;
      }
      #bottom-contact__email {
        height: 35px;
        width: 35px;
      }
    }
  }



  $font-xl: 4.691vh;

  .CV__Section {
    position: absolute;

    &__Skills {
      position: absolute;
      height: 60vh;
      width: 38vw;
      top: -25vh;
      left: 5vw;
      // background-color: #ff6666;
    }
    &__Education {
      position: absolute;
      height: 60vh;
      width: 38vw;
      top: -25vh;
      left: 5vw;
      // background-color: #ff6666;
    }
  }
  #CV-Skills {
    top: 150vh;
    left: 50%;
  }
  #CV-Education {
    top: 350vh;
    left: 50%;
  }

  #CV-Skills-title {
    position: absolute;
    width: 100%;
    top: 170vh;
    text-align: left;
    left: 50%;
  }
  #CV-Projects-title {
    position: absolute;
    width: 100%;
    top: 250vh;
    text-align: right;
    margin-left: -5vw;
    left: -50%;
    z-index: 999;
    cursor: pointer;
    svg {
      width: $font-xl;
      height: $font-xl;
      fill: #1cfaff;
      stroke: #1cfaff;
    }

  }
  #CV-Education-title {
    position: absolute;
    width: 100%;
    top: 350vh;
    text-align: left;
    left: 50%;
  }


  #CV-skillsrrr {
    position: absolute;
    width: 100%;
    top: 150vh;
    left: 50%;
    height: 300px;
    margin-top: -150px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }


  .CV-headline {
    font-family: $fontAXIS;
    font-weight: 400;
    font-size: $font-xl;
    color: #00e7eb;

  }

  #tiny-stars {
    position: absolute;
    top: 0;
    left: -10vw;
    width: 120vw;
    height: 120vh;
    opacity: 0.4;
    background-image: url("/stars-tiny.png");

  }
  #mid-stars {
    position: absolute;
    top: 0;
    left: -70vw;
    width: 240vw;
    height: 240vh;
    opacity: 0.5;
    background-image: url("/stars-mid.png");
    background-repeat: space;

  }
  #big-stars {
    position: absolute;
    top: 0;
    left: -200vw;
    width: 500vw;
    height: 500vh;
    background-image: url("/stars-big.png");
    background-repeat: space;

  }


</style>
