<template>

    <svg style="transform: rotate(-270deg)" viewBox="0 0 220 220">
      <path
        fill="none"
        stroke-width="20px"
        :stroke="bgColor"
        d="
                 M 110, 110
                 m -100, 0
                 a 100,100 0 1,0 200,0
                 a 100,100 0 1,0 -200,0
                 "
      />
      <path
        fill="none"
        stroke-width="20px"
        :stroke="color"
        stroke-dasharray="628"
        :stroke-dashoffset="(-(1-progress) * 628).toFixed(1)"
        d="
                 M 110, 110
                 m -100, 0
                 a 100,100 0 1,0 200,0
                 a 100,100 0 1,0 -200,0
                 "
      />
    </svg>

</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      color: String,
      bgColor: String,
      progress: Number
    }
  }
</script>

<style lang="scss">


</style>
