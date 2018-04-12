<template>
  <div class="d-player"></div>
</template>
<script type="text/ecmascript-6">

  export default {
    props: {
      video: {}
    },
    mounted () {
      // console.log('RRRRRRRRRRRRRRRR', this.$DPlayerModule)
      new this.$DPlayerModule({
        container: this.$el,
        screenshot: false,
        video: this.video
      })
    }
  }
</script>

<style lang="scss">
  .d-player {
    width: 100%;
    height: 100%;
  }

</style>
