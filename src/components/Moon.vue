<template>
    <div class="moon">
        <div class="fog"></div>
    </div>
</template>
<style lang="less">
.moon {
    position: absolute;
    left: 50%;
    top: 100px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 20px 20px rgba(255, 255, 255, 0.2);
    overflow: hidden;
    .fog{
        width: 500px;
        height: 200px;
        background: radial-gradient(#000000ba, transparent);
        position: relative;
        top: -50px;
        transform: translateX(-400px);
        animation: move 20s linear infinite alternate;
    }
}
@keyframes move {
    0%{
        transform: translateX(-400px);
    }
    100%{
        transform: translateX(0);
    }
}
</style>
