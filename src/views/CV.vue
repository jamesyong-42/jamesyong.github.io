<template>
  <div id="page-content" class="projects-content">
    <!--<div :class="['stars-tiny', 'stars']">-->
      <!--<template v-for="pos in starsTinyPos">-->
        <!--<img src="https://alquimiawrg.com/src/assets/background/star_tiny.png" :style="pos">-->
      <!--</template>-->
    <!--</div>-->

    <parallax :speedFactor="1" :containerClass="'project-content-5x'">
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

        <rocket-flames id="rocket"></rocket-flames>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.21 438.51">
          <g>
            <g>
              <path id="rocket-flame-1" style="fill:#008ba2;" d="M60.14,46c0,2.14-.22,119.54-.39,140.62C59.61,204.87,48,219,30.46,219S0,206.43,0,186.3C.07,157.91.15,64.1.16,57.59c0-7,8.8-6.82,8.87.14.1,9.44.22,16.9,0,25.52-.15,6.56,8.25,6.57,8.37.51.22-10.56.27-64.12.29-79.06,0-6.31,9-6.24,9.12.07C27,13,27,57.33,26.92,68.21c-.05,5.25,8.08,5.08,8-.92,0-6.38-.1-18.31,0-27.69.06-4.26,7.9-6.43,8,.45s.13,24.13.21,33.75c0,5,8.09,4.72,8.21,0,.31-12.44.46-36.19.4-49.7,0-7.19,8.47-6.82,8.39-.36C60.1,31.75,60.17,41.17,60.14,46Z"/>
              <path id="rocket-flame-2" style="fill:#0bc6d0;" d="M54.07,111.35c0,1.71-.14,63.12-.27,80-.12,14.59-9.43,25.88-23.42,25.86S6,207.17,6,191.07c.06-22.7.06-82.46.11-87.66.08-6.86,8.56-6.7,8.68,0,.14,7.55.12,27.37-.07,34.17-.15,5.25,5.94,5.15,6,.31.17-8.45-.06-15.44,0-27.38,0-5,6.55-4.94,6.65.11.12,6.55.21,9.79.12,18.49,0,4.2,6.46,4.06,6.43-.74,0-5.1,0-38.76.06-46.26,0-3.41,6.32-5.14,6.4.36s.1,17.71.17,25.4c0,4,6.47,3.77,6.57,0,.25-10,.34-3.24.29-14,0-5.75,6.78-5.46,6.71-.29C54,100,54.09,107.49,54.07,111.35Z"/>
              <path id="rocket-flame-3" style="fill:#1ae6de;" d="M49.57,167c0,1.39-.06,13.8-.17,27.55-.1,11.9-7.69,21.1-19.1,21.09s-19.9-8.18-19.86-21.3c0-18.51,0-41.32,0-45.56.06-5.6,9.09-5.3,9.2.17.12,6.16,0,.3.1,5.84.09,4.83,6.52,4.84,6.51.34,0-4.16.09-9.26.19-15.38.09-5.29,8.11-5,8.18-.53s-.12,13.48,0,19.75c.06,5.12,6.42,5.09,6.34,0-.12-8.12,0-5,.1-11.33.05-5.33,8.51-5.82,8.54.44C49.63,153.34,49.59,163.84,49.57,167Z"/>
              <path id="rocket-flame-4" style="fill:#e9f8f3;" d="M39.39,181.42c0,.95-.14,9.38-.09,18.72.05,10-3.7,14.34-9.18,14.33s-9.58-3.14-9.54-14.46c0-12.57,0-32.61,0-35.49,0-4.56,6.68-4.74,6.74.32,0,4.18.06,8.23,0,12,0,4.31,5.33,3.82,5.41,0,.11-5.51,0-4.44.06-8.74,0-3.62,6.58-3.8,6.56.13C39.37,171.79,39.4,179.28,39.39,181.42Z"/>
              <path id="rocket-flame-5" style="fill:#0bc6d0;" d="M27.63,80.27c0-7.83-7.12-7.8-7.09-.25,0,6.43,0,11.08,0,15.37,0,5.83,7.08,5.43,7.09.06Z"/>
              <path id="rocket-flame-6" style="fill:#1ae6de;" d="M47.66,120.42c0-7.83-7.12-7.8-7.09-.25,0,6.43,0,11.08,0,15.37,0,5.83,7.08,5.43,7.09.06Z"/>
              <rect style="fill:none;" x="0.1" y="219.51" width="59.5" height="219"/>
            </g>
          </g>
        </svg>
        <div :class="['animated']" id="avatar">
          <avatar-firework></avatar-firework>
        </div>
        <div id="top-intro-left">
          <h1>雍世康</h1>
          <h2>WEB前端工程师</h2>
        </div>
        <div id="top-intro-right">
          <span class="l">Be</span>
          <span class="s">the</span>
          <span class="l">change</span>
          <br>
          <span class="m">you want to see</span>
          <br>
          <span class="s">in the</span>
          <span class="l">world</span>
        </div>
        <div id="bottom-contact"></div>
      </div>
      <!--<div id="CV-education" class="CV-headline" data-speed="1">!!!!!!!!!!!!!!!!!!!!</div>-->

      <div id="CV-education" class="CV-headline" data-speed="1" data-speedcurve="ease">!!!!!!!!!!!!!!!!!!!!</div>
      <div id="CV-education-content" class="CV-headline" data-speed="1" data-speedcurve="ease" data-anchor="20">!!!!!!!!!!!!!!!!!!!!</div>
      <div id="CV-skills" class="CV-headline" data-speed="1" data-speedcurve="ease">!!!!!!!!!!!!!!!!!!!!</div>
      <div id="CV-experience" class="CV-headline" data-speed="1" data-speedcurve="ease">!!!!!!!!!!!!!!!!!!!!</div>
      <div id="tiny-stars" class="stars" data-speed="0.24" data-speedcurve="linear" :data-direction="movingDirection" :data-xoffset="midOffset"></div>
      <div id="mid-stars" class="stars" data-speed="0.64" data-speedcurve="linear" :data-direction="movingDirection" :data-xoffset="midOffset"></div>
      <div id="big-stars" class="stars" data-speed="1.16" data-speedcurve="linear" :data-direction="movingDirection" :data-xoffset="midOffset"></div>
      <!--<div id="mid-stars" :class="['stars']">-->
        <!--<template v-for="pos in starsMidPos">-->
          <!--<img src="https://alquimiawrg.com/src/assets/background/star_mid.png" :style="pos">-->
        <!--</template>-->
      <!--</div>-->
      <!--<div id="big-stars" :class="['stars']">-->
        <!--<template v-for="pos in starsBigPos">-->
          <!--<img src="https://alquimiawrg.com/src/assets/background/star_big.png" :style="pos">-->
        <!--</template>-->
      <!--</div>-->
    </parallax>
  </div>

</template>

<script>
  import RocketFlames from '../components/RocketFlames.vue'
  import AvatarFirework from '../components/AvatarFirework.vue'
  import Parallax from '../components/Parallax3.vue'
  import anime from 'animejs'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Parallax,
      RocketFlames,
      AvatarFirework
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

        rocketFlame1: {},
        rocketFlame2: {},
        rocketFlame3: {},
        rocketFlame4: {},
        rocketFlame5: {},
        rocketFlame6: {},
        rocketFlaming: true,

        scrollOffset: 0,
        rocketCenterOffsetX: 0,
        rocketCenterOffsetY: 0,
        avatarCenterOffsetX: 0,
        avatarCenterOffsetY: 0
      }
    },
    computed: {
      ...mapGetters({
        scrollBar: 'scrollBar',
        blurNav: 'blurNav'
      })
    },
    beforeMount () {

    },
    mounted () {
//      const pageContent = document.getElementById('page-content')
//      console.log(pageContent)
//      console.log(this.scrollBar.containerEl)
//      console.log(this.scrollBar.contentEl)
//      const pagecopy = pageContent.cloneNode(true)
//      this.blurNav.appendChild(pagecopy)
      this.scrollBar.addListener(this.scrollBlur)
      this.scrollBar.addListener(this.progressChecker)
      console.log(anime)
      this.space = document.getElementById('space')
      this.spacePath = document.getElementById('spacePath')
      this.avatar = document.getElementById('avatar')
      this.rocket = document.getElementById('rocket')
      this.topIntroLeft = document.getElementById('top-intro-left')
      this.topIntroRight = document.getElementById('top-intro-right')

      this.reactiveHandler()
      window.addEventListener('resize', this.reactiveHandler)
//      // console.log('path', this.rocketFlame1)
//      const str1 = 'M27.64,85.08c0-4.52-7.06-4.68-7.06,0,0,1.41,0,3.65,0,5.14A3.55,3.55,0,1,0,27.66,90C27.64,88.66,27.64,86.61,27.64,85.08Z'
//      const str2 = 'M27.63,78.73c0-5.41-7.11-5.16-7.09,0,0,2.87,0,13.37,0,16.69,0,4.9,7.11,5.22,7.09.06C27.6,92.29,27.63,82.69,27.63,78.73Z'
//      // const shapes = pasition.lerp(str1, str2, 0.5)
//      const aa = pasition.animate({
//        from: str1,
//        to: str2,
//        time: 0.5,
//        easing: () => {},
//        begin: () => {},
//        progress: function (shapes, percent) { console.log(shapes, percent) },
//        end: function (shapes) { }
//      })
//      const str3 = toSVGString(pasition.lerp(str2, str1, 0.5))
//      const path1 = Snap.parsePathString(str1)
//      const path2 = Snap.parsePathString(str2)
//      const dif = Snap.path.intersection(str1, str2)
//      console.log('path', str3, aa, path1, path2, dif)
//      this.rocketFlameAni1A()
//      this.rocketFlameAni2A()
//      this.rocketFlameAni3A()
//      this.rocketFlameAni4A()
//      this.rocketFlameAni5A()
//      this.rocketFlameAni6A()
//      var path = anime.path('#space path')
//      var motionPath = anime({
//        targets: '#avatar',
//        translateX: path,
//        translateY: path,
//        rotate: path,
//        easing: 'linear',
//        duration: 2000,
//        loop: true
//      })
//
//      console.log(motionPath)
    },
    methods: {
      reactiveHandler () {
        this.rocketCenterOffsetX = (window.innerWidth - this.rocket.getBoundingClientRect().width) / 2
        this.rocketCenterOffsetY = -this.rocket.getBoundingClientRect().height / 2
        this.avatarCenterOffsetX = (window.innerWidth - this.avatar.getBoundingClientRect().width) / 2
        this.avatarCenterOffsetY = -this.avatar.getBoundingClientRect().height / 2

        const spaceCenterOffset = (window.innerWidth - this.space.getBoundingClientRect().width) / 2
        const ratio = this.space.getBoundingClientRect().width / this.space.viewBox.baseVal.width
        const curPoint = this.spacePath.getPointAtLength(0)
        const y = curPoint.y * ratio
        this.space.style.transform = `translate3d(${spaceCenterOffset}px, 0 ,0)`
        this.avatar.style.transform = `translate3d(${this.avatarCenterOffsetX}px, ${this.avatarCenterOffsetY + y}px, 0) scale(1, 1)`
        this.rocket.style.transform = `translate3d(${this.rocketCenterOffsetX}px, ${this.rocketCenterOffsetY + y}px, 0)`
      },
      scrollBlur () {
        this.blurNav.scrollTop = this.scrollBar.offset.y
      },
      progressChecker () {
        this.scrollOffset = this.scrollBar.offset.y
        this.progress = this.scrollBar.offset.y / (this.scrollBar.size.content.height - window.innerHeight)
        const ratio = this.space.getBoundingClientRect().width / this.space.viewBox.baseVal.width
        // const ratio = 1
        const totalL = this.spacePath.getTotalLength()
        const curL = totalL * this.progress
        const curPoint = this.spacePath.getPointAtLength(curL)
        if (this.lastSVGPoint) {
          this.movingDirection = -Math.atan2(curPoint.y - this.lastSVGPoint.y, curPoint.x - this.lastSVGPoint.x) * 180 / Math.PI
        }
        this.lastSVGPoint = curPoint
        // const x = curPoint.x * ratio + this.space.getBoundingClientRect().left
        const y = curPoint.y * ratio
        const avatarFlag = Math.abs(this.progress - 0.5)

        const spaceCenterOffset = (window.innerWidth - this.space.getBoundingClientRect().width) / 2
        // const avatarCenterOffset = (window.innerWidth - this.avatar.getBoundingClientRect().width) / 2

        if (avatarFlag >= 0.45) {
          let scale = 1 - (0.5 - avatarFlag) / 0.05
          // this.avatar.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}, ${scale})`
          this.avatar.style.transform = `translate3d(${this.avatarCenterOffsetX}px, ${this.avatarCenterOffsetY + y}px, 0) scale(${scale}, ${scale})`
          // this.avatar.style.transform = `translate3d(${avatarCenterOffset}px, ${y}px, 0) scale(${scale}, ${scale})`
          this.topIntroLeft.style.transform = `scale(${scale}, ${scale})`
          this.topIntroRight.style.transform = `scale(${scale}, ${scale})`
        } else {
          // this.avatar.style.transform = `translate3d(${avatarCenterOffset}px, ${y}px, 0) scale(0, 0)`
          this.avatar.style.transform = `translate3d(${this.avatarCenterOffsetX}px, ${this.avatarCenterOffsetY + y}px, 0) scale(0, 0)`
          // this.avatar.style.transform = `translate3d(${x}px, ${y}px, 0) scale(0, 0)`
          this.topIntroLeft.style.transform = `scale(0, 0)`
          this.topIntroRight.style.transform = `scale(0, 0)`
        }
        // console.log('progress', this.progress, curPoint.x, this.space.width.baseVal.value, this.space.offsetWidth, this.space.getBoundingClientRect().width, this.space.viewBox.baseVal.width, ratio, this.space.getBoundingClientRect().left, `translate3d(${x}px, ${y}px, 0)`)
        // this.avatar.style.transform = `translate3d(${x}px, ${y}px ,0)`
        const midOffset = (this.space.viewBox.baseVal.width / 2 - curPoint.x) * ratio
        this.midOffset = midOffset
        console.log('SSSSSSSSS', this.rocketCenterOffsetX, this.rocketCenterOffsetY, y)
        this.space.style.transform = `translate3d(${spaceCenterOffset + midOffset}px, 0 ,0)`
        this.rocket.style.transform = `translate3d(${this.rocketCenterOffsetX}px, ${this.rocketCenterOffsetY + y}px, 0) rotate(${-this.movingDirection - 90}deg)`
        // this.space.style.transform = `translate3d(${midOffset}px, 0 ,0)`
        // console.log(this.progress, this.space.getBoundingClientRect().left, this.space.getBoundingClientRect().width, ratio, x, y)
        // this.rocket.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${-this.movingDirection - 90}deg)`
      }
//      scrollBlur () {
//        this.blurNav.scrollTop = this.scrollBar.offset.y
//        console.log('size', this.scrollBar.size)
//      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/variables";

  .space {
    width: 100%;
    height: 100%;
    background-image: url("../assets/space-bg.svg");
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
    opacity: 1;
    // margin-left: -125px;
    // margin-top: -125px;
    background-image: url("../assets/avatar.png");
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
  #top-intro-left {
    position: absolute;
    top:50vh;
    left: 50vw;
    width: 220px;
    margin-left: -400px;
    color: white;
    font-family: $fontAXIS;

    > h1 {
      font-size: 60px;
    }
    > h2 {
      font-size: 20px;
    }
  }

  $fs-l: 30px;
  $fs-m: $fs-l * 0.79;
  $fs-s: $fs-l * 0.5;
  #top-intro-right {
    position: absolute;
    top:50vh;
    left: 50vw;
    margin-left: 180px;
    width: 220px;
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
      margin: 2px;
    }
  }




  $font-xl: 4.691vh;

  #CV-education {
    position: absolute;
    width: 100%;
    top: 150vh;
    text-align: center;
    left: 300px;
  }
  #CV-education-content {
    position: absolute;
    width: 100%;
    top: 170vh;
    text-align: center;
    left: 300px;
  }
  #CV-skills {
    position: absolute;
    width: 100%;
    top: 250vh;
    text-align: center;
    left: -300px;
  }
  #CV-experience {
    position: absolute;
    width: 100%;
    top: 350vh;
    text-align: center;
    left: 300px;
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
    background-image: url("../assets/stars-tiny.png");

  }
  #mid-stars {
    position: absolute;
    top: 0;
    left: -70vw;
    width: 240vw;
    height: 240vh;
    opacity: 0.5;
    background-image: url("../assets/stars-mid.png");
    background-repeat: space;

  }
  #big-stars {
    position: absolute;
    top: 0;
    left: -200vw;
    width: 500vw;
    height: 500vh;
    background-image: url("../assets/stars-big.png");
    background-repeat: space;

  }


</style>
