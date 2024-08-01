<script lang="ts" setup>
import {NImage, NImageGroup, NModal, NSpin} from "naive-ui";
// Image
import SkateCard from "@/components/skate-card.vue";

// Store
import {useSkateStore} from "@/stores/skateStore";
import {computed, ref} from "vue";

const skateStore = useSkateStore()

const imagesLoader = ref<boolean[]>([])
const isLoading = computed(() => {
  return imagesLoader.value.some(loading => loading == true)
})

function handleStartLoading(index: number) {
  imagesLoader.value[index] = true;
}

function handleLoading(index: number) {
  imagesLoader.value[index] = false;
  console.log(`Image ${index + 1} loaded successfully`);
}

const handleError = (index: number) => {
  imagesLoader.value[index] = false;
  console.log(`Failed to load image ${index + 1}`);
};
</script>

<template>
  <div class="w-screen h-screen bg-neutral-800 flex flex-column justify-center items-center">
    <SkateCard v-for="info in skateStore.skateInfos" :choice="info.skateChoice" :img-path="info.miniaturePath"/>

    <n-modal v-model:show="skateStore.showGallery"
             :title="`Planche Custom - ${skateStore.getLabel}`"
             bordered
             class="max-h-[80%] max-w-[80%] overflow-y-auto text-center"
             close-on-esc
             preset="card"
             @close="skateStore.resetGallery()"
    >
      <n-spin :show="isLoading">
        <n-image-group>
          <n-image
              v-for="(imagePath, index) in skateStore.getImagesPath"
              :alt="`${skateStore.getLabel} img${index}`"
              :src="imagePath"
              class="w-[40%] max-h-80 m-4 object-cover hover:outline rounded hover:outline-1 hover:scale-105 transition-all"
              object-fit="cover"
              @error="handleError(index)"
              @load="handleLoading(index)"
              @loadstart="handleStartLoading(index)"
          />
        </n-image-group>
      </n-spin>
      <template #footer>
        © Nanie Nao
      </template>
    </n-modal>
  </div>
</template>
