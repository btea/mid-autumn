<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

interface Point {
    x: number;
    y: number;
}

interface LightLine {
    start: Point;
    angel: number;
    length: number;
}
const getRan = (max: number, min: number) => {
    return Math.random() * (max - min) + min;
};
const light = ref<HTMLCanvasElement>();
const ctx = computed(() => light.value.getContext('2d'));
const { innerWidth: iw, innerHeight: ih, devicePixelRatio: dp } = window;
let x = Math.trunc(getRan(iw - 200, 200));
const initAngel = Math.PI / 2;
let currentPoint: Point;
let interval = 0;

function initCanvas(el: HTMLCanvasElement) {
    el.width = iw * dp;
    el.height = ih * dp;
}

function init(p0: Point) {
    const c = ctx.value;
    c.clearRect(0, 0, iw, ih);
    c.beginPath();
    c.strokeStyle = '#fff';
    c.lineWidth = 5;
    c.lineJoin = 'round';
    c.shadowColor = 'rgba(255,255,255,.08)';
    c.shadowOffsetX = Math.random() > 0.5 ? 5 : -5;
    // c.shadowOffsetX = -5;
    // c.shadowOffsetY = 5;
    c.shadowBlur = 10;
    c.moveTo(p0.x, p0.y);
    currentPoint = { x, y: 50 };
    lineTo();
    allGen();
}

// 根据一个点计算下一个点信息
function calcPoint(light: LightLine) {
    const { start, length, angel } = light;
    currentPoint = {
        x: start.x + length * Math.cos(angel),
        y: start.y + length * Math.sin(angel)
    };
    lineTo();
}

function allGen() {
    interval++;
    if (currentPoint.y >= ih) {
        return;
    }
    if (!(interval % 3)) {
        calcPoint({
            start: currentPoint,
            length: Math.trunc(getRan(50, 30)),
            // angel: initAngel + (Math.random() > 0.5 ? 0.2 : -0.2)
            angel: initAngel + getRan(0.5, -0.5)
        });
    }
    requestAnimationFrame(allGen);
}
requestAnimationFrame(allGen);

function lineTo() {
    const p = currentPoint;
    ctx.value.lineTo(p.x * dp, p.y * dp);
    ctx.value.stroke();
}

onMounted(() => {
    initCanvas(light.value);
    init({ x, y: 0 });
});
</script>
<template>
    <div class="jing-zhe">
        <canvas class="light" ref="light"></canvas>
        <div class="text">惊蛰</div>
        <!-- <h1>惊蛰 闪电劈桃木，形成神器惊蛰 神荼 安岩</h1> -->
    </div>
</template>
<style lang="less" scoped>
.jing-zhe {
    height: 100%;
    overflow: hidden;
    background: #000;
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    .light {
        width: 100%;
        height: 100%;
    }
    .text {
        position: absolute;
        left: 100px;
        top: 100px;
        z-index: 5;
        font-family: '楷体';
        font-size: 66px;
        display: flex;
        flex-direction: column;
        writing-mode: tb;
        letter-spacing: 25px;
        text-shadow: 0 0 10px;
    }
}
</style>
