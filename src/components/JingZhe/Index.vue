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
    const start = { x, y: 50 };
    lineTo(start);
    allGen(start);
}

// 根据一个点计算下一个点信息
function calcPoint(light: LightLine) {
    const { start, length, angel } = light;
    const end = {
        x: start.x + length * Math.cos(angel),
        y: start.y + length * Math.sin(angel)
    };
    lineTo(end);
    return end;
}

function allGen(p: Point) {
    if (p.y >= ih) {
        // setTimeout(() => {
        //     x = Math.trunc(getRan(iw - 200, 200));
        //     init({ x, y: 0 });
        // }, 5000);
        return;
    }
    const point = calcPoint({
        start: p,
        length: Math.trunc(getRan(50, 30)),
        // angel: initAngel + (Math.random() > 0.5 ? 0.2 : -0.2)
        angel: initAngel + getRan(0.5, -0.5)
    });
    allGen(point);
}

function lineTo(p: Point) {
    // ctx.value.restore();
    // ctx.value.lineWidth = Math.trunc(getRan(10, 2));
    ctx.value.lineTo(p.x * dp, p.y * dp);
    ctx.value.stroke();
    // ctx.value.save();
}

onMounted(() => {
    initCanvas(light.value);
    init({ x, y: 0 });
});
</script>
<template>
    <div class="jing-zhe">
        <canvas class="light" ref="light"></canvas>
        <h1>惊蛰 闪电劈桃木，形成神器惊蛰 神荼 安岩</h1>
    </div>
</template>
<style lang="less" scoped>
.jing-zhe {
    height: 100%;
    overflow: hidden;
    color: #fff;
    background: url('../../assets/img/bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    .light {
        width: 100%;
        height: 100%;
    }
}
</style>
