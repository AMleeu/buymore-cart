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
      hide Preloader after 6 seconds of having rendered
    */
    setTimeout(()=>{
      this.showPreloader=false
      }, 6000);
    /*
      then wait half a second more & scroll to top
    */
    setTimeout(()=>{
      window.scrollTo(0, 0)
      }, 6500);
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
