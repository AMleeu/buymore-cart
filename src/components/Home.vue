<template>
  <div class="page-container">
    <Header/>
    <div class="container page-content"></div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
  border: 1px solid #212121;
}
.page-content {
  padding-bottom: 2.5rem; /* Footer height */
}
</style>
