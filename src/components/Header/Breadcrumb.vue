<script>
import Logo from './Logo.vue'
 export default {
  components: {
   Logo
  }
 }
</script>

<template>
 <li class="item"><a class="link"><slot></slot></a></li>
</template>

<style scoped lang="scss">
 .item {
  color: $bread;
  font-size: 13px;
  line-height: 16px;
  text-decoration: dotted;
  text-decoration-style: dotted;
  &::after{
   content: '→';
   margin: 0px 8px
  }
  &:last-of-type {
   &::after {
    font-size: 0;
   }
  }
 }
 .link {
  border-bottom: 1px dashed $bread;
 }
</style>