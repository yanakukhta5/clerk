<script>
import ContainerMessenger from './ContainerMessenger/ContainerMessenger.vue'
import ContainerSend from './ContainerSend/ContainerSend.vue'
import ContainerSocial from './ContainerSocial/ContainerSocial.vue'
export default {
 components: {ContainerMessenger, ContainerSend, ContainerSocial},
 data(){
  return {
   content: this.$route.params.option
  }
 },
 updated(){
   this.content = this.$route.params.option
 }
}
</script>

<template>
 <section class="containers">
  <ContainerSocial v-if="content === 'socials'" />
  <ContainerSend v-if="content ===  'sends'" />
  <ContainerMessenger v-if="content ===  'messengers'" />
 </section>
</template>

<style scoped lang="scss">
 .containers{
  width: 100%;
  padding: 48px 24px;
  background-color: $tabBackground;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: $cardBorderRadius;
  overflow: hidden;
  @media (max-width: $sm){
   border-radius: 0;
  }
 }
</style>