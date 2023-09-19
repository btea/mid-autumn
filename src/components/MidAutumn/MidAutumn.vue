<template>
  <div class="mid-autumn" :style="style">
    <div class="sky-latern">
      <LaternVue />
    </div>
    <Fire style="position: absolute; left: -30px; top: -170px; transform: scale(0.5)" />
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, onMounted } from 'vue'
import Fire from './Fire.vue'
import { getRandom } from '../../utils/random'
import LaternVue from './Latern.vue'

const emit = defineEmits(['removeFire'])
// 接收props
const props = defineProps(['msg'])
const text = computed(() => props.msg.msg)

/**
 * 随机生成水平方向位置
 * []垂直上升的速度固定，水平方向可能根据风向不同有一定的偏移
 * []水平风向可能会随着风动进行不同的左右偏移
 * []在灯罩里添加的火焰也是活动的，可以随着风向进行偏移
 * []灯默认的不透明度为0，随着升高逐渐清晰可见
 *
 */
const height = window.innerHeight
const width = window.innerWidth
const left = getRandom(50, width - 50, false)
const top = window.innerHeight + 300
const time = getRandom(5, 10, true)

const options = reactive({
  opacity: 0,
  x: 0,
  x_s: getRandom(0.8, 0.1, false) * (left > 50 ? -1 : 1),
  y: 0,
  y_s: getRandom(2, 0.8, false),
  s: 1
})
const style = computed(() => {
  return {
    left: `${left}px`,
    opacity: options.opacity,
    transform: `translateY(-${options.y}px)`
  }
})
const moveFire = () => {
  if (options.y > top) {
    // cancelAnimationFrame(reqId);
    // 重新从底部升起
    options.x = 0
    options.y = 0
    // 移除当前信息
    // emit('removeFire', props.msg.time);
    return
  }
  options.y += options.y_s
  options.x += options.x_s
  reqId = requestAnimationFrame(moveFire)
}
let reqId: number
onMounted(() => {
  setTimeout(() => {
    options.opacity = 1
    options.y = getRandom(800, 500, true)
    options.s = getRandom(1, 0.4, false)
  }, 200)
  setTimeout(() => {
    options.opacity = 0
    options.y = height + 200
    setTimeout(() => {
      emit('removeFire', props.msg.time)
    }, 300)
  }, time * 1000)
})
</script>
<style lang="scss" scoped>
.mid-autumn {
  position: absolute;
  top: 100%;
  transition: all 0.6s;
  // width: 40px;
  // height: 200px;
  font-size: 18px;
  padding: 20px 10px;
  border-radius: 3px;
  background: rgba(94, 30, 42, 0.6);
  color: #fff;
  z-index: 10;
  .text {
    writing-mode: vertical-lr;
    letter-spacing: 5px;
  }
  .sky-latern {
    position: absolute;
    left: -38px;
    top: -145px;
    z-index: 10;
  }
}
</style>
