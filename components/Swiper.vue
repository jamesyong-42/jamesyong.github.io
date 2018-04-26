<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img class="demo-sprite-44" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABnsAAAONAQMAAAB0n0fmAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAM9JREFUeNrtwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjgbmOwABlDzM1wAAAABJRU5ErkJggg==">
      </div>
      <div class="swiper-slide">
        <img class="demo-sprite-22" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABfAAAAK1AQMAAAC9xl1lAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAJdJREFUeNrtwTEBAAAAwqD1T+1jDKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgBBSkAASe4JrkAAAAASUVORK5CYII=">
      </div>
      <div class="swiper-slide">
        <img class="demo-sprite-11" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABewAAAK3AQMAAADNnJ0IAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAJhJREFUeNrtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODAAAanAAFcJN3KAAAAAElFTkSuQmCC">
      </div>
      <div class="swiper-slide">
        <img class="demo-sprite-33" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAx4AAAGLAQMAAABzwNakAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAD5JREFUeNrtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODeAJvXAAFGD/NQAAAAAElFTkSuQmCC">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {

    props: {

    },
    data () {
      return {
        swiperOption: {
          zoom: true,
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    mounted () {
      new this.$Swiper('.swiper-container', {
        // Optional parameters

        loop: true,
        // zoom: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
    }
  }
</script>

<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .demo-sprite-44, .demo-sprite-22, .demo-sprite-11, .demo-sprite-33
  { max-width: 100%; background-size: 100%; background-image: url('/demo-spritesheet.png'); }

  .demo-sprite-44 { background-position: 0 0%; background-size: 100%; }
  .demo-sprite-22 { background-position: 0 45.472736%; background-size: 109.144737%; }
  .demo-sprite-11 { background-position: 0 80.22033%; background-size: 109.432718%; }
  .demo-sprite-33 { background-position: 0 100%; background-size: 207.894737%; }

</style>
