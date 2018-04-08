<template>
  <div class="Projects">
    <parallax class="Projects__Parallax" :speedFactor="0" :scrollOffset="scrollOffset" :sectionStyle="projectStyle1" :scaleClass="'scale-2x'">
      <!--<div class="Projects__Parallax__Content">-->
        <!--<div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item&#45;&#45;headline"-->
             <!--:class="[progress > 2 ? 'Projects__Parallax__Content__Item&#45;&#45;headline&#45;&#45;in' : 'Projects__Parallax__Content__Item&#45;&#45;headline&#45;&#45;out']">-->
          <!--<svg class="animated trinity" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
            <!--viewBox="0 0 100 10"-->
          <!--&gt;-->
            <!--<path-->
              <!--fill="#ffffff" fill-opacity="0" stroke-width="1" stroke-miterlimit="10"-->
              <!--d="M100,5 L0,5 Z"/>-->
          <!--</svg>-->
          <!--<h1 class="animated trinity">web</h1>-->
          <!--<svg class="animated trinity" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
               <!--viewBox="0 0 100 10"-->
          <!--&gt;-->
            <!--<path-->
              <!--fill="#ffffff" fill-opacity="0" stroke-width="1" stroke-miterlimit="10"-->
              <!--d="M0,5 L100,5 Z"/>-->
          <!--</svg>-->
        <!--</div>-->
        <!--<div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item&#45;&#45;logo">-->
          <!--<div class="logo-3d" :class="'frame-' + frame1"></div>-->
        <!--</div>-->
        <!--<div class="Projects__Parallax__Content__Item">-->
          <!--<h1 :class="['trinity-title', 'animated', progress > 2.2 ? 'fadeInLand' : 'fadeOutLift']">vue trinity</h1>-->
        <!--</div>-->
        <!--<div class="Projects__Parallax__Content__Item">-->
          <!--<p :class="['project-subtitle', 'animated', progress > 2.4 ? 'fadeInLand' : 'fadeOutLift']">一个前后端分离的类商城项目</p>-->
        <!--</div>-->
      <!--</div>-->

      <div class="Projects__Parallax__Content">
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--logo">
          <div class="logo-3d" :class="'frame-' + frame1"></div>
        </div>
      </div>
    </parallax>
    <section class="Projects__NonParallax hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax class="Projects__Parallax" :speedFactor="0" :scrollOffset="scrollOffset" :sectionStyle="projectStyle1" :scaleClass="'scale-10x'">
      <!--<div class="Projects__Parallax__Content">-->
        <!--<div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item&#45;&#45;headline">-->
          <!--<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
               <!--viewBox="0 0 100 10"-->
          <!--&gt;-->
            <!--<path-->
              <!--fill-opacity="0" stroke="none" stroke-width="2" stroke-miterlimit="10"-->
              <!--d="M100,5 L0,5 Z"/>-->
          <!--</svg>-->
          <!--<h1 style="opacity: 0">web</h1>-->
          <!--<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
               <!--viewBox="0 0 100 10"-->
          <!--&gt;-->
            <!--<path-->
              <!--fill-opacity="0" stroke="none" stroke-width="2" stroke-miterlimit="10"-->
              <!--d="M0,5 L100,5 Z"/>-->
          <!--</svg>-->
        <!--</div>-->
        <!--<div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item&#45;&#45;logo">-->
          <!--<div class="logo-3d frame-7"></div>-->
        <!--</div>-->
        <!--<div class="Projects__Parallax__Content__Item">-->
          <!--<h1 :class="['trinity-title']" style="opacity: 0">vue trinity</h1>-->
        <!--</div>-->
        <!--<div class="Projects__Parallax__Content__Item">-->
          <!--<p :class="['project-subtitle']" style="opacity: 0">一个前后端分离的类商城项目</p>-->
        <!--</div>-->
        <!--<div class="WormholeContainer">-->
          <!--<wormhole :scrollOffset="scrollOffset" :cueIn="2500" :cueOut="9000"></wormhole>-->
        <!--</div>-->
      <!--</div>-->

      <div class="Projects__Parallax__Content">
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--logo">
          <div class="logo-3d frame-7"></div>
        </div>
        <div class="WormholeContainer">
          <wormhole :scrollOffset="scrollOffset" :cueIn="2500" :cueOut="13000"></wormhole>
        </div>
      </div>
    </parallax>
    <section class="Projects__NonParallax hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax class="Projects__Parallax" :speedFactor="0" :scrollOffset="scrollOffset" :sectionStyle="projectStyle1" :scaleClass="'scale-2x'">
      <div class="Projects__Parallax__Content">
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--headline"
             :class="[progress > 33.04 ? 'Projects__Parallax__Content__Item--headline--in' : 'Projects__Parallax__Content__Item--headline--out']">
          <svg class="animated keypoint" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 100 10"
          >
            <path
              fill="#ffffff" fill-opacity="0" stroke-width="1" stroke-miterlimit="10"
              d="M100,5 L0,5 Z"/>
          </svg>
          <h1 class="animated keypoint">IOS</h1>
          <svg class="animated keypoint" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 100 10"
          >
            <path
              fill="#ffffff" fill-opacity="0" stroke-width="1" stroke-miterlimit="10"
              d="M0,5 L100,5 Z"/>
          </svg>
        </div>
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--logo">
          <div class="logos keypoint-mask"></div>
        </div>
        <div class="Projects__Parallax__Content__Item">
          <h1 :class="['keypoint-title', 'animated', progress > 28.6 ? 'fadeInLand' : 'fadeOutLift']">keypoint</h1>
        </div>
        <div class="Projects__Parallax__Content__Item">
          <p :class="['project-subtitle', 'animated', progress > 29 ? 'fadeInLand' : 'fadeOutLift']">一个前后端分离的类商城项目</p>

        </div>
      </div>
    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax class="Projects__Parallax" :speedFactor="0" :scrollOffset="scrollOffset" :sectionStyle="projectStyle1" :scaleClass="'scale-10x'">
      <div class="Projects__Parallax__Content">
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--headline">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 100 10"
          >
            <path
              fill-opacity="0" stroke="none" stroke-width="2" stroke-miterlimit="10"
              d="M100,5 L0,5 Z"/>
          </svg>
          <h1 style="opacity: 0">IOS</h1>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 100 10"
          >
            <path
              fill-opacity="0" stroke="none" stroke-width="2" stroke-miterlimit="10"
              d="M0,5 L100,5 Z"/>
          </svg>
        </div>
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--logo">
          <div class="logos keypoint"></div>
        </div>
        <div class="Projects__Parallax__Content__Item">
          <h1 :class="['trinity-title']" style="opacity: 0">keypoint</h1>
        </div>
        <div class="Projects__Parallax__Content__Item">
          <p :class="['project-subtitle']" style="opacity: 0">一个前后端分离的类商城项目</p>
        </div>
      </div>


    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax class="Projects__Parallax" :speedFactor="0" :scrollOffset="scrollOffset" :sectionStyle="projectStyle1" :scaleClass="'scale-2x'">
      <div class="Projects__Parallax__Content">
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--headline"
             :class="[progress > 54.52 ? 'Projects__Parallax__Content__Item--headline--in' : 'Projects__Parallax__Content__Item--headline--out']">
          <svg class="animated matrix" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 100 10"
          >
            <path
              fill="#ffffff" fill-opacity="0" stroke-width="1" stroke-miterlimit="10"
              d="M100,5 L0,5 Z"/>
          </svg>
          <h1 class="animated matrix">PC</h1>
          <svg class="animated matrix" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 100 10"
          >
            <path
              fill="#ffffff" fill-opacity="0" stroke-width="1" stroke-miterlimit="10"
              d="M0,5 L100,5 Z"/>
          </svg>
        </div>
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--logo">
          <div class="logos matrix-mask"></div>
        </div>
        <div class="Projects__Parallax__Content__Item">
          <h1 :class="['matrix-title', 'animated', progress > 50.25 ? 'fadeInLand' : 'fadeOutLift']">matrix</h1>
        </div>
        <div class="Projects__Parallax__Content__Item">
          <p :class="['project-subtitle', 'animated', progress > 50.7 ? 'fadeInLand' : 'fadeOutLift']">一个前后端分离的类商城项目</p>

        </div>
      </div>

    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax class="Projects__Parallax" :speedFactor="0" :scrollOffset="scrollOffset" :sectionStyle="projectStyle1" :scaleClass="'scale-10x'">
      <div class="Projects__Parallax__Content">
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--headline">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 100 10"
          >
            <path
              fill-opacity="0" stroke="none" stroke-width="2" stroke-miterlimit="10"
              d="M100,5 L0,5 Z"/>
          </svg>
          <h1 style="opacity: 0">PC</h1>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 100 10"
          >
            <path
              fill-opacity="0" stroke="none" stroke-width="2" stroke-miterlimit="10"
              d="M0,5 L100,5 Z"/>
          </svg>
        </div>
        <div class="Projects__Parallax__Content__Item Projects__Parallax__Content__Item--logo">
          <div class="logos matrix"></div>
        </div>
        <div class="Projects__Parallax__Content__Item">
          <h1 :class="['matrix-title']" style="opacity: 0">matrix</h1>
        </div>
        <div class="Projects__Parallax__Content__Item">
          <p :class="['project-subtitle']" style="opacity: 0">一个前后端分离的类商城项目</p>
        </div>
      </div>

    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax class="Projects__Parallax" :speedFactor="0.1" :scrollOffset="scrollOffset">
      <div id="project-intro-trinity-gallary" @mousemove="gallaryMouseHover($event)" :class="['project-title', 'project-intro-title', 'animated']">
        <img class="galary-bg" data-depth="1.3" src="/parallaxGallery1.png"/>
        <img class="galary-bg" data-depth="0.8" src="/parallaxGallery2.png"/>
        <img class="galary-bg" data-depth="0.5" src="/parallaxGallery3.png"/>
        <img class="galary-bg" data-depth="0.3" src="/parallaxGallery4.png"/>
        <img class="galary-bg" data-depth="0.2" src="/parallaxGallery5.png"/>
        <img class="galary-bg" data-depth="0.1" src="/parallaxGallery6.png"/>
        <img :class="['project-intro-trinity-gallary-pic', 'a', 'animated', galaA ? 'zoomIn' : 'zoomOut']" data-depth="2.1" src="https://c1.staticflickr.com/5/4788/40707159581_bdc2eb4dba_b.jpg">
        <img :class="['project-intro-trinity-gallary-pic', 'b', 'animated', galaB ? 'zoomIn' : 'zoomOut']" data-depth="2.1" src="https://c1.staticflickr.com/5/4788/40707159581_bdc2eb4dba_b.jpg">
        <img :class="['project-intro-trinity-gallary-pic', 'c', 'animated', galaC ? 'zoomIn' : 'zoomOut']" data-depth="2.1" src="https://c1.staticflickr.com/5/4788/40707159581_bdc2eb4dba_b.jpg">
        <img :class="['project-intro-trinity-gallary-pic', 'd', 'animated', galaD ? 'zoomIn' : 'zoomOut']" data-depth="2.1" src="https://c1.staticflickr.com/5/4788/40707159581_bdc2eb4dba_b.jpg">
      </div>
    </parallax>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary bold title
          </h1>
          <h2 class="subtitle">
            Primary bold subtitle
          </h2>
        </div>
      </div>
    </section>
    <parallax class="Projects__Parallax" :speedFactor="0.1" :scrollOffset="scrollOffset">
      <img src="https://static1.squarespace.com/static/560d8ccfe4b095370aa9849c/t/563927e7e4b052ca34b006d9/1446586358152/HeaderImage_110315.png">
    </parallax>
  </div>

</template>

<script>
  import Parallax from '~/components/Parallax4.vue'
  import Wormhole from '~/components/Wormhole.vue'
  import ParallaxJs from 'parallax-js'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      Parallax,
      Wormhole
    },
    data () {
      return {
        blurContent: null,
        mark1: 7.25,
        flag1: false,
        progress: 0,
        galaA: false,
        galaB: false,
        galaC: false,
        galaD: false,
        frame1: 1
      }
    },
    computed: {
      ...mapGetters({
        scrollBar: 'scrollBar',
        scrollOffset: 'scrollOffset',
        blurNav: 'blurNav'
      }),
      projectStyle1 () {
        if (this.scrollOffset && document.getElementById('project-intro')) {
          const offsetY = this.scrollOffset
          const introBannerHeight = document.getElementById('project-intro').getBoundingClientRect().height
          let introOffset = offsetY - introBannerHeight
          return {
            'background': 'linear-gradient(270deg, #fb9367, #f92581, #b314ba, #528efc, #33c6fa, #528efc, #b314ba, #f92581, #fb9367)',
            'background-size': '2000% 2000%',
            'background-position': (introOffset > 0) ? `${introOffset / 8000 * 100}% 50%` : `0% 50%`,
            'z-index': '998'
          }
        } else {
          return {
            'background': 'linear-gradient(270deg, #fb9367, #f92581, #b314ba, #528efc, #33c6fa, #528efc, #b314ba, #f92581, #fb9367)',
            'background-size': '2000% 2000%',
            'background-position': `0% 50%`,
            'z-index': '998'
          }
        }
      },
      trinitySpeedFactor () {
        if (this.progress > 4.5) {
          return 0.1
        } else {
          return 0
        }
      },
      trinityAdminParalllaxFactor () {
        if (this.progress > 21.11) {
          return 0
        } else if (this.progress > 16.67) {
          return 0.1
        } else {
          return 0
        }
      }
//      parallaxEaseIn (progressMark, speedFactor) {
//        if (this.progress > progressMark) {
//        }
//      }
    },
    watch: {
      scrollOffset (val) {
        const scrollOffset = val
        const contentHeight = this.$el.clientHeight

        const factor = 2
        const p = scrollOffset / contentHeight * 100
        this.progress = p
        if (p < factor) {
          this.frame1 = Math.floor(p / factor * 100 / 16)
        }
        if (this.blurNav) {
          this.blurNav.scrollTop = scrollOffset
        }

      }
    },
    mounted () {
//      const pageContent = document.getElementById('page-content')
//      console.log(pageContent)
//      console.log(this.scrollBar.containerEl)
//      console.log(this.scrollBar.contentEl)
//      const pagecopy = pageContent.cloneNode(true)
//      this.blurNav.appendChild(pagecopy)
//      this.scrollBar.update()
//      this.scrollBar.addListener(this.scrollBlur)
//      this.scrollBar.addListener(this.progressChecker)
      var gallary = document.getElementById('project-intro-trinity-gallary')
      var parallaxGallary = new ParallaxJs(gallary, {
        hoverOnly: true,
        pointerEvents: true
      })
      console.log(parallaxGallary)
    },

    beforeRouteLeave (to, from, next) {

//      this.scrollBar.removeListener(this.scrollBlur)
//      this.scrollBar.removeListener(this.progressChecker)

      this.$store.dispatch('toggleMobileNav', false)
      next()

    },
    methods: {
      gallaryMouseHover (e) {
        let offsetTop = e.target.getBoundingClientRect().top
        let offsetLeft = e.target.getBoundingClientRect().left
        let x = e.pageX - offsetLeft
        let y = e.pageY - offsetTop
        let centerX = e.target.offsetWidth / 2
        let centerY = e.target.offsetHeight / 2
        let deltaX = x - centerX
        let deltaY = centerY - y
        console.log(deltaX, deltaY)
        // let percentX = deltaX / centerX
        // let percentY = deltaY / centerY
        if (deltaX > 0 && deltaY > 0 && this.galaD === false) {
          this.galaA = false
          this.galaB = false
          this.galaC = false
          this.galaD = true
          return
        }
        if (deltaX < 0 && deltaY > 0 && this.galaC === false) {
          this.galaA = false
          this.galaB = false
          this.galaC = true
          this.galaD = false
          return
        }
        if (deltaX > 0 && deltaY < 0 && this.galaA === false) {
          this.galaA = true
          this.galaB = false
          this.galaC = false
          this.galaD = false
          return
        }
        if (deltaX < 0 && deltaY < 0 && this.galaB === false) {
          this.galaA = false
          this.galaB = true
          this.galaC = false
          this.galaD = false
        }
      }
//      scrollBlur () {
//        this.blurNav.scrollTop = this.scrollBar.offset.y
//        console.log('progress', this.progress)
//      },
//      progressChecker () {
//        const factor = 2.2
//        const p = this.scrollBar.offset.y / this.scrollBar.size.content.height * 100
//        this.progress = p
//        if (p < factor) {
//          this.frame1 = Math.floor(p / factor * 100 / 16)
//        }
//      }
//      scrollBlur () {
//        this.blurNav.scrollTop = this.scrollBar.offset.y
//        console.log('size', this.scrollBar.size)
//      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";

  $font-xl: 4.691vh;
  $font-l: 3.91vh;

  @keyframes lineIn {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes lineOut {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: 1000;
    }
  }

  @keyframes fadeInLand {
    from {
      opacity: 0;
      transform: rotateX(20deg) translate3d(0, 1000%, 10px);
      -webkit-transform: rotateX(20deg) translate3d(0, 1000%, 10px);
      -moz-transform: rotateX(20deg) translate3d(0, 1000%, 10px);
      -o-transform: rotateX(20deg) translate3d(0, 1000%, 10px);
      -ms-transform: rotateX(20deg) translate3d(0, 1000%, 10px);
    }

    to {
      opacity: 1;
      transform: rotateX(0deg) translate3d(0, 0, 0);
      -webkit-transform: rotateX(0deg) translate3d(0, 0, 0);
      -moz-transform: rotateX(0deg) translate3d(0, 0, 0);
      -o-transform: rotateX(0deg) translate3d(0, 0, 0);
      -ms-transform: rotateX(0deg) translate3d(0, 0, 0);
    }
  }

  .fadeInLand {
    transform-origin: 50% 50%;
    -webkit-animation-name: fadeInLand;
    animation-name: fadeInLand;

  }

  @keyframes fadeOutLift {
    from {
      opacity: 1;
      transform: rotateX(0deg) translate3d(0, 0, 0);
      -webkit-transform: rotateX(0deg) translate3d(0, 0, 0);
      -moz-transform: rotateX(0deg) translate3d(0, 0, 0);
      -o-transform: rotateX(0deg) translate3d(0, 0, 0);
      -ms-transform: rotateX(0deg) translate3d(0, 0, 0);
    }

    to {
      opacity: 0;
      transform: rotateX(20deg) translate3d(0, 1000%, 10px);
      -webkit-transform: rotateX(20deg) translate3d(0, 1000%, 10px);
      -moz-transform: rotateX(20deg) translate3d(0, 1000%, 10px);
      -o-transform: rotateX(20deg) translate3d(0, 1000%, 10px);
      -ms-transform: rotateX(20deg) translate3d(0, 1000%, 10px);
    }
  }

  .fadeOutLift {
    transform-origin: 50% 50%;
    -webkit-animation-name: fadeOutLift;
    animation-name: fadeOutLift;

  }
  @keyframes fadeInLandFade {
    from {
      opacity: 0;
      transform: rotateX(-20deg) translate3d(0, -500%, 10px);
      -webkit-transform: rotateX(-20deg) translate3d(0, -500%, 10px);
      -moz-transform: rotateX(-20deg) translate3d(0, -500%, 10px);
      -o-transform: rotateX(-20deg) translate3d(0, -500%, 10px);
      -ms-transform: rotateX(-20deg) translate3d(0, -500%, 10px);
    }

    to {
      opacity: 0.5;
      transform: rotateX(0deg) translate3d(0, 0, 0);
      -webkit-transform: rotateX(0deg) translate3d(0, 0, 0);
      -moz-transform: rotateX(0deg) translate3d(0, 0, 0);
      -o-transform: rotateX(0deg) translate3d(0, 0, 0);
      -ms-transform: rotateX(0deg) translate3d(0, 0, 0);
    }
  }


  @keyframes fadeOutLiftFade {
    from {
      opacity: 0.5;
      transform: rotateX(0deg) translate3d(0, 0, 0);
      -webkit-transform: rotateX(0deg) translate3d(0, 0, 0);
      -moz-transform: rotateX(0deg) translate3d(0, 0, 0);
      -o-transform: rotateX(0deg) translate3d(0, 0, 0);
      -ms-transform: rotateX(0deg) translate3d(0, 0, 0);
    }

    to {
      opacity: 0;
      transform: rotateX(-20deg) translate3d(0, -500%, 10px);
      -webkit-transform: rotateX(-20deg) translate3d(0, -500%, 10px);
      -moz-transform: rotateX(-20deg) translate3d(0, -500%, 10px);
      -o-transform: rotateX(-20deg) translate3d(0, -500%, 10px);
      -ms-transform: rotateX(-20deg) translate3d(0, -500%, 10px);
    }
  }


  .Projects {
    width: 100%;
    transform-style: preserve-3d;
    h1 {
      font-family: 'AXIS-ExtraBold', 'Adobe Heiti Std';
      font-weight: 400;
      font-size: $font-l;
      line-height: $font-l;
      white-space: nowrap;
      text-align: center;
    }

    &__Parallax {
      position: relative;
      margin: auto;
      width: 100%;

      &__Content {
        width: 50%;
        @media (max-width: 768px) {
          width: 100%;
        }
        padding-top: 30vh;
        margin: auto;
        height: 100%;
        position: relative;

        perspective: 200;
        perspective-origin: 50% 50%;
        transform-origin: 0% 0%;
        -ms-transform-origin: 0% 0%;
        -ms-perspective: 200;
        -ms-perspective-origin: 50% 50%;
        -o-transform-origin: 0% 0%;
        -o-perspective: 200;
        -o-perspective-origin: 50% 50%;
        -moz-transform-origin: 0% 0%;
        -moz-perspective: 200;
        -moz-perspective-origin: 50% 50%;
        -webkit-transform-origin: 0% 0%;
        -webkit-perspective: 200;
        -webkit-perspective-origin: 50% 50%;

        &__Item {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;


          &--headline {
            margin-top: -50px;
            margin-bottom: 50px;
            svg {
              width: 38%;
              &.trinity {
                stroke: #a95c6a;
              }
              &.keypoint {
                stroke: #2b5798;
              }
              &.matrix {
                stroke: #744184;
              }
            }
            h1 {
              margin: 0 10px;
              &.trinity {
                stroke: #a95c6a;
              }
              &.keypoint {
                stroke: #2b5798;
              }
              &.matrix {
                stroke: #744184;
              }
            }
            &--in {
              svg {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation-name: lineIn;
                animation-duration: 1.2s;
                animation-delay: 0.5s;
                animation-timing-function: ease;
              }
              h1 {
                transform-origin: 50% 50%;
                -webkit-animation-name: fadeInLandFade;
                animation-name: fadeInLandFade;
              }
            }
            &--out {
              svg {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation-name: lineOut;
                animation-duration: 0.5s;
                animation-delay: 0s;
                animation-timing-function: ease;
              }
              h1 {
                transform-origin: 50% 50%;
                -webkit-animation-name: fadeOutLiftFade;
                animation-name: fadeOutLiftFade;
              }
            }
          }
          &--logo {
            > div {
              margin-top:50px;
              width: 300px;
              height: 300px;

            }
          }
        }
      }
    }
  }

  .logo-3d {
    background-image: url('/spriteA.png');
    background-repeat: no-repeat;
    &.frame-0 {
      background-position: -5px -5px;
    }
    &.frame-1 {
      background-position: -315px -5px;
    }
    &.frame-2 {
      background-position: -5px -315px;
    }

    &.frame-3 {
      background-position: -315px -315px;
    }

    &.frame-4 {
      background-position: -625px -5px;
    }

    &.frame-5 {
      background-position: -625px -315px;
    }

    &.frame-6 {
      background-position: -5px -625px;
    }

    &.frame-7 {
      background-position: -315px -625px;
    }
  }
  .logos {
    background-image: url('/spriteB.png');
    background-repeat: no-repeat;
    &.keypoint {
      background-position: -5px -5px;
    }
    &.keypoint-mask {
      background-position: -315px -5px;
    }
    &.matrix {
      background-position: -5px -315px;
    }
    &.matrix-mask {
      background-position: -315px -315px;
    }
  }

  .WormholeContainer {
    position: absolute;
    top: -95px;
    left: 0;
    width: 100vw;
    height: calc(100vh + 95px);
    // background-color: #1d1eff;
    z-index: 999;
  }
  .projects-content {
    // width: 100%;
    //
    // scroll-behavior: smooth;
    // transform-style: preserve-3d;
  }

  .project-content-logo {
    /*-webkit-box-flex: 1;*/
    /*-ms-flex-positive: 1;*/
    /* flex-grow: 1; */
    /*flex-shrink: 1;*/

  }


  .project-title {
    font-family: 'AXIS-ExtraBold', 'Adobe Heiti Std';
    font-weight: 400;
    font-size: $font-l;
    line-height: $font-l;
    white-space: nowrap;
    text-align: center;
  }
  .project-intro-title {
    > h1 {

      overflow: hidden;
      margin: auto;
      color: #eef3f0;
      background-image: url("/white.png");
      background-repeat:no-repeat;
      background-position: 0 0;
      transition: width .5s ease, background-position .8s ease;
    }
  }






  .trinity-title {
    text-shadow: 1px 2px #fb9367, 2px 4px #aee2d9;
    color: #eef3f0;
  }
  .keypoint-title {
    text-shadow: 1px 2px #b314ba, 2px 4px #aee2d9;
    color: #eef3f0;
  }
  .matrix-title {
    text-shadow: 1px 2px #528efc, 2px 4px #aee2d9;
    color: #eef3f0;
  }

  .project-subtitle {
    color: #eef3f0;
    opacity: 0.6;
    font-size: 1.566vh;
    line-height: 1.566vh;
  }

  .trinity-title-real {
    position: relative;
    left: -1.486vh; //19
    top: 1.566vh; //20
    color: transparent;
  }

  .keypoint-title-real {
    position: relative;
    left: 0;
    top: 1.566vh;
    color: transparent;
  }

  .matrix-title-real {
    position: relative;
    left: 0;
    top: 1.566vh;
    color: transparent;
  }


  .project-headline {
    font-family: 'AXIS-ExtraBold';
    font-weight: 400;
    font-size: $font-xl;
    line-height: 2.97vh;
    white-space: nowrap;
    text-align: center;
    position: relative;
    left: -3px;
    top: -3.91vh;
  }
  .project-headline-line-left {
    position: relative;
    top: -1.566vh;
    left: -18.34vh;
    opacity: 0.5;
  }
  .project-headline-line-right {
    position: relative;
    top: -6.059vh;
    left: 19.156vh;
    opacity: 0.5;
  }
  .trinity-headline {
    color: #a95c6a;
    opacity: 0.5;
  }
  .keypoint-headline {
    color: #2b5798;
    opacity: 0.5;
  }
  .matrix-headline {
    color: #744184;
    opacity: 0.5;
  }






  #project-intro-title-admin {
    position: relative;
    top: 30vh;

    > h1 {
      width: 50px;
    }

    &.active {
      > h1 {
        width: 200px;
        background-position: -200px 0;
      }
      &:after {
        top:20px;
        opacity: 1;
      }
    }
    &:after {
      content: 'javascript html css';
      font-family: 'AXIS-ExtraBold', 'Adobe Heiti Std';
      font-size: 20px;

      position:relative;
      width:100px;
      height:100px;
      background:rgba(0,0,0,.5);
      top:120px;
      left:0;
      opacity: 0;

      transition: top .5s ease-out, opacity .5s ease-out;
    }
  }
  #project-intro-title-server {
    position: relative;
    top: 30vh;

    > h1 {
      width: 50px;
    }

    &.active {
      > h1 {
        width: 240px;
        background-position: -200px 0;
      }
      &:after {
        top:20px;
        opacity: 1;
      }
    }
    &:after {
      content: 'javascript html css';
      font-family: 'AXIS-ExtraBold', 'Adobe Heiti Std';
      font-size: 20px;

      position:relative;
      width:100px;
      height:100px;
      background:rgba(0,0,0,.5);
      top:120px;
      left:0;
      opacity: 0;

      transition: top .5s ease-out, opacity .5s ease-out;
    }
  }
  #project-intro-title-front {
    position: relative;
    top: 30vh;

    > h1 {
      width: 50px;
    }

    &.active {
      > h1 {
        width: 180px;
        background-position: -200px 0;
      }
      &:after {
        top:20px;
        opacity: 1;
      }
    }
    &:after {
      content: 'javascript html css';
      font-family: 'AXIS-ExtraBold', 'Adobe Heiti Std';
      font-size: 20px;

      position:relative;
      width:100px;
      height:100px;
      background:rgba(0,0,0,.5);
      top:120px;
      left:0;
      opacity: 0;

      transition: top .5s ease-out, opacity .5s ease-out;
    }
  }
  #project-intro-title-keypoint {
    position: relative;
    top: 30vh;

    > h1 {
      width: 50px;
    }

    &.active {
      > h1 {
        width: 180px;
        background-position: -200px 0;
      }
      &:after {
        top:20px;
        opacity: 1;
      }
    }
    &:after {
      content: 'javascript html css';
      font-family: 'AXIS-ExtraBold', 'Adobe Heiti Std';
      font-size: 20px;

      position:relative;
      width:100px;
      height:100px;
      background:rgba(0,0,0,.5);
      top:120px;
      left:0;
      opacity: 0;

      transition: top .5s ease-out, opacity .5s ease-out;
    }
  }
  $gala-wid-xl: 62.549vh;
  $gala-wid-l: 50vh;
  #project-intro-trinity-gallary {
    position: relative;
    top: 35vh;
    width: $gala-wid-xl;
    margin: auto;
    margin-top: 0;

    &.galary-bg {
      width: $gala-wid-xl;
      position: absolute;
      opacity: 0.3;
      top:0;
      left: 0;
    }
  }
  $gala-offset-left: $gala-wid-l * 0.4;
  .project-intro-trinity-gallary-pic {
    width: $gala-wid-l;
    position: absolute;
    top:0;
    left: 0;
    pointer-events: none;
    &.a {
      transform-origin: right bottom;
      background-position: right bottom;
      margin-top: -5vh;
      margin-left: -$gala-offset-left;
    }
    &.b {
      transform-origin: left bottom;
      margin-top: -5vh;
      margin-left: $gala-wid-xl - $gala-wid-l + $gala-offset-left;
    }
    &.c {
      transform-origin: left top;
      margin-top: 20vh;
      margin-left: $gala-wid-xl - $gala-wid-l + $gala-offset-left;
    }
    &.d {
      transform-origin: right top;
      margin-top: 20vh;
      margin-left: -$gala-offset-left;
    }

  }

</style>
