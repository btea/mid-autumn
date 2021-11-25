<template>
    <div class="mid-autumn-box">
        <Moon />
        <template v-for="msgObj in msgList">
            <mid-autumn :msg="msgObj" @removeFire="removeFire"></mid-autumn>
        </template>
    </div>
</template>
<script setup lang="ts">
import Moon from './Moon.vue'
import MidAutumn from './MidAutumn.vue'

const props = defineProps({
    msgList: {
        type: Array,
        value: []
    }
})

const emits = defineEmits(['remove'])

const removeFire = (time: number) => {
    emits('remove', time)
};
</script>
<style scoped lang="less">
.mid-autumn-box {
    height: 100%;
    overflow: hidden;
}
</style>
