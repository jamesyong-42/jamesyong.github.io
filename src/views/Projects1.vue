<template>
  <div id="page-content" class="projects-content">
    <section id="project-intro" class="hero is-fullheight" style="background-color: #22c3aa">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Full Height title
          </h1>
          <h2 class="subtitle">
            Full Height subtitle
          </h2>
        </div>
      </div>
    </section>
    <parallax :speedFactor="0" :sectionStyle="projectStyle1" :containerClass="'project-content-2x'">
      <div class="project-content-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-left"
        >
          <path
            :class="['animated', progress > 10.32 ? 'lineIn' : 'lineOut']"
            fill="#ffffff" fill-opacity="0" stroke="#a95c6a" stroke-width="8" stroke-miterlimit="10"
            d="M281.000,0.000 L0.000,0.000 Z"/>
        </svg>
        <h1 :class="['project-headline', 'trinity-headline', 'animated', progress > 10.32 ? 'fadeInLandFade' : 'fadeOutLiftFade']">web</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-right"
        >
          <path
            :class="['animated', progress > 10.32 ? 'lineIn' : 'lineOut']"
            fill="#ffffff" fill-opacity="0" stroke="#a95c6a" stroke-width="8" stroke-miterlimit="10"
            d="M0.000,0.000 L281.000,0.000 Z"/>
        </svg>
        <img src="../assets/Trinity.svg">
        <h1 :class="['project-title', 'trinity-title-mask', 'animated', progress > 7.25 ? 'fadeInLand' : 'fadeOutLift']">vue trinity</h1>
        <!--<h1 :class="['trinity-title-mask']">vue trinity</h1>-->
        <p :class="['project-subtitle', 'animated', progress > 7.7 ? 'fadeInLand' : 'fadeOutLift']">一个前后端分离的类商城项目</p>
      </div>
    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax :speedFactor="trinitySpeedFactor" :sectionStyle="projectStyle1" :containerClass="'project-content-10x'">
      <div class="project-content-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-left"
        >
          <path
            fill="#ffffff" fill-opacity="0" stroke="none" stroke-width="8" stroke-miterlimit="10"
            d="M281.000,0.000 L0.000,0.000 Z"/>
        </svg>
        <h1 class="project-headline trinity-headline" style="color: transparent">web</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-right"
        >
          <path
            fill="#ffffff" fill-opacity="0" stroke="none" stroke-width="8" stroke-miterlimit="10"
            d="M0.000,0.000 L281.000,0.000 Z"/>
        </svg>
        <img src="../assets/trinity-logo-real.png">
        <h1 class="project-title trinity-title-real">vue trinity</h1>
        <p class="project-subtitle" style="color: transparent">一个前后端分离的类商城项目</p>
      </div>
      <div :data-parallaxfactor="1" data-originoffset="500" data-startsign="300" data-stopsign="-633" data-restartsign="-7800" style="position: relative; top: 30vh; width: 562.685px; margin: auto;" >
        <!--<svg-->
          <!--xmlns="http://www.w3.org/2000/svg"-->
          <!--xmlns:xlink="http://www.w3.org/1999/xlink"-->
          <!--width="14.453cm" height="12.583cm">-->
          <!--<path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="3.79px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"-->
                <!--d="M405.344,2.466 L204.372,352.069 L2.093,3.221 L405.344,2.466 Z"/>-->
        <!--</svg>-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="562.685px" height="489.685px">
          <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="5px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                d="M479.895,69.895 L280.372,419.069 L78.895,69.895 L479.895,69.895 Z"/>
          <path :class="['animated', progress > 21.11 ? 'lineIn' : 'lineOut']"
            fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="5px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                d="M280.361,417.384 L319.994,484.565 L241.676,485.486 L280.361,417.384 Z"/>
          <path :class="['animated', progress > 21.11 ? 'lineIn' : 'lineOut']"
            fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="5px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                d="M479.895,69.895 L518.361,2.384 L557.994,69.565 L479.895,69.895 Z"/>
          <path :class="['animated', progress > 21.11 ? 'lineIn' : 'lineOut']"
            fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="5px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                d="M80.994,70.565 L2.676,71.486 L41.361,3.384 L80.994,70.565 Z"/>
        </svg>
      </div>
      <div id="project-intro-title-admin" :data-parallaxfactor="1" data-originoffset="0" data-startsign="-633" data-stopsign="-1540" data-stopclass="active" data-restartsign="-2910" data-leftoffset="-400" data-leftoffsetorigin="-375" :class="['project-title', 'project-intro-title', 'animated']">
        <h1>admin</h1>
      </div>
      <div id="project-intro-title-server" :data-parallaxfactor="0.45" data-originoffset="0" data-startsign="-633" data-stopsign="-2910" data-stopclass="active" data-restartsign="-4280" data-leftoffset="410" data-leftoffsetorigin="-375" :class="['project-title', 'project-intro-title', 'animated']">
        <h1>server</h1>
      </div>
      <div id="project-intro-title-front" :data-parallaxfactor="0.175" data-originoffset="0" data-startsign="-633" data-stopsign="-4280" data-stopclass="active" data-restartsign="-5920" :class="['project-title', 'project-intro-title', 'animated']">
        <h1>front</h1>
      </div>
      <div id="project-intro-trinity-gallary" :class="['project-title', 'project-intro-title', 'animated', progress > 30.11 ? 'fadeIn' : 'fadeOut']">
        <img src="../assets/parallaxGallery1.png"/>
        <img src="../assets/parallaxGallery2.png"/>
        <img src="../assets/parallaxGallery3.png"/>
        <img src="../assets/parallaxGallery4.png"/>
        <img src="../assets/parallaxGallery5.png"/>
        <img src="../assets/parallaxGallery6.png"/>
      </div>

    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax :speedFactor="0" :sectionStyle="projectStyle1" :containerClass="'project-content'">
      <div class="project-content-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-left"
        >
          <path
            :class="['animated', progress > 33.04 ? 'lineIn' : 'lineOut']"
            fill="#ffffff" fill-opacity="0" stroke="#2b5798" stroke-width="8" stroke-miterlimit="10"
            d="M281.000,0.000 L0.000,0.000 Z"/>
        </svg>
        <h1 :class="['project-headline', 'keypoint-headline', 'animated', progress > 33.04 ? 'fadeInLandFade' : 'fadeOutLiftFade']">IOS</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-right"
        >
          <path
            :class="['animated', progress > 33.04 ? 'lineIn' : 'lineOut']"
            fill="#ffffff" fill-opacity="0" stroke="#2b5798" stroke-width="8" stroke-miterlimit="10"
            d="M0.000,0.000 L281.000,0.000 Z"/>
        </svg>
        <img src="../assets/keypoint-logo-mask.png">
        <h1 :class="['project-title', 'keypoint-title-mask', 'animated', progress > 28.6 ? 'fadeInLand' : 'fadeOutLift']">keypoint</h1>
        <!--<h1 :class="['trinity-title-mask']">vue trinity</h1>-->
        <p :class="['project-subtitle', 'animated', progress > 29 ? 'fadeInLand' : 'fadeOutLift']">一个前后端分离的类商城项目</p>
      </div>
    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax :speedFactor="0" :sectionStyle="projectStyle1" :containerClass="'project-content-5x'">
      <div class="project-content-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-left"
        >
          <path
            fill="#ffffff" fill-opacity="0" stroke="none" stroke-width="8" stroke-miterlimit="10"
            d="M281.000,0.000 L0.000,0.000 Z"/>
        </svg>
        <h1 class="project-headline keypoint-headline" style="color: transparent">IOS</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-right"
        >
          <path
            fill="#ffffff" fill-opacity="0" stroke="node" stroke-width="8" stroke-miterlimit="10"
            d="M0.000,0.000 L281.000,0.000 Z"/>
        </svg>
        <img src="../assets/keypoint-logo-real.png">
        <h1 class="project-title keypoint-title-real">keypoint</h1>
        <p class="project-subtitle" style="color: transparent">一个前后端分离的类商城项目</p>
      </div>
      <div :data-parallaxfactor="1" data-originoffset="500" data-startsign="300" data-stopsign="-633" data-restartsign="-7800" style="position: relative; top: 30vh; width: 562.685px; margin: auto;" >
        <!--<svg-->
        <!--xmlns="http://www.w3.org/2000/svg"-->
        <!--xmlns:xlink="http://www.w3.org/1999/xlink"-->
        <!--width="14.453cm" height="12.583cm">-->
        <!--<path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="3.79px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"-->
        <!--d="M405.344,2.466 L204.372,352.069 L2.093,3.221 L405.344,2.466 Z"/>-->
        <!--</svg>-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="562.685px" height="489.685px">
          <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="5px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                d="M479.895,69.895 L280.372,419.069 L78.895,69.895 L479.895,69.895 Z"/>
          <path :class="['animated', progress > 21.11 ? 'lineIn' : 'lineOut']"
                fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="5px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                d="M280.361,417.384 L319.994,484.565 L241.676,485.486 L280.361,417.384 Z"/>
          <path :class="['animated', progress > 21.11 ? 'lineIn' : 'lineOut']"
                fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="5px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                d="M479.895,69.895 L518.361,2.384 L557.994,69.565 L479.895,69.895 Z"/>
          <path :class="['animated', progress > 21.11 ? 'lineIn' : 'lineOut']"
                fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="5px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                d="M80.994,70.565 L2.676,71.486 L41.361,3.384 L80.994,70.565 Z"/>
        </svg>
      </div>
      <div id="project-intro-title-keypoint" :data-parallaxfactor="1" data-originoffset="0" data-startsign="-633" data-stopsign="-1540" data-stopclass="active" data-restartsign="-2910" :class="['project-title', 'project-intro-title', 'animated']">
        <h1>keypoint</h1>
      </div>
    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax :speedFactor="0" :sectionStyle="projectStyle1" :containerClass="'project-content'">
      <div class="project-content-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-left"
        >
          <path
            :class="['animated', progress > 54.52 ? 'lineIn' : 'lineOut']"
            fill="#ffffff" fill-opacity="0" stroke="#744184" stroke-width="8" stroke-miterlimit="10"
            d="M281.000,0.000 L0.000,0.000 Z"/>
        </svg>
        <h1 :class="['project-headline', 'matrix-headline', 'animated', progress > 54.52 ? 'fadeInLandFade' : 'fadeOutLiftFade']">PC</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-right"
        >
          <path
            :class="['animated', progress > 54.52 ? 'lineIn' : 'lineOut']"
            fill="#ffffff" fill-opacity="0" stroke="#744184" stroke-width="8" stroke-miterlimit="10"
            d="M0.000,0.000 L281.000,0.000 Z"/>
        </svg>
        <img src="../assets/matrix-logo-mask.png">
        <h1 :class="['project-title', 'matrix-title-mask', 'animated', progress > 50.25 ? 'fadeInLand' : 'fadeOutLift']">matrix</h1>
        <!--<h1 :class="['trinity-title-mask']">vue trinity</h1>-->
        <p :class="['project-subtitle', 'animated', progress > 50.7 ? 'fadeInLand' : 'fadeOutLift']">一个前后端分离的类商城项目</p>
      </div>
    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax :speedFactor="0" :sectionStyle="projectStyle1" :containerClass="'project-content'">
      <div class="project-content-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-left"
        >
          <path
            fill="#ffffff" fill-opacity="0" stroke="none" stroke-width="8" stroke-miterlimit="10"
            d="M281.000,0.000 L0.000,0.000 Z"/>
        </svg>
        <h1 class="project-headline matrix-headline" style="color: transparent">PC</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.913cm" height="0.106cm"
          class="project-headline-line-right"
        >
          <path
            fill="#ffffff" fill-opacity="0" stroke="none" stroke-width="8" stroke-miterlimit="10"
            d="M0.000,0.000 L281.000,0.000 Z"/>
        </svg>
        <img src="../assets/matrix-logo-real.png">
        <h1 class="project-title matrix-title-real">matrix</h1>
        <p class="project-subtitle" style="color: transparent">一个前后端分离的类商城项目</p>
      </div>
    </parallax>
    <section class="hero is-medium is-dark is-bold" style="height: 5px">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <parallax :speedFactor="0.1">
      <img src="https://static1.squarespace.com/static/560d8ccfe4b095370aa9849c/t/563927e7e4b052ca34b006d9/1446586358152/HeaderImage_110315.png">
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
    <parallax :speedFactor="0.1">
      <img src="https://static1.squarespace.com/static/560d8ccfe4b095370aa9849c/t/563927e7e4b052ca34b006d9/1446586358152/HeaderImage_110315.png">
    </parallax>
  </div>

</template>

<script>
  import Parallax from '../components/Parallax.vue'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      Parallax
    },
    data () {
      return {
        blurContent: null,
        mark1: 7.25,
        flag1: false,
        progress: 0
      }
    },
    computed: {
      ...mapGetters({
        scrollBar: 'scrollBar',
        blurNav: 'blurNav'
      }),
      projectStyle1 () {
        if (this.scrollBar.offset && document.getElementById('project-intro')) {
          const offsetY = this.scrollBar.offset.y
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
        if (this.progress > 21.11) {
          return 0
        } else if (this.progress > 16.67) {
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
      },
      parallaxEaseIn (progressMark, speedFactor) {
        if (this.progress > progressMark) {
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
      this.scrollBar.addListener(this.scrollBlur)
      this.scrollBar.addListener(this.progressChecker)
    },
    methods: {
      scrollBlur () {
        this.blurNav.scrollTop = this.scrollBar.offset.y
        console.log('progress', this.progress)
      },
      progressChecker () {
        this.progress = this.scrollBar.offset.y / this.scrollBar.size.content.height * 100
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

  .projects-content {
    width: 100%;
    background-color: $mainBG;
    scroll-behavior: smooth;
    transform-style: preserve-3d;
  }

  .project-content-logo {
    /*-webkit-box-flex: 1;*/
    /*-ms-flex-positive: 1;*/
    /* flex-grow: 1; */
    /*flex-shrink: 1;*/
    position: relative;
    margin: auto;
    width: 300px;
    top: 30vh;




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
  }
  .neon-light {
    background: linear-gradient(270deg, #fb9367, #f92581, #b314ba, #528efc, #33c6fa, #528efc, #b314ba, #f92581, #fb9367);
    background-size: 2000% 2000%;

    -webkit-animation: AnimationName 8s ease infinite;
    -moz-animation: AnimationName 8s ease infinite;
    animation: AnimationName 8s ease infinite;
  }
  @-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }

  .project-title {
    font-family: 'AXIS-ExtraBold', 'Adobe Heiti Std';
    font-weight: 400;
    font-size: 50px;
    line-height: 50px;
    white-space: nowrap;
    text-align: center;
  }
  .project-intro-title {
    > h1 {

      overflow: hidden;
      margin: auto;
      color: #eef3f0;
      background-image: url("../assets/white.png");
      background-repeat:no-repeat;
      background-position: 0 0;
      transition: width .5s ease, background-position .8s ease;
    }
  }

  .trinity-title-mask {
    position: relative;
    left: -19px;
    top: 20px;
    text-shadow: 1px 2px #fb9367, 2px 4px #aee2d9;
    color: #eef3f0;
  }
  .trinity-title-real {
    position: relative;
    left: -19px;
    top: 20px;
    color: transparent;
  }
  .keypoint-title-mask {
    position: relative;
    left: 0;
    top: 20px;
    text-shadow: 1px 2px #b314ba, 2px 4px #aee2d9;
    color: #eef3f0;
  }
  .keypoint-title-real {
    position: relative;
    left: 0;
    top: 20px;
    color: transparent;
  }
  .matrix-title-mask {
    position: relative;
    left: 0;
    top: 20px;
    text-shadow: 1px 2px #528efc, 2px 4px #aee2d9;
    color: #eef3f0;
  }
  .matrix-title-real {
    position: relative;
    left: 0;
    top: 20px;
    color: transparent;
  }

  .project-subtitle {
    color: #eef3f0;
    opacity: 0.6;
    font-size: 20px;
    line-height: 20px;
    position: relative;
    left: 20px;
    top: 40px;
  }
  .project-headline {
    font-family: 'AXIS-ExtraBold';
    font-weight: 400;
    font-size: 60px;
    line-height: 38px;
    white-space: nowrap;
    text-align: center;
    position: relative;
    left: -3px;
    top: -50px;
  }
  .project-headline-line-left {
    position: relative;
    top: -20px;
    left: -235px;
    opacity: 0.5;
  }
  .project-headline-line-right {
    position: relative;
    top: -77.5px;
    left: 245px;
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

  @-webkit-keyframes fadeInLand {
    from {
      opacity: 0;
      transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
    }

    to {
      opacity: 1;
      transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
    }
  }

  @keyframes fadeInLand {
    from {
      opacity: 0;
      transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
    }

    to {
      opacity: 1;
      transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
    }
  }

  .fadeInLand {
    transform-origin: 0% 0%;
    -webkit-animation-name: fadeInLand;
    animation-name: fadeInLand;

  }

  @-webkit-keyframes fadeOutLift {
    from {
      opacity: 1;
      transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
    }
    to {
      opacity: 0;
      transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
    }
  }

  @keyframes fadeOutLift {
    from {
      opacity: 1;
      transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
    }

    to {
      opacity: 0;
      transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
    }
  }

  .fadeOutLift {
    transform-origin: 0% 0%;
    -webkit-animation-name: fadeOutLift;
    animation-name: fadeOutLift;

  }

  @-webkit-keyframes fadeInLandFade {
    from {
      opacity: 0;
      transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
    }

    to {
      opacity: 0.5;
      transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
    }
  }

  @keyframes fadeInLandFade {
    from {
      opacity: 0;
      transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
    }

    to {
      opacity: 0.5;
      transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
    }
  }

  .fadeInLandFade {
    transform-origin: 0% 0%;
    -webkit-animation-name: fadeInLandFade;
    animation-name: fadeInLandFade;

  }

  @-webkit-keyframes fadeOutLiftFade {
    from {
      opacity: 0.5;
      transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
    }
    to {
      opacity: 0;
      transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
    }
  }

  @keyframes fadeOutLiftFade {
    from {
      opacity: 0.5;
      transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(0deg) translateZ(0px);
    }

    to {
      opacity: 0;
      transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -webkit-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -moz-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -o-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
      -ms-transform: scale(1.0) scaleZ(1.0) rotateX(45deg) translateZ(100px) translateY(40px);
    }
  }

  .fadeOutLiftFade {
    transform-origin: 0% 0%;
    -webkit-animation-name: fadeOutLiftFade;
    animation-name: fadeOutLiftFade;

  }
  .lineIn {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation-name: lineIn;
    animation-duration: 1.2s;
    animation-delay: 0.5s;
    animation-timing-function: ease;
  }
  @keyframes lineIn {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  .lineOut {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation-name: lineOut;
    animation-duration: 0.5s;
    animation-delay: 0s;
    animation-timing-function: ease;
  }
  @keyframes lineOut {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: 1000;
    }
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
  #project-intro-trinity-gallary {
    position: relative;
    top: 30vh;
    width: 800px;
    margin: auto;
    margin-top: 120px;

    > img {
      width: 800px;
      position: absolute;
      top:0;
      left: 0;
    }
  }
</style>
