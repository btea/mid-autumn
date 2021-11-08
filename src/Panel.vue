<template>
    <div ref="con" class="container" @mousemove="judgePosition">
        <send-msg ref="msg"></send-msg>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SendMsg from './components/SendMsg.vue';
const msg = ref(null);
const con = ref(null);
const judgePosition = (e) => {};
onMounted(() => {
    console.log(msg.value); // 拿不到组件的引用
    console.log(con.value); // 能拿到html标签的引用
});
</script>
<style lang="less" scoped>
.container {
    height: 100%;
    background: linear-gradient(213deg, #ffba00c7, transparent);
}
</style>
