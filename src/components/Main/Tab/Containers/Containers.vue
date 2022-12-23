<script>
</script>

<template>
 <section class="containers">
  <router-view></router-view>
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