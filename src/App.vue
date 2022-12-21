<script>
import Header from "@/components/Header/Header.vue";
import Main from "@/components/Main/Main.vue";
import Footer from "@/components/Footer.vue";
export default {
 components: {
  Header, Main, Footer
 }
}
</script>

<template>
<div class="app">
 <div class="_container">
 <Header></Header>
 <Main></Main>
 <Footer></Footer>
 </div>
</div>
</template>

<style scoped lang="scss">

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vh;
  min-height: 100vh;
}
._container {
  max-width: 1072px;
  min-height: 100vh;
  width: 100%;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin: 0px auto;
}
</style>
