<template>
  <h1>这是首页</h1>
  <h1 @click="add">{{count}}</h1>
  <TodoList />
  <h1>{{x}}:{{y}}</h1>
</template>

<script setup>
  import { ref } from "vue";
  import TodoList from'../components/TodoList.vue'
  import {useMouse} from '../utils/useMouse.js'

  // 累加器
  let count = ref(1)
  let color = ref('red')
  function add(){
    count.value++
    color.value =  Math.random()>0.5? "blue":"red"
  }

  // 鼠标跟踪
  let {x,y} = useMouse()

</script>

<style scoped>
h1{
  color: v-bind(color);
}
</style>