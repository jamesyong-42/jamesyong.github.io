<template>
    <div class="MobileNav">
      <div class="MobileNav__Items">
        <span class="MobileNav__Items__Item--close">
          <svg @click="close">
            <use xlink:href="#icon-remove"></use>
          </svg>
        </span>
        <span v-if="$route.fullPath !== '/projects'" class="MobileNav__Items__Item">
          <nuxt-link  to="/projects">
            <template v-if="lan == 'ZH'">项目</template>
            <template v-else-if="lan == 'EN'">Projects</template>
          </nuxt-link>
        </span>
        <span v-if="$route.fullPath !== '/cv'" class="MobileNav__Items__Item">
          <nuxt-link  to="/cv">
            <template v-if="lan == 'ZH'">简历</template>
            <template v-else-if="lan == 'EN'">CV</template>
          </nuxt-link>
        </span>
        <span class="MobileNav__Items__Item">
          <a href="https://blog.jamesyong42.com">
            <template v-if="lan == 'ZH'">博客</template>
            <template v-else-if="lan == 'EN'">Blog</template>
          </a>
        </span>
        <template v-if="lan == 'ZH'">
          <span class="MobileNav__Items__Item">
            <i @click="lanClick('EN')">EN</i>
          </span>
        </template>
        <template v-else-if="lan == 'EN'">
          <span class="MobileNav__Items__Item">
            <i @click="lanClick('ZH')">中文</i>
          </span>
        </template>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
  },
  props: {
    show: Boolean
  },
  data () {
    return {
    }
  },

  mounted () {
  },
  computed: {
    ...mapGetters({
      lan: 'language'
    })
  },
  methods: {
    ...mapActions([
      'changeLan',
      'toggleMobileNav'
    ]),
    lanClick (l) {
      this.changeLan(l)
      this.toggleMobileNav(false)
    },
    close () {
      this.toggleMobileNav(false)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import "~assets/scss/variables";

.MobileNav {
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 17, 65, 0.5);
  z-index: 999;
  &__Items {
    width: 80%;
    position: relative;
    &__Item {
      display: block;
      width: 100%;
      margin: 30px auto;
      font-size: 3rem;
      text-align: center;
      color: #1cfaff;
      > a {
        color: #1cfaff;
        cursor: pointer;
      }
      > i {
        cursor: pointer;
      }

      &--close {
        display: block;
        width: 100%;
        text-align: right;
        svg {
          cursor: pointer;
          fill: #1cfaff;
          width: 3rem;
          height: 3rem;
          right: 0;
        }
      }
    }
  }

}





</style>
