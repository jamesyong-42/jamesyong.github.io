<template>
  <div class="outer" :style="`background-color:${bgColor}`">
    <div class="inner" :style="innerStyle">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      color: String,
      bgColor: String,
      progress: Number
    },
    computed: {
      innerStyle () {
        return {
          'background-color': this.color,
          'transform': `translate3d(${(this.progress * 100 - 100).toFixed(1)}%, 0, 0)`
        }
      }
    }
  }
</script>

<style lang="scss">
  .outer {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
  }
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translate3d(-100%, 0, 0);
    transform-style: preserve-3d;
    will-change: transform;
  }

</style>
