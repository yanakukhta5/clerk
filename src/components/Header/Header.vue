<script>
import Logo from './Logo.vue'
import Title from './Title.vue'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs.vue'
 export default {
  components: {
   Logo, BreadCrumbs, Title
  }
 }
</script>

<template>
 <header class="header">
  <Logo />
  <BreadCrumbs />
  <Title />
 </header>
</template>

<style scoped lang="scss">
.header {
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
}
</style>
