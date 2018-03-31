<template>
    <nav class="nav">
      <div class="nav-left">
        <nuxt-link class="nav-item hero-brand" to="/">
          <div class="is-hidden-mobile">
            <span class="logo">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
              JamesYong42
            </span>
          </div>
        </nuxt-link>
        <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
      </div>
      <div class="nav-right">
        <div class="nav-item Nav-base allowExpand">
            <span class="nav-item--btn">
              <nuxt-link class="main-btn" to="/projects">
                <template v-if="lan == 'ZH'">项目</template>
                <template v-else-if="lan == 'EN'">Projects</template>
              </nuxt-link>
            </span>
            <span class="nav-item--btn">
              <nuxt-link class="main-btn" to="/cv">
                <template v-if="lan == 'ZH'">简历</template>
                <template v-else-if="lan == 'EN'">CV</template>
              </nuxt-link>
            </span>
            <span class="nav-item--btn">
              <a class="main-btn" href="https://blog.jamesyong42.com">
                <template v-if="lan == 'ZH'">博客</template>
                <template v-else-if="lan == 'EN'">Blog</template>
              </a>
            </span>
            <template v-if="lan == 'ZH'">
              <span class="icon nav-item--btn">
                <i @click="changeLan('EN')">EN</i>
              </span>
            </template>
            <template v-else-if="lan == 'EN'">
              <span class="icon nav-item--btn">
                <i @click="changeLan('ZH')">中文</i>
              </span>
            </template>
        </div>
      </div>
    </nav>
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

      container: null,
      root: null,
      isCompact: null,
      dropdownBackground: null,
      dropdownBackgroundAlt: null,
      dropdownContainer: null,
      dropdownArrow: null,
      dropdownSections: null,
      dropdownRoots: null,
      activeDropdown: null,
      disableTransitionTimeout: null,
      enableTransitionTimeout: null,
      closeDropdownTimeout: null
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
      'changeLan'
    ])
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import "~assets/scss/variables";

.nav {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  font-family:Helvetica,sans-serif;
  height: 6.6vh;
  min-height: 80px;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  background-color:transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  perspective: 2000px;
  z-index: 500;
  .nav-right {
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    /*overflow: hidden;*/
    /*overflow-x: hidden;*/
    scroll: no;
    white-space: nowrap;
  }
}
.nav-item a, a.nav-item{
  color: white;
}
.nav-item a, a.nav-item:hover{
  color: white;
}
.nav-item a.is-active, a.nav-item.is-active{
  color: white;
}
.nav-item--btn {
  margin: 0 25px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  position: relative;
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
#wishlist-anime{
  position: relative;
  top: 0;
  left: -21px;
  width: 21px;
  height: 24px;
}
#wishlist-anime.animate {
  color: #F44336;
  opacity: 0.3;
  width: 42px;
  height: 44px;
  top: -12px;
  left: -10.5px;
  -webkit-transition: all .2s ease-out 1s;
  -moz-transition: all .2s ease-out 1s;
  -ms-transition: all .2s ease-out 1s;
  -o-transition: all .2s ease-out 1s;
  transition: all .2s ease-out 1s;
}

header {
  text-align: center;
}
header h1 {
  text-transform: uppercase;
}



@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,900);



.logo {
  box-sizing: inherit;
  -webkit-transition: all .6s ease;
  -moz-transition: all .6s ease;
  -ms-transition: all .6s ease;
  -o-transition: all .6s ease;
  transition: all .6s ease;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
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




.nav .Dropdown-base {
  position: absolute;
  z-index: 1000;
  top: 69px;
  right: 0;
  left: 0;
  display: block;
  transition-duration: 0.25s;
  transition-property: transform, opacity;
  transform: rotateX(-15deg);
  transform-origin: 50% -50px;
  pointer-events: none;
  opacity: 0;
  will-change: transform, opacity;
}

.nav.dropdownActive .Dropdown-base {
  transform: none;
  pointer-events: auto;
  opacity: 1;
}

.nav .Dropdown-bg {
  overflow: hidden;
  width: 520px;
  height: 400px;
  transform: translateX(0);
  transform-origin: 0 0;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
}

.nav .Dropdown-bg--alt,
.nav .Dropdown-bg {
  position: absolute;
  top: 0;
  left: 0;
  transition-duration: 0.25s;
  transition-property: transform;
  will-change: transform;
}

.nav .Dropdown-bg--alt {
  right: 0;
  height: 1000px;
  background: #f6f9fc;
}

.nav .Dropdown-arrow {
  top: -6px;
  width: 12px;
  height: 12px;
  margin: 0 0 0 -10px;
  transition-property: transform;
  transform: rotate(45deg);
  border-radius: 4px 0 0 0;
  background: #fff;
  box-shadow: -2px -2px 5px rgba(82, 95, 127, 0.08);
  will-change: transform;
}

.nav .Dropdown-arrow,
.nav .Dropdown-container {
  position: absolute;
  left: 0;
  transition-duration: 0.25s;
}

.nav .Dropdown-container {
  top: 0;
  overflow: hidden;
  transition-property: transform, width, height;
  transform: translateX(0);
  will-change: transform, width, height;
}

.nav .Dropdown-section {
  transition-duration: 0.25s;
  transition-property: transform, opacity;
  pointer-events: none;
  opacity: 0;
  background: red;
  will-change: transform, opacity;
}

.nav .Dropdown-section.active {
  transform: translateX(0);
  pointer-events: auto;
  opacity: 1;
}

.nav .Dropdown-section.left {
  transform: translateX(-150px);
}

.nav .Dropdown-section.right {
  transform: translateX(150px);
}

.nav.noDropdownTransition .Dropdown-bg--alt,
.nav.noDropdownTransition .Dropdown-arrow,
.nav.noDropdownTransition .Dropdown-bg,
.nav.noDropdownTransition .Dropdown-container,
.nav.noDropdownTransition .Dropdown-section {
  transition: none;
}

.nav .Dropdown-content {
  position: absolute;
  top: 0;
  left: 0;
}

.nav .Nav-linkGroup {
  padding: 20px 35px;
}

.nav .Nav-link {
  display: block;
  padding: 9px 0;
}

.nav .linkTitle {
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #6772e5;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}

.nav .linkSub {
  display: block;
  margin-top: 5px;
  color: #6b7c93;
  font-size: 15px;
  line-height: 22px;
}

.nav .linkSub,
.nav .linkTitle {
  transition: color 0.1s;
}

.nav .Nav-link:hover .linkTitle,
.nav .linkTitle:hover {
  color: #32325d;
}

.nav .Nav-link:hover .linkSub {
  color: #424770;
}

.nav .hover-fillDark,
.nav .hover-fillLight {
  transition: fill 0.1s;
}

.nav .hover-strokeDark,
.nav .hover-strokeLight {
  transition: stroke 0.1s;
}

.nav .Nav-link:hover .hover-fillLight {
  fill: #8898aa;
}

.nav .Nav-link:hover .hover-fillDark {
  fill: #32325d;
}

.nav .Nav-link:hover .hover-strokeLight {
  stroke: #8898aa;
}

.nav .Nav-link:hover .hover-strokeDark {
  stroke: #32325d;
}

.nav .linkIcon {
  white-space: nowrap;
}

.nav .linkIcon svg {
  margin: 0 12px -3px -1px;
}

.nav .linkIcon i {
  margin: 0 12px -3px -1px;
}

.nav .withIcon {
  padding-left: 28px;
}

.nav .withIcon .linkTitle {
  margin-left: -28px;
}

.nav .documentationGroup .linkSub {
  max-width: 250px;
}

.nav .documentationArticles {
  display: flex;
  margin: 15px 20px 10px 28px;
  white-space: nowrap;
  font-size: 15px;
  line-height: 26px;
}

.nav .documentationArticles > ul {
  margin-right: 40px;
}

.nav .documentationArticles > ul:last-child {
  margin-right: 0;
}

.nav .documentationArticles h4 {
  margin: 0 0 3px;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #8898aa;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}




$main-color: #6394F8;
$light-text: #ABB0BE;
.shopping-cart-items {

  padding-top: 20px;

li {
  margin-bottom: 18px;
}

img {
  float: left;
  margin-right: 12px;
  max-height: 70px;
}
.media{
  padding: 10px;
}
.media-content {
  width: 100px;
  margin: auto;
  display: block;
  color: $main-color;
  font-size: 16px;
}
.media-right {
  width: 50px;
  margin: auto;
}


.item-quantity {
  color: $light-text;
}


}
</style>
