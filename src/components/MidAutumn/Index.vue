<template>
  <div class="mid-autumn-box" ref="con" @mousemove="judgePosition">
    <Moon />
    <template v-for="msgObj in msgList">
      <mid-autumn :msg="msgObj" @removeFire="removeFire"></mid-autumn>
    </template>
    <send-msg ref="msg" @sendMsg="addMsg"></send-msg>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Moon from './Moon.vue'
import MidAutumn from './MidAutumn.vue'
import SendMsg from './SendMsg.vue'

// 信息列表
const msgList = ref<{ msg: string; time: number }[]>([])
const addMsg = (msg: string) => {
  console.log('你的愿望是：%c' + msg, 'color: orange;')
  msgList.value.push({
    msg,
    time: Date.now()
  })
}

// const msg = ref(null);
const con = ref(null)
let msgBox: HTMLElement
let msgBoxInfo
const judgePosition = e => {
  const { x, y } = e
  if (x >= msgBoxInfo.left && x <= msgBoxInfo.right && y >= msgBoxInfo.top) {
    msgBox.style.opacity = '1'
  } else {
    msgBox.style.opacity = '0'
  }
}

const removeFire = (time: number) => {
  msgList.value = msgList.value.filter(item => item.time !== time)
}

onMounted(() => {
  // console.log(msg.value); // 拿不到组件的引用
  // console.log(con.value); // 能拿到html标签的引用
  msgBox = con.value.querySelector('.send-msg-box')
  msgBoxInfo = msgBox.getBoundingClientRect()
  // console.log(msgBoxInfo);
})
</script>
<style scoped lang="less">
.mid-autumn-box {
  height: 100%;
  overflow: hidden;
  // background: linear-gradient(213deg, #ffba00c7, transparent);
  background-color: black;
}
</style>
