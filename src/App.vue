<template>
  <div id="app">
    <div>
      <headerComp />
    </div>
    <div class="contents-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerComp from '@/components/headerComp.vue';

export default {
  name: 'App',
  components: {
    headerComp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #000000;
}
.contents-container {
  overflow-y: auto;
}
</style>
