<template>
    <div class="container">
        <component :is="asyncCom" />
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { getFestival } from '../utils/getFestival';
const name = 'JingZhe' || getFestival();

// 采用此种方法动态加载会出现vue的警告，但似乎还是渲染出来了
// let activeDay = shallowRef('')
// import(`./${name}/Index.vue`).then(tem => {
//     activeDay.value = tem.default
// })
const asyncCom = defineAsyncComponent(() => {
    return import(`./${name}/Index.vue`);
});
</script>
<style lang="less" scoped>
.container {
    height: 100%;
}
</style>
