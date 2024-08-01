<script lang="ts" setup>
import {RouterView} from 'vue-router'
import { darkTheme, NConfigProvider } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <RouterView/>
  </n-config-provider>
</template>
