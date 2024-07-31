<script lang="ts" setup>
defineProps({
  imgPath: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="m-4 relative w-80 h-96 text-center flex shadow-xl flex-col justify-center items-center">
    <img alt="skate-board" class="top-0 absolute z-10 rounded" src="@/assets/overlay.png"/>
    <img :src="imgPath" alt="skate-board" class="top-0 rounded absolute"/>
  </div>
</template>

<style scoped>

</style>