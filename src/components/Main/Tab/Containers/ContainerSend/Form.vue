<script>
import Button from '@/UI/Button.vue'
import Toggle from '@/UI/Toggle.vue'
 export default {
  components: {
   Button, Toggle
  }
 }
</script>

<template>
 <form action="#" class="form">
  <div class="form-top">
   <input type="text" class="input" placeholder="Электронная почта">
   <Button type="submit" class="submit">Подписаться</Button>
  </div>
  <div class="form-bottom">
   <Toggle id="subscribe" size="small" :checked="true" />
   <label for="subscribe">Подписаться на все рассылки</label>
  </div>
 </form>
</template>

<style scoped lang="scss">
 .form {
  position: relative;
  margin-top: 24px;
  margin-bottom: 12px;
  &-top {
   width: 100%;
   display: flex;
  }
  &-bottom {
   display: flex;
   gap: 8px;
   align-items: center;
   margin-top: 16px;
  }
 }
 .submit {
  right: 0;
  top: 0;
  position: absolute;
 }
 .input{
  width: 100%;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  background-color: $background;
  border-radius: $cardBorderRadius;
 }
</style>