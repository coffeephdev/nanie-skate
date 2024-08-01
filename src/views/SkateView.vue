<script lang="ts" setup>
import {NImage, NImageGroup, NModal, NSpin} from "naive-ui";
// Image
import SkateCard from "@/components/skate-card.vue";

// Store
import {useSkateStore} from "@/stores/skateStore";
import {computed, ref} from "vue";

const skateStore = useSkateStore()

const loading = ref(false)

const images = computed(() => {
  loading.value = true
  const result = skateStore.getImagesPath
  loading.value = false
  return result
})
</script>

<template>
  <div class="w-screen h-screen bg-neutral-800 flex flex-column justify-center items-center">
    <SkateCard v-for="info in skateStore.skateInfos" :choice="info.skateChoice" :img-path="info.miniaturePath"/>

    <n-modal v-model:show="skateStore.showGallery"
             :loading="loading"
             :title="`${skateStore.getLabel}`"
             bordered
             class="max-h-[80%] max-w-[80%] overflow-y-auto text-center"
             close-on-esc
             preset="card"
             @close="skateStore.resetGallery()"
    >
      <n-spin :show="loading">
        <n-image-group>
          <n-image
              v-for="imagePath in images"
              :alt="skateStore.getLabel + imagePath"
              :src="imagePath"
              class="w-[40%] max-h-80 m-4 object-cover hover:outline rounded hover:outline-1 hover:scale-105 transition-all"
              object-fit="cover"
          />
        </n-image-group>
      </n-spin>
      <template #footer>
        © Nanie Nao
      </template>
    </n-modal>
  </div>
</template>
