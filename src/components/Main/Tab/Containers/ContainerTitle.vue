<script>
 
</script>

<template>
 <h2 class="title"><slot> </slot></h2>
</template>

<style scoped lang="scss">
 .title {
  color: $primaryFontColor;
  font-family: $secondaryFont;
  text-align: center;
  font-size: 20px;
  line-height: 32px;
 }
</style>