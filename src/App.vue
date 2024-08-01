<script lang="ts" setup>
import {RouterView} from 'vue-router'
import {darkTheme, NConfigProvider} from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <div class="absolute mt-5 text-white text-center font-black text-3xl w-full">Nanie Nao custom Skateboards</div>
    <RouterView/>
  </n-config-provider>
</template>
