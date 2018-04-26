<template>
    <div class="Nav">
      <div class="Nav__Left">
        <nuxt-link class="Nav__Left__Logo" to="/">
          <div>
            <span class="logo">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
              JamesYong42
            </span>
          </div>
        </nuxt-link>
      </div>
      <div class="Nav__Right">
        <div class="Nav__Right__Items">
            <span class="Nav__Right__Items__Item Nav__Right__Items__Item--regular">
              <nuxt-link class="main-btn" to="/projects">
                <template v-if="lan == 'ZH'">项目</template>
                <template v-else-if="lan == 'EN'">Projects</template>
              </nuxt-link>
            </span>
            <span class="Nav__Right__Items__Item Nav__Right__Items__Item--regular">
              <nuxt-link class="main-btn" to="/cv">
                <template v-if="lan == 'ZH'">简历</template>
                <template v-else-if="lan == 'EN'">CV</template>
              </nuxt-link>
            </span>
            <span class="Nav__Right__Items__Item Nav__Right__Items__Item--regular">
              <a class="main-btn" href="https://blog.jamesyong42.com">
                <template v-if="lan == 'ZH'">博客</template>
                <template v-else-if="lan == 'EN'">Blog</template>
              </a>
            </span>
            <template v-if="lan == 'ZH'">
              <span class="icon Nav__Right__Items__Item Nav__Right__Items__Item--regular">
                <i @click="changeLan('EN')">EN</i>
              </span>
            </template>
            <template v-else-if="lan == 'EN'">
              <span class="icon Nav__Right__Items__Item Nav__Right__Items__Item--regular">
                <i @click="changeLan('ZH')">中文</i>
              </span>
            </template>
            <span class="Nav__Right__Items__Item Nav__Right__Items__Item--mobile" @click="toggleMobileNav(true)">
              <svg>
                <use xlink:href="#icon-menu"></use>
              </svg>
            </span>
        </div>
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
      pkginfo: 'pkg',
      lan: 'language'
    }),
    calcV () {
      return `vh=${window.innerHeight / 100} vw=${window.innerWidth / 100}`
    }
  },
  methods: {
    ...mapActions([
      'changeLan',
      'toggleMobileNav'
    ])
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import "~assets/scss/variables";

.Nav {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  height: 6.6vh;
  min-height: 80px;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: transparent;
  perspective: 2000px;
  z-index: 500;
  font-size: 16px;
  color: #fff;
  a {
    color: #fff;
  }
  &__Left {
    height: 100%;

    &__Logo {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      span {

        -webkit-transition: all .6s ease;
        -moz-transition: all .6s ease;
        -ms-transition: all .6s ease;
        -o-transition: all .6s ease;
        transition: all .6s ease;

        cursor: pointer;
        display: block;


        line-height: 45px;
        margin: auto 30px;
        max-width: 160px;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        vertical-align: middle;
        width: 100%;
        border: none;
        background: transparent;
        font-weight: 100;
        letter-spacing: 1px;

      }

    }
  }

  &__Right {

    height: 100%;

    &__Items {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      overflow-x: hidden;
      white-space: nowrap;

      &__Item {
        margin: 0 25px;
        color: white;
        cursor: pointer;
        position: relative;
        &--regular {
          @media(max-width: 768px) {
            display: none;
          }
        }
        &--mobile {
          @media(max-width: 768px) {
            height: 100%;
            width: 64px;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              fill: white;
              width: 32px;
              height: 32px;
            }
          }
          @media(min-width: 768px) {
            display: none;
          }
        }
      }
    }
  }

}









.main-btn:hover {
  color: black;
}
.main-btn:after {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -5;
  left: 50%;
  bottom: 0;
  -webkit-transform: translateX(-50%) skew(-89deg) scaleX(1.5);
  transform: translateX(-50%) skew(-89deg) scaleX(1.5);
  opacity: 0;
  background: crimson;
  -webkit-transition: all 0.3s cubic-bezier(0.42, 0.08, 0, 1.8);
  transition: all 0.3s cubic-bezier(0.42, 0.08, 0, 1.8);
}
.main-btn:hover:after {
  width: 140%;
  -webkit-transform: translateX(-50%) skew(-20deg) scaleX(1);
  transform: translateX(-50%) skew(-20deg) scaleX(1);
  opacity: 1;
}
.icon:hover {
  color: #F44336;
}
.icon a i:hover {
  color: #F44336;
}





.logo {

}
.logo svg {
  height: 45px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.logo rect {
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-dasharray: 422, 0;
}

.logo:hover {
  font-weight: 900;
  letter-spacing: 2px;
  color: #fff;
  text-decoration: none;
}
.logo:hover rect {
  stroke-width: 5;
  stroke-dasharray: 15, 310;
  stroke-dashoffset: 48;
  -webkit-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  -ms-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  -o-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
}




</style>
