<template>
  <div>
    <svg-icons></svg-icons>

    <navbar :class="{'blur': mobileNavShow}"></navbar>
    <mobile-nav v-if="mobileNavShow"></mobile-nav>

    <transition name="fade">
      <retro-transition v-if="transition.on" :routeTo="transition.to" :callback="transition.callback"></retro-transition>
    </transition>
    <nuxt :class="{'blur': mobileNavShow}"></nuxt>
    <!--<sidebar v-if="isShop" :show="sidebar.opened && !sidebar.hidden"></sidebar>-->
    <!--<footer-bar v-blur="blurConfig" :class="[blurConfig.isBlurred ? 'no-click' : 'click']"></footer-bar>-->
    <!--<div v-show="isProjects" id="nav-blur">-->
    <!--<projects-double></projects-double>-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import ProjectsDouble from '~/components/ProjectsDouble.vue'
  import SvgIcons from '~/components/SVGIcons.vue'
  import Navbar from '~/components/Navbar.vue'
  import MobileNav from '~/components/MobileNav.vue'
  import RetroTransition from '~/components/RetroTransition.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      SvgIcons,
      Navbar,
      ProjectsDouble,
      MobileNav,
      RetroTransition
    },

    beforeMount () {
//    const { body } = document
//    const WIDTH = 768
//    const RATIO = 3
//    const handler = () => {
//      if (!document.hidden) {
//        let rect = body.getBoundingClientRect()
//        let isMobile = rect.width - RATIO < WIDTH
//        this.toggleDevice(isMobile ? 'mobile' : 'other')
//        this.toggleSidebar(!isMobile)
//      }
//    }
//    document.addEventListener('visibilitychange', handler)
//    window.addEventListener('DOMContentLoaded', handler)
//    window.addEventListener('resize', handler)
    },
    mounted () {
      this.setBlurNav(document.getElementById('nav-blur'))
      console.log('ggggggggggggggg', this.$route.name)
    },
    computed: {
      ...mapGetters({
        scrollBar: 'scrollBar',
        mobileNavShow: 'mobileNavShow',
        transition: 'transition'
      }),
      isProjects () {
        return this.$route.name === 'Projects'
      },
      navBlur () {
        return {
          isBlurred: true,
          opacity: 1,
          filter: 'blur(4px)',
          transition: 'all .3s linear'
        }
      }
    },
    methods: mapActions([
      'setBlurNav'
    ])
  }
</script>

<style lang="scss">
  @import '~animate.css';
  .animated {
    animation-duration: .377s;
  }

  @import '~bulma';


  html {
    overflow: hidden;
  }
  #nav-blur {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 6.6vh;
    min-height: 80px;
    z-index: 499;
    overflow: hidden;
  }
  .blur {
    filter: blur(10px);
    pointer-events: none;
  }

  .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

</style>
