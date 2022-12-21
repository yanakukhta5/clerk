<script>
 import TabButtons from './Buttons/TabButtons.vue'
 import Containers from './Containers/TabContainers.vue'
 export default {
  components: {
   TabButtons, Containers
  },
  current: 1
 }
</script>

<template>
 <div class="tab">
  <TabButtons :buttons="['Рассылки', 'Соцсети', 'Мессенджеры']" />
  <Containers />
 </div>
</template>

<style scoped lang="scss">
 .tab {
  width: 100%;
  justify-self: center;
  display: flex;
  flex-direction: column;
 }
</style>