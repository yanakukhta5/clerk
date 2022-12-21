<template>
 <article class="card">
  <slot></slot>
 </article>
</template>

<script>
 export default{
  props: {
   content: {
    type: Object,
    default: {}
   }
  }
 }
</script>

<style scoped lang="scss">
 .card{
  width: clamp(320px, 100%, 476px);
  height: clamp(244px, 100%, 272px);
  border-radius: $cardBorderRadius;
  background-color: $background;
  padding: 24px;
 }
</style>