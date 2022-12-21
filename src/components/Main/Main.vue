<script>
 import Tab from "./Tab/Tab.vue";
 export default {
  components: {
   Tab
  }
 }
</script>

<template>
 <main class="main">
  <Tab />
 </main>
</template>

<style scoped lang="scss">
 .main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1 1 auto;
 }
</style>
