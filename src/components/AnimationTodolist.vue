<template>
  <div class="todolist">
    <input
      type="text"
      placeholder="输入为空，回车有弹框动画"
      v-model="value"
      @keydown.enter="addTodo"
    />
    <ul>
      <transition-group name="flip-list" tag="ul">
        <li v-for="(todo, index) in todolist" :key="index">
          <input type="checkbox" v-model="todo.done" />
          <span>{{ todo.title }}</span>
          <span @click="removeTodo($event,index)">❌</span>
        </li>
      </transition-group>
    </ul>
    <transition name="model">
      <div class="info-wrapper" v-if="showModal">
        <div class="info">哥，你啥也没输入!!!</div>
      </div>
    </transition>

    <span class="dustbin"> 🗑 </span>
    <div class="animate-wrap">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <div class="animate" v-show="animate.show">📋</div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref,reactive } from "vue";
let value = ref("");
let todolist = ref([
  { title: "学习vue3", done: false },
  { title: "学习ts", done: false },
]);

let showModal = ref(false);
function addTodo() {
  if (!value.value) {
    showModal.value = true;
    setTimeout(() => {
      showModal.value = false;
    }, 3000);
    return;
  }
  todolist.value.push({ title: value.value, done: false });
  value.value = "";
}

let animate = reactive({
  show:false,
  el:null
})
// function getBoundingClientRect(e){
//     window.addEventListener
// }
function beforeEnter(el){
  console.log('beforeEnter=',el)
  let dom = animate.el
  let rect = dom.getBoundingClientRect()
  let x = window.innerWidth - rect.left - 60
  let y = rect.top - 10
  el.style.transform = `translate(-${x}px, ${y}px)`
}
function enter(el,done){
    console.log('enter=',el,done)
  document.body.offsetHeight
   el.style.transform = `translate(0,0)`
   el.addEventListener('transitionend', done)
}
function afterEnter(el){
    console.log('afterEnter=',el);
   animate.show = false
   el.style.display = 'none'
}
function removeTodo(e,i){
    console.log('click=',e)
   animate.el = e.target
   animate.show = true
   todolist.value.splice(i,1)
}
</script>

<style scoped>
.todolist {
  position:relative;
  padding: 20px 50px;
  width: 500px;
  height: 300px;
  border: 1px solid #000;
}
.info-wrapper {
  position: fixed;
  top: 20px;
  left: 1000px;
  width: 400px;
}
.info {
  padding: 50px;
  color: white;
  font-size: 30px;
  background: #d88986;
}
/* 弹框显示 */
.model-enter-active {
  transition: all 0.5s ease;
}
/* 弹窗隐藏 */
.model-leave-active {
  transition: all 0.5s ease;
}
/* 弹窗显示时开始的效果 */
.model-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
/* 弹窗隐藏时候最后的效果 */
.model-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

/* 添加todolist */
.flip-list-move {
  transform: transform 0.8s ease;
}
.flip-list-enter-active {
  transition: all 3s ease;
}
.flip-list-leave-active {
  transition: all 3s ease;
}
.flip-list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.dustbin{
    position: absolute;
    right:20px;
    top:20px;
   font-size: 20px;
}
.animate-wrap .animate{
  position :absolute;
  right :10px;
  top :10px;
  z-index: 100;
  transition: all 0.5s linear;
}
</style>