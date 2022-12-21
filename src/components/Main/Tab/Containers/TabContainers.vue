<script>
import ContainerSend from './ContainerSend/ContainerSend.vue'
import ContainerSocial from './ContainerSocial/ContainerSocial.vue'
import Title from './ContainerTitle.vue'
import ContainerMessanger from './ContainerMessenger/ContainerMessenger.vue'
 export default {
  components: {
   ContainerSend, ContainerSocial, ContainerMessanger
  }
 }
</script>

<template>
 <section class="containers">
  <ContainerSend />
  <ContainerSocial />
  <ContainerMessanger />
 </section>
</template>

<style scoped lang="scss">
 .containers{
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: $cardBorderRadius;
  overflow: hidden;
 }
</style>