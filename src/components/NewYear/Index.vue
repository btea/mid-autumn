<template>
  <div class="new-year-box">
    <div class="emilia"></div>
  </div>
</template>
<script setup lang="ts">
// https://e-shuushuu.net/
import { onMounted } from 'vue'
import { Snow } from '../../utils/snow'

onMounted(() => {
  new Snow('.new-year-box', {
    total: 300
  })
})
</script>
<style scoped lang="scss">
.new-year-box {
  height: 100%;
  text-align: center;
  background: url('https://e-shuushuu.net/common/image/background/bg-snow2.jpg') no-repeat fixed center top;
  position: relative;
  .emilia {
    position: fixed;
    right: 5%;
    top: 5%;
    bottom: 5%;
    width: 523px;
    background: url('https://e-shuushuu.net/common/image/background/christmas-emilia.png') no-repeat;
    background-size: contain;
    &::before {
      content: '新年快乐！';
      position: absolute;
      top: 0;
      bottom: 0;
      left: -70px;
      font-size: 40px;
      color: #fff;
      writing-mode: vertical-lr;
      letter-spacing: 40px;
      font-weight: 600;
      text-shadow: 2px 2px #000;
    }
  }
}
</style>
