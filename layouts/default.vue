<template>
  <div>
    <nprogress-container></nprogress-container>
    <div v-show="isProjects" id="nav-blur">
      <projects-double></projects-double>
    </div>
    <navbar :show="true"></navbar>
    <!--<sidebar v-if="isShop" :show="sidebar.opened && !sidebar.hidden"></sidebar>-->
    <nuxt></nuxt>
    <!--<footer-bar v-blur="blurConfig" :class="[blurConfig.isBlurred ? 'no-click' : 'click']"></footer-bar>-->

  </div>
</template>

<script type="text/ecmascript-6">
  import ProjectsDouble from '~/components/ProjectsDouble.vue'
  import Navbar from '~/components/Navbar.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      Navbar,
      ProjectsDouble
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
        scrollBar: 'scrollBar'
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

  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome';

  .nprogress-container {
    position: fixed !important;
    width: 100%;
    height: 100px;
    z-index: 2048;
    pointer-events: none;

    #nprogress {
      $color: #48e79a;

      .bar {
        background: $color;
      }
      .peg {
        box-shadow: 0 0 10px $color, 0 0 5px $color;
      }

      .spinner-icon {
        border-top-color: $color;
        border-left-color: $color;
      }
    }
  }
  .no-click {
    pointer-events: none;
  }
  .click {
    pointer-events: auto;
  }
  .login-modal {
    position: fixed !important;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: transparent;
  }
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

</style>
