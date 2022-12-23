<script>
import Button from '@/UI/Button.vue'
import Toggle from '@/UI/Toggle.vue'
 export default {
  components: {
   Button, Toggle
  },
  data(){
   return {
    email: '',
    subscribeAll: true
   }
  },
  methods: {
   toggleChange(){
    this.subscribeAll = !this.subscribeAll
   }
  }
 }
</script>

<template>
 <form action="#" class="form">
  <div class="form-top">
   <input type="text" class="input" placeholder="Электронная почта" v-model="email">
   <Button type="submit" class="submit">Подписаться</Button>
  </div>
  <div class="form-bottom">
   <Toggle id="subscribe" size="small" :checked="subscribeAll" @toggleChange="toggleChange" />
   <label for="subscribe">Подписаться на все рассылки</label>
  </div>
  <fieldset class="addition">
  <slot name="addition"></slot>
  </fieldset>
 </form>
</template>

<style scoped lang="scss">
 .form {
  position: relative;
  margin-top: 24px;
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
  @media (max-width: $sm) {
   width: 56px;
   height: 56px;
   color: transparent;
   padding: 0;
   overflow: hidden;
  }
  &:before {
   @media (max-width: $sm){
   content: '';
   display: block;
   width: 9px;
   height: 14px;
   background-image: url('/img/submit-mobile.svg');
   position: relative;
   top: 12px;
   left: 24px;
   }
  }
 }
 .input{
  width: 100%;
  padding: 16px 163px 16px 16px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  background-color: $background;
  border-radius: $cardBorderRadius 100px 100px $cardBorderRadius;
 }
 .subscribe {
  font-size: 14px;
 }
 .addition {
  margin-top: 0;
 }
</style>