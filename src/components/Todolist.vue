<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>

    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span> 代办：{{ active }} 总共： {{ all }} </span>
    </div>
  </div>
</template>

<script setup>
  import { useTodos } from '../utils/useTodos.js'

  // 清单应用
  let {title,todos,all,active,clear,allDone,addTodo} = useTodos()
</script>