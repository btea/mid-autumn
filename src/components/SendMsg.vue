<template>
    <div class="send-msg-box">
        <input type="text" class="xinyuan"/>
        <div class="icon" @click="sendMsg">
            <send-icon color="aqua"></send-icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import SendIcon from './SendIcon.vue'
const word = ref('')
const sendMsg = () => {
    if (!word.value.length) {
        console.log('请先输入你的愿望！')
        return 
    }
}
</script>
<style lang="less" scoped>
.send-msg-box{
    position: fixed;
    left: 50%;
    bottom: 30px;
    height: 35px;
    transform: translateX(-50%);
    
    .xinyuan{
        outline: none;
        height: 35px;
        width: 300px;
        border-radius: 3px;
        border-color: rgba(0, 0, 0, .2);
        padding: 0 40px 0 10px;
        &:focus{
            box-shadow: 0px 0px 5px rgba(102, 204, 255, .2);
            border-color: transparent;
        }
    }
    .icon{
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 25px;
        cursor: pointer;
    }
}
</style>
