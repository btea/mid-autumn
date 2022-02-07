<template>
    <div class="send-msg-box">
        <input type="text" class="xinyuan" v-model="word" @keyup.enter="sendMsg" />
        <div class="icon" @click="sendMsg">
            <send-icon color="aqua"></send-icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import SendIcon from './SendIcon.vue';

const emit = defineEmits(['sendMsg']);
const word = ref('');
const sendMsg = () => {
    if (!word.value) {
        console.log('%c请先输入你的愿望！', 'color: rgba(102, 204, 255, .3)');
        return;
    }
    emit('sendMsg', word.value);
};
</script>
<style lang="less" scoped>
.send-msg-box {
    position: fixed;
    left: 50%;
    bottom: 30px;
    height: 35px;
    opacity: 0;
    transition: opacity 0.5s;
    transform: translateX(-50%);
    .xinyuan {
        outline: none;
        height: 35px;
        width: 300px;
        border-radius: 3px;
        border: none;
        padding: 0 40px 0 10px;
        background: rgba(102, 204, 255, 0.5);
        opacity: 0.3;
        color: #fff;
        &:focus {
            box-shadow: 0px 0px 10px rgba(102, 204, 255, 0.5);
            border-color: transparent;
            opacity: 0.8;
        }
    }
    .icon {
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 25px;
        cursor: pointer;
    }
}
</style>
