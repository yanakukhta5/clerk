<script>
 export default{
  props: {
   borderRadius: {
    type: Number,
    default: 100
   },
   color: {
    type: String,
    default: '#316FEE'
   },
   type: {
    type: String,
    default: 'button'
   },
   size: {
    type: String,
    default: 'large'
   }
  }
 }
</script>

<template>
 <button class="button" :type="type" :style="{background: color, borderRadius: borderRadius + 'px'}" :class="[size]"><slot></slot></button>
</template>

<style scoped lang="scss">
 .button {
  color: $background;
  border: none;
  font-family: $primaryFont;
  font-size: 16px;
  line-height: 24px;
 }
 .large {
  padding: 16px 32px;
}
</style>