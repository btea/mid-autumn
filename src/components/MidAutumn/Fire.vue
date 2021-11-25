<template>
    <div class="fire">
        <div class="fire-box"></div>
        <div class="dot" v-for="dot in points" :style="dot"></div>
    </div>
</template>
<script setup lang="ts">
import { getRandom } from '../../utils/random';
const points = new Array(100).fill(1).map((item) => {
    const w = getRandom(14, 6, true);
    const obj = {
        width: w + 'px',
        height: w + 'px',
        left: getRandom(90, 1, false) + 'px',
        animationDelay: getRandom(1000, 100, true) + 'ms'
    };
    return obj;
});
</script>
<style lang="less">
.fire {
    width: 100px;
    height: 200px;
    filter: blur(20px) contrast(30);

    position: relative;
    .fire-box {
        width: 0;
        height: 0;
        border-radius: 45%;
        box-sizing: border-box;
        border: 100px solid #000;
        border-bottom: 100px solid transparent;
        background-color: #b5932f;
        transform: scaleX(0.5) translateX(-100px);
        filter: blur(20px) contrast(30);
    }
    .dot {
        position: absolute;
        bottom: 0;
        border-radius: 50%;
        background: #6cf;
        animation: movetop 1s linear infinite;
    }
}
@keyframes movetop {
    0% {
        transform: translate(0, 0);
    }
    20% {
        transform: translate(0, 0);
    }
    87.7% {
        transform: translate(0, -170px);
        opacity: 0;
    }
    100% {
        transform: translate(0, -170px);
        opacity: 0;
    }
}
</style>
