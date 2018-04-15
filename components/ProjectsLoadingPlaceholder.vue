<template>
  <div class="ProjectsLoadingPlaceholder">
      <div class="ProjectsLoadingPlaceholder__Content">
        <div class="ProjectsLoadingPlaceholder__Content__Item ProjectsLoadingPlaceholder__Content__Item--logo">
          <div class="logo-3d frame-0"></div>
        </div>
      </div>
  </div>

</template>

<script type="text/ecmascript-6">

  export default {

  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";

  .ProjectsLoadingPlaceholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, #fb9367, #f92581, #b314ba, #528efc, #33c6fa, #528efc, #b314ba, #f92581, #fb9367);
    background-size: 2000% 2000%;
    background-position: 0% 50%;


    &__Content {
      width: 50%;
      @media (max-width: 768px) {
        width: 100%;
      }
      padding-top: 30vh;
      margin: auto;
      height: 100%;
      position: relative;


      &__Item {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &--logo {
          > div {
            margin-top:50px;
            width: 300px;
            height: 300px;

          }
        }
      }

    }
  }

  .logo-3d {
    background-image: url('/spriteA.png');
    background-repeat: no-repeat;
    &.frame-0 {
      background-position: -5px -5px;
    }
  }

</style>
