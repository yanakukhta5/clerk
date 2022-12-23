<script>
 import TabButtons from './Buttons/TabButtons.vue'
 import Containers from './Containers/Containers.vue'
 import ContainerSend from './Containers/ContainerSend/ContainerSend.vue'
 import ContainerSocial from './Containers/ContainerSocial/ContainerSocial.vue'
 import ContainerMessanger from './Containers/ContainerMessenger/ContainerMessenger.vue'
 export default {
  components: {
   TabButtons, Containers, ContainerSend, ContainerSocial, ContainerMessanger
  },
  current: 1
 }
</script>

<template>
 <div class="tab">
  <TabButtons :buttons="['Рассылки', 'Соцсети', 'Мессенджеры']" />
  <Containers>
   <template v-slot:default>
    <ContainerSend />
    <ContainerSocial />
    <ContainerMessanger />
   </template>
  </Containers>
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