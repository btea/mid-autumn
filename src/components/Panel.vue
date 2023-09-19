<template>
  <div class="container">
    <component :is="asyncCom" />
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getFestival } from '../utils/getFestival'
const name = getFestival()

// const asyncCom = defineAsyncComponent(() => {
//   return import(`./${name}/Index.vue`)
// })
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>
