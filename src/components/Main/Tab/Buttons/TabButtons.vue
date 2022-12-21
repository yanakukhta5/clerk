<script>
 import TabButton from './TabButton.vue'
 export default {
  props: {
   buttons: {
    type: Array,
    required: true
   }
  },
  components: {
   TabButton
  }
 }
</script>

<template>
 <div class="buttons">
  <TabButton v-for="(button, index) in buttons" :value="button" :index="index" :class="{button_active: index === 0}" />
 </div>
</template>

<style scoped lang="scss">
 .buttons {
  display: flex;
  gap: 24px;
  margin: auto;
 }
</style>