<template>
  <div id="footer" :class="[cartItemsCount >0? 'hide-min-width-446px':'']">
    &copy; buymore 2022
  </div>
</template>

<script>
export default {
  computed:{
      cartItemsCount() {
        return this.$store.getters.cartItemsCount;
    }
  }
}
</script>

<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: #446e9b;
  color: #fafafa;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
#footer span {
  color: #212121;
}
/*
  if cart has items
    hide footer on viewports less than 446px
*/
@media (max-width: 446px) {
  #footer.hide-min-width-446px{
    display:none !important;
  }
}
</style>
