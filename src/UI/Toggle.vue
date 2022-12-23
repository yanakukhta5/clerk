<script>
 export default {
  props: {
   checked: {
    type: Boolean,
    default: false
   },
   size: {
    type: String,
    default: 'big'
   },
   id: {
    type: String
   }
  },
  methods: {
    changeToggle(event){
      this.$emit('toggleChange', event.target.checked, event.target.id)
    }
  }
 }
</script>

<template>
 <label class="switch" :class="size">
  <input type="checkbox" class="checkbox" :id="id" @click="changeToggle" :checked="checked">
  <span class="slider"></span>
 </label>
</template>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  &.big{
   width: 48px;
   height: 24px;
   & .slider::before{
    width: 22px;
    height: 22px;
    left: 3px;
    bottom: 1px;
   }
   & .checkbox:checked + .slider:before{
     translate: 21px
   }
  }
  &.small{
   width: 32px;
   height: 16px;
   & .slider::before{
    width: 14px;
    height: 14px;
    left: 2px;
    bottom: 1px;
   }
   & .checkbox:checked + .slider:before{
     translate: 13px
   }
  }

  & input { 
  opacity: 0;
  width: 0;
  height: 0;
}
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
  position: absolute;
  content: "";
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
 }
}

input{
 &:checked + .slider {
  background-color: $interactive;
}
&:focus + .slider {
  box-shadow: 0 0 1px $interactive;
}
/* &:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
 } */
}
</style>