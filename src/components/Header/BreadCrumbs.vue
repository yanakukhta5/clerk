<script>
import Breadcrumb from "./Breadcrumb.vue"
export default {
 data() {
  return {
  linksObj: {
   '1': 'Главная',
   '2': 'Рассылки',
   '3': 'Хлебные крошки'
  }
  }
 },
 components: {
  Breadcrumb
 }
}
</script>

<template>
 <nav class="breadcrumbs">
  <ul class="list">
   <Breadcrumb v-for="link in linksObj" :key="link"><template v-slot:default>{{ link }}</template></Breadcrumb>
  </ul>
 </nav>
</template>

<style scoped lang="scss">
 .breadcrumbs{
  margin-bottom: 24px;
  @media (max-width: $sm) {
   margin-bottom: 8px;
  }
 }
 .list {
  display: flex;
  flex-direction: row;
 }
</style>