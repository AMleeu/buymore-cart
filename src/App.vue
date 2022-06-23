<template>
  <div id="app">
    <preloader v-if="showPreloader" />
    <router-view></router-view>
  </div>
</template>

<script>
import Preloader from "./components/Preloader.vue"

export default {
  name: 'App',
  components: {
    Preloader
  },
  data(){
    return{
      showPreloader:true
    }
  },
  mounted(){
    /*
      hide Preloader after 5 seconds of having rendred
    */
    setTimeout(()=>this.showPreloader=false, 4000);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.page-container {
  position: relative;
  min-height: 100vh;
}
.page-content {
  padding-bottom: 2.5rem !important; /* Footer height */
}
</style>
