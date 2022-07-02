<script lang="ts" setup>
import { ref } from 'vue'

const video = ref()
const play = () => {
  video.value.play()
}
</script>
<template>
  <div class="custom-day-box" @click="play">
    <video src="../../assets/yuyu.mp4" loop ref="video"></video>
    <div class="con">
      <div>天空高远，大风吟唱！</div>
    </div>
  </div>
</template>
<style scoped lang="less">
.custom-day-box {
  height: 100%;
  overflow: hidden;
  position: relative;
  .con {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    color: #fff;
  }
}
</style>
