<template>
    <div class="mid-autumn" :style="style">
        <Fire style="position: absolute; left: -30px; top: -200px; transform: scale(0.5)" />
        {{ text }}
    </div>
</template>
<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import Fire from './Fire.vue';
import { getRandom, getColor } from '../utils/random';

// 接收props
const props = defineProps({
    msg: {
        type: String,
        default: ''
    }
});
const text = props.msg;

/**
 * 随机生成水平方向位置
 * 垂直上升的速度固定，水平方向可能根据风向不同有一定的偏移
 * 水平风向可能会随着风动进行不同的左右偏移
 * 在灯罩里添加的火焰也是活动的，可以随着风向进行偏移
 * 灯默认的不透明度为0，随着升高逐渐清晰可见
 *
 */
const left = getRandom(100, 0, true);
// const top = window.innerHeight + 300;
const top = 300;

const options = ref({
    opacity: 0,
    x: 0,
    x_s: getRandom(0.8, 0.1, false) * (left > 50 ? -1 : 1),
    y: 0,
    y_s: getRandom(2, 0.1, false)
});
const style = computed(() => {
    return {
        left: left + '%',
        opacity: options.value.opacity,
        transform: `translate(${-options.value.x}px, ${-options.value.y}px)`
        // zIndex: getRandom(1000, 1, true)
    };
});
let timer;
onMounted(() => {
    options.value.opacity = 1;
    timer = window.setInterval(() => {
        if (options.value.y > top) {
            window.clearInterval(timer);
        }
        options.value.y += options.value.y_s;
        options.value.x += options.value.x_s;
    }, 1000 / 60);
});
</script>
<style lang="less" scoped>
.mid-autumn {
    position: fixed;
    top: 100%;
    width: 40px;
    // height: 200px;
    font-size: 18px;
    padding: 20px 10px;
    border-radius: 3px;
    background: rgba(94, 30, 42, 0.6);
    color: #fff;
}
</style>
