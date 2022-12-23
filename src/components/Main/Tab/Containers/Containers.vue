<script>
</script>

<template>
 <section class="containers">
  <slot></slot>
 </section>
</template>

<style scoped lang="scss">
 .containers{
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