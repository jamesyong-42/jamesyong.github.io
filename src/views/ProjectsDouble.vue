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
    <parallax :speedFactor="0" :sectionStyle="projectStyle1" :containerClass="'project-content'">
      <div class="project-content-logo">
        <img src="../assets/Trinity.svg">
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
        <img src="../assets/trinity-logo-real.png">
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
        <img src="../assets/keypoint-logo-mask.png">
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
        <img src="../assets/keypoint-logo-real.png">
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
        <img src="../assets/matrix-logo-mask.png">
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
        <img src="../assets/matrix-logo-real.png">
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
        blurContent: null
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
            'background-position': (introOffset > 0) ? `${introOffset / 8000 * 100}% 50%` : `0% 50%`
          }
        } else {
          return {
            'background': 'linear-gradient(270deg, #fb9367, #f92581, #b314ba, #528efc, #33c6fa, #528efc, #b314ba, #f92581, #fb9367)',
            'background-size': '2000% 2000%',
            'background-position': `0% 50%`
          }
        }
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/variables";

  .projects-content {
    width: 100%;
    background-color: $mainBG;
    scroll-behavior: smooth;
  }

  .project-content-logo {
    /*-webkit-box-flex: 1;*/
    /*-ms-flex-positive: 1;*/
    /* flex-grow: 1; */
    /*flex-shrink: 1;*/

    position: relative;
    margin: auto;
    width: 30vmin;
    top: 30vh;
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

</style>
