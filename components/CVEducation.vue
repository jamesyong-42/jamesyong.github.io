<template>
  <div class="CVEducation">
    <div v-for="(e, index) in education" :key="index" class="CVEducation__Content">
      <div class="CVEducation__Content__T">
        {{e.time}}
      </div>
      <div class="CVEducation__Content__U">
        <template v-if="lan == 'ZH'">{{e.university.zh}}</template>
        <template v-else-if="lan == 'EN'">{{e.university.en}}</template>
      </div>
      <div class="CVEducation__Content__M">
        <template v-if="lan == 'ZH'">{{e.major.zh}}</template>
        <template v-else-if="lan == 'EN'">{{e.major.en}}</template>
      </div>
      <div class="CVEducation__Content__R">
        <template v-if="lan == 'ZH'">{{e.research.zh}}</template>
        <template v-else-if="lan == 'EN'">{{e.research.en}}</template>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

  import { mapGetters } from 'vuex'

  export default {

    props: {
      progress: Number
    },

    data () {
      return {
        education: [
          {
            time: '2014.9-2018.6',
            university: {
              zh: '电子科技大学',
              en: 'UESTC'
            },
            major: {
              zh: '电子信息科学与技术',
              en: 'Undergraduate of Electronic Information Science and Technology'
            },
            research: {
              zh: '研究项目：基于显卡CUDA并行计算的SOR超松弛算法',
              en: 'Research topic: Parallel successive over-relaxation(SOR) algorithm based on CUDA platform'
            }
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
  .CVEducation {
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__Content {
      width: 100%;
      margin-bottom: 20px;

      &__T {
        width: 100%;
        text-align: left;
        color: black;
        font-size:50%;
      }
      &__U {
        width: 100%;
        text-align: left;
        color: #1cfaff;
        font-size:80%;
      }
      &__M {
        width: 100%;
        text-align: left;
        color: white;
        font-size:50%;
      }
      &__R {
        width: 100%;
        text-align: left;
        color: white;
        font-size:30%;
      }

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

  }


</style>
