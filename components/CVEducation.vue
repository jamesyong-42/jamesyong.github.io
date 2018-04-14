<template>
  <div class="CVEducation">

  </div>
</template>
<script type="text/ecmascript-6">
  // import BezierEasing from 'bezier-easing'
  import CircleProgressBar from './CircleProgressBar.vue'
  import StraightProgressBar from './StraightProgressBar.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      CircleProgressBar,
      StraightProgressBar
    },
    props: {
      progress: Number
    },

    data () {
      return {
        education: [
          {
            time: 'html',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.89
          }
        ]

      }
    },
    computed: {
      ...mapGetters({
        lan: 'language'
      })
    },
    mounted () {

    },

    methods: {

    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/main.scss";
  .CVSkills {
    color: white;
    width: 100%;
    height: 100%;

  }


</style>
