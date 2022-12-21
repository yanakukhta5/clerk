<script>
 export default {
  props: {
   value: String,
   index: Number
  },
  methods: {
   setActive(event){
    const current = event.target
    const prev = document.querySelector('.button_active')
    prev.classList.remove('button_active')
    current.classList.add('button_active')
   }
  }
 }
</script>

<template>
 <button class="button" @click="setActive" :index="index">{{ value }}</button>
</template>

<style scoped lang="scss">
.button {
 border: none;
 font-family: $primaryFont;
 background-color: transparent;
 color: $secondaryFontColor;
 padding: 18px 0;
 &_active {
  color: $activeLink;
  border-bottom: 2px solid $activeLink;
  padding: 18px 0 16px 0;
 }
 &:hover {
  color: $activeLink;
 }
}
</style>