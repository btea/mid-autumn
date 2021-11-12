<template>
    <div class="mid-autumn" :style="style">

    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { getRandom, getColor } from '../utils/random';

// 接收props
const props = defineProps({
    msg: {
        type: String,
        default: ''
    }
})

/**
 * 随机生成水平方向位置
 * 垂直上升的速度固定，水平方向可能根据风向不同有一定的偏移
 * 水平风向可能会随着风动进行不同的左右偏移
 * 在灯罩里添加的火焰也是活动的，可以随着风向进行偏移
 * 灯默认的不透明度为0，随着升高逐渐清晰可见
 * 
*/
const left = getRandom(100, 0, true)
const options = ref({
    opacity: 0,
    x: 0,
    x_s: getRandom(5, 0, false),
    y: 0,
    y_s: getRandom(8, 0, false)
})

const style = computed(() => {
    return {
        left: left + '%',
        opacity: options.value.opacity,
        transform: `translate(${options.value.x}px, ${options.value.y}px)`
    }
})
</script>
<style lang="less" scoped>
.mid-autumn {
    position: fixed;
    top: 100%;
    width: 100px;
    height: 200px;
}
</style>
