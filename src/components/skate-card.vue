<script lang="ts" setup>
defineProps({
  imgPath: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="m-4 ">
    <div class="relative w-80 h-96 text-center flex flex-col justify-center items-center">
      <img alt="skate-board" class="top-0 absolute z-10" src="@/assets/overlay.png"/>
      <img :src="imgPath" alt="skate-board" class="top-0 absolute"/>
    </div>
  </div>
</template>

<style scoped>

</style>