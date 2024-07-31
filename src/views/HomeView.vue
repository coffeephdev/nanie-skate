<script lang="ts" setup>
import SkateCard from "@/components/skate-card.vue";
import witcherMinia from "@/assets/board/witcher/minia.jpg";
import rdrMinia from "@/assets/board/red-dead/minia.jpg";
</script>

<template>
  <main class="w-screen h-screen bg-neutral-800 flex flex-column justify-center items-center">
    <SkateCard :img-path="rdrMinia"/>
    <SkateCard :img-path="witcherMinia"/>
  </main>
</template>
