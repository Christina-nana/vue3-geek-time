<template>
  <div class="app">
      <ul class="link">
      <li>
        <router-link to="/">6讲-Componsition API and  script setup</router-link>
      </li>
      <li>
        <router-link to="/about">8讲组件-星星评级</router-link>
      </li>
      <li>
        <router-link to="/animation">9讲组件-动画效果</router-link>
      </li>
       <li>
        <router-link to="/storeData">10讲vuex</router-link>
      </li>
    </ul>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
.app{
  display: flex;
}
.view{
  margin-left: 50px;
}
</style>