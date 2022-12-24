<script>
 export default {
  props: {
   value: String,
   index: Number,
   to: String
  }
 }
</script>

<template>
 <router-link :to="'/subscribe/' + to" class="link" :index="index">{{ value }}</router-link>
</template>

<style scoped lang="scss">
.link {
 display: block;
 border: none;
 font-family: $primaryFont;
 background-color: transparent;
 color: $secondaryFontColor;
 padding: 18px 0;
 text-decoration: none;
 line-height: 24px;
 &.router-link-exact-active {
  color: $activeLink;
  border-bottom: 2px solid $activeLink;
  padding: 18px 0 16px 0;
 }
 &:hover {
  color: $activeLink;
 }
}
</style>