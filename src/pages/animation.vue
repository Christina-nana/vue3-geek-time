<template>
    <h1>1.transition过渡</h1>
    <div class="box" :style="{width:width + 'px'}"></div>
    <button @click="clickBtn">click</button>
    <hr/>

    <h1>2.animation动画</h1>
    <div class="box1"></div>
    <hr/>

    <h1>3.vue3动画</h1>
    <button @click="toggle">click</button>
    <transition name='fade'>
        <h1 v-if="showTitle" style="color:brown">你好vue3</h1>
    </transition>
    <hr/>

    <h1>4.优化清单动画</h1>
    <AnimationTodolist></AnimationTodolist>
</template>

<script setup>
import {ref} from 'vue'
import AnimationTodolist from '../components/AnimationTodolist.vue'

// 1.transition过渡
let width = ref(100)
function clickBtn(){
    width.value += 100
}

// 3.vue3动画
let showTitle = ref(true)
function toggle(){
    showTitle.value = !showTitle.value
}

// 4.优化清单动画 
let value = ref('')
let showModal = ref(false)
function addTodo(){
    if(!value.value){
        showModal.value = true
    }
    setTimeout(()=>{
        showModal.value = false
    },3000)
}
</script>

<style scoped>
.box{
    background:red;
    height:100px;
    transition: width 1s linear;
}
.box1{
    position: relative;
    width: 30px;
    height: 30px;
    background:skyblue;
    animation: move 2s linear infinite;
}
@keyframes move {
    0%{
        left:0px
    }
    50%{
        left:200px
    }
    100%{
        left: 0;
    }
}
/* h1标签显示时 */
.fade-enter-active{
    transition:opacity 5s linear
}
/* h1标签隐藏时 */
.fade-leave-active{
    transition:opacity 0.5s linear
}
/* h1标签显示时候的开始动画 */
.fade-enter-from{
    opacity:0.3
}
/* h1标签隐藏时候结束动画 */
.fade-leave-to{
    opacity:0
}

.info-wrapper{
    position: fixed;
    top:20px;
    left:1000px;
    width:400px;
}
.info{
    padding:50px;
    color:white;
    font-size:30px;
    background:#d88986;
}
/* 弹框显示 */
.model-enter-active{
    transition:all 0.5s ease;
}
/* 弹窗隐藏 */
.model-leave-active{
     transition:all 0.5s ease;
}
/* 弹窗显示时开始的效果 */
.model-enter-from{
    opacity:0;
    transform: translateY(-60px);
}
/* 弹窗隐藏时候最后的效果 */
.model-leave-to{
    opacity: 0;
    transform: translateY(-60px);
}
</style>