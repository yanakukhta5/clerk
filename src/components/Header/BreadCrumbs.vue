<script>
import Breadcrumb from "./Breadcrumb.vue"
export default {
 data() {
  return {
  linksObj: {
   '1': 'Хлебные крошки',
   '2': 'Хлебные крошки',
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
 .list {
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
 }
</style>