<template>
  <div class="CvLoadingPlaceholder">
    <div class="CvLoadingPlaceholder__StarBG">
      <div class="CvLoadingPlaceholder__StarBG__TinyStars"></div>
      <div class="CvLoadingPlaceholder__StarBG__MidStars"></div>
      <div class="CvLoadingPlaceholder__StarBG__BigStars"></div>

    </div>
    <div id="avatar-thumb"></div>
    <div id="top-intro-left-thumb">
      <h1>雍世康</h1>
      <h2>WEB前端工程师</h2>
    </div>
    <div id="top-intro-right-thumb">
      <span class="l">Be</span>
      <span class="s">the</span>
      <span class="l">change</span>
      <br>
      <span class="m">you want to see</span>
      <br>
      <span class="s">in the</span>
      <span class="l">world</span>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">

  export default {

  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";

  #avatar-thumb {
    max-width: 250px;
    max-height: 250px;
    width: 25vmin;
    height: 25vmin;
    position: absolute;
    top: 50%;
    left: 50%;

    margin-left: -12.5vmin;
    margin-top: -12.5vmin;
    background-image: url("/avatar-thumb.png");
    background-size: contain;
    transform-style: preserve-3d;
    transform-origin: center;
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    z-index: 999;
  }
  .CvLoadingPlaceholder {
    width: 100%;
    height: 100%;
    background-color: #2e234a;
    &__StarBG {
      position: fixed;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;

      &__TinyStars {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background: url("/stars-tiny.png");
      }
      &__MidStars {
        position: absolute;
        width: 120%;
        height: 120%;
        margin-left: -10%;
        margin-top: -10%;
        opacity: 0.6;
        background: url("/stars-mid.png");
      }
      &__BigStars {
        position: absolute;
        width: 200%;
        height: 200%;
        margin-left: -50%;
        margin-top: -50%;
        background: url("/stars-big.png");
      }
    }

  }
  #top-intro-left-thumb {
    position: absolute;
    top:50vh;
    left: 50vw;
    width: 220px;
    margin-left: calc(-300px - 5vw);
    margin-top: -20px;
    color: white;
    font-family: $fontAXIS;
    text-align: center;
    > h1 {
      font-size: 60px;
    }
    > h2 {
      font-size: 24px;
    }
    @media (max-width: 768px) {
      margin-left: calc(-250px - 5vw);
      margin-top: 0;
      > h1 {
        font-size: 30px;
      }
      > h2 {
        font-size: 12px;
      }
    }
  }

  $fs-l: 30px;
  $fs-m: $fs-l * 0.79;
  $fs-s: $fs-l * 0.5;
  #top-intro-right-thumb {
    position: absolute;
    top:50vh;
    left: 50vw;
    margin-left: calc(90px + 5vw);
    margin-top: -10px;
    width: 240px;
    font-family: $fontAXIS;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    > .l {
      font-size: $fs-l;
      color: #ff6666;
    }
    > .m {
      font-size: $fs-m;
      color: white;
      // line-height: 20px;
    }
    > .s {
      font-size: $fs-s;
      color: white;
      margin: 10px;
    }
    @media (max-width: 768px) {
      width: 150px;
      margin-top: 0;
      margin-left: calc(60px + 5vw);
      > .l {
        font-size: $fs-l / 2;
        color: #ff6666;
      }
      > .m {
        font-size: $fs-m / 2;
        color: white;
        // line-height: 20px;
      }
      > .s {
        font-size: $fs-s / 2;
        color: white;
        margin: 2px;
      }
    }
  }



</style>
