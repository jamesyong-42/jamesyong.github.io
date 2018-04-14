<template>
  <div class="CVSkills">
    <div class="CVSkills__Coding">
      <h1>
        <template v-if="lan == 'ZH'">代码</template>
        <template v-else-if="lan == 'EN'">Coding</template>
      </h1>
      <div class="CVSkills__Coding__Charts">
        <div v-for="(c, index) in coding" :key="index" class="CVSkills__Coding__Charts__Chart">
          <span>{{ c.name }}</span>
          <straight-progress-bar :color="c.color"
                                 :bgColor="c.bgColor"
                                 :progress="c.progress * progress"
          ></straight-progress-bar>

        </div>
        <div class="CVSkills__Coding__Charts__Chart--stack">
          <div>ES6 SCSS</div>
          <div>Vue Nuxt Gulp webpack JQuary</div>
          <div>Node.js Express electron</div>
          <div>AJAX RESTfulAPI GraphQLAPI JSON</div>
          <div>Mysql MongoDB</div>
          <div>Redis websocket</div>
        </div>
      </div>
    </div>
    <div class="CVSkills__Design">
      <h1>
        <template v-if="lan == 'ZH'">设计</template>
        <template v-else-if="lan == 'EN'">Design</template>
      </h1>
      <div class="CVSkills__Design__Charts">
        <div v-for="(d, index) in design" :key="index" class="CVSkills__Design__Charts__Chart">
          <circle-progress-bar  :color="d.color"
                                :bgColor="d.bgColor"
                                :progress="d.progress * progress"
          ></circle-progress-bar>
          <template v-if="d.name === 'Axure'">
            <h1>A<span>xure</span></h1>
          </template>
          <template v-else>
            <h1>{{d.name}}</h1>
          </template>

        </div>
      </div>
    </div>
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
        coding: [
          {
            name: 'html',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.89
          },
          {
            name: 'css',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.75
          },
          {
            name: 'Javascript',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.69
          },
          {
            name: 'Java',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.50
          },
          {
            name: 'C++',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.38

          },
          {
            name: 'Swift',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.25
          }
        ],
        design: [
          {
            name: 'Ps',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.80
          },
          {
            name: 'Ai',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.75
          },
          {
            name: 'Axure',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.50
          },
          {
            name: 'C4D',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.30
          },
          {
            name: 'Ae',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.20
          },
          {
            name: 'Pr',
            color: '#00e7eb',
            bgColor: '#000000',
            progress: 0.10
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
    &__Coding {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-flow: row wrap;
      margin-bottom: 20px;
      > h1 {
        font-size:80%;
      }
      &__Charts {
        width: 60%;
        min-width: 300px;
        font-family: $ft-fm-code;
        font-weight: $ft-wt-bold;
        &__Chart {
          margin: 10px;

          font-size: 38%;
          width: 100%;
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          > div {
            width: 60%;
            height: 80%;
          }
          &--stack {
            height: auto;
            text-align: center;
            border-radius: 10px;
            border-color: #00e7eb;
            border-width: 2px;
            border-style: dashed;
            > div {
              display: block;
              font-size: 1rem;
              width: 100%;
              height: 1rem;
              margin-bottom: 5px;
            }
          }
        }
      }
    }

    &__Design {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-flow: row wrap;
      > h1 {
        font-size:80%;
      }
      &__Charts {
        width: 60%;
        min-width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row wrap;
        &__Chart {
          width: 30%;

          padding: 5px;
          position: relative;
          font-family: $ft-fm-code;
          font-weight: $ft-wt-bold;
          > h1 {
            position: absolute;
            width: 100%;
            top: 50%;
            left: -2.5px;
            font-size: 2rem;
            text-align: center;
            margin-top: -2rem;
            > span {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }


</style>
