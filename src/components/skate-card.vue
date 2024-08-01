<script lang="ts" setup>
import Tilt from 'vanilla-tilt-vue'

defineProps({
  imgPath: {
    type: String,
    required: true
  }
})

const tiltOptions = {
  speed: 50,
  max: 10,
  transition: true,
  gyroscope: false,
}
</script>

<template>
  <Tilt :options="tiltOptions" :parallax="true" class="m-4 relative w-[20rem] h-[24.85rem] text-center flex shadow-xl flex-col justify-center bg-none items-center rounded cursor-pointer">
      <img alt="skate-board" class="shine top-0 absolute z-10 rounded" src="@/assets/overlay.png" style="transform: translateZ(20px)"/>
      <img :src="imgPath" alt="skate-board" class="top-0 absolute rounded" style="transform: translateZ(-20px)"/>
  </Tilt>
</template>

<style scoped lang="scss">

.shine {
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  &::before {
    background: linear-gradient(
                    to right,
                    fade_out(#fff, 1) 0%,
                    fade_out(#fff, 0.7) 100%
    );
    content: " ";
    height: 120%;
    transform: skewX(-25deg);
    left: -85%;
    position: absolute;
    top: 0;
    width: 50%;
    z-index: 2;
  }

  &:hover {
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, .3), 0 0 0 2px white;
    &::before {
      animation: shine 0.5s;
    }
  }

  @keyframes shine {
    100% {
      left: 125%;
    }
  }
}
</style>