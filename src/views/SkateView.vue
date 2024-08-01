<script lang="ts" setup>
import { NCarousel, NImage, NImageGroup, NModal } from "naive-ui";
// Image
import SkateCard from "@/components/skate-card.vue";

// Store
import { useSkateStore } from "@/stores/skateStore";
import { computed, ref } from "vue";
const skateStore = useSkateStore()

const loading = ref(false)

const images = computed(()=>{
  loading.value = true
  const result =  skateStore.getImagesPath
  loading.value = false
  return result
})
</script>

<template>
  <div class="w-screen h-screen bg-neutral-800 flex flex-column justify-center items-center">
    <SkateCard v-for="info in skateStore.skateInfos" :img-path="info.miniaturePath" :choice="info.skateChoice" />
    
    <n-modal :loading="loading"
      v-model:show="skateStore.showGallery"
      @close="skateStore.resetGallery()"
      close-on-esc
      bordered
      preset="card"
      class="max-h-[80%] max-w-[80%] overflow-y-scroll text-center"
      :title="`${skateStore.getLabel}`"
    >
      <n-image-group>
        <n-image
          v-for="imagePath in images"
          :src="imagePath"
          :alt="skateStore.getLabel + imagePath"
          class="w-[40%] max-h-80 m-4 object-cover hover:outline rounded hover:outline-1 hover:scale-105 transition-all"
          object-fit="cover"
        />
      </n-image-group>
      <template #footer>
        © Nanie Nao
      </template>
    </n-modal>
  </div>
</template>
