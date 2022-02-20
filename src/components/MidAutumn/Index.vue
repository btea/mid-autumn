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
import { ref, onMounted } from 'vue';
import Moon from './Moon.vue';
import MidAutumn from './MidAutumn.vue';
import SendMsg from './SendMsg.vue';

const wishes = [
    '新年快乐！',
    '元宵节快乐！',
    '中秋节快乐！',
    '幸福健康快乐！',
    '新年快乐！',
    '元宵节快乐！',
    '中秋节快乐！',
    '幸福健康快乐！'
];
let i = 0;
const timer = setInterval(() => {
    if (i >= wishes.length - 1) clearInterval(timer);
    addMsg(wishes[i]);
    i++;
}, 500);
// 信息列表
const msgList = ref<{ msg: String; time: Number }[]>([]);
const addMsg = (msg: string) => {
    console.log('你的愿望是：%c' + msg, 'color: orange;');
    msgList.value.push({
        msg,
        time: Date.now()
    });
};

// const msg = ref(null);
const con = ref(null);
let msgBox: HTMLElement;
let msgBoxInfo;
const judgePosition = (e) => {
    const { x, y } = e;
    if (x >= msgBoxInfo.left && x <= msgBoxInfo.right && y >= msgBoxInfo.top) {
        msgBox.style.opacity = '1';
    } else {
        msgBox.style.opacity = '0';
    }
};

const removeFire = (time: number) => {
    console.log(time);
    console.log(msgList.value);
    msgList.value = msgList.value.filter((item) => item.time !== time);
};

onMounted(() => {
    // console.log(msg.value); // 拿不到组件的引用
    // console.log(con.value); // 能拿到html标签的引用
    msgBox = con.value.querySelector('.send-msg-box');
    msgBoxInfo = msgBox.getBoundingClientRect();
    // console.log(msgBoxInfo);
});
</script>
<style scoped lang="less">
.mid-autumn-box {
    height: 100%;
    overflow: hidden;
    // background: linear-gradient(213deg, #ffba00c7, transparent);
    background-color: black;
}
</style>
