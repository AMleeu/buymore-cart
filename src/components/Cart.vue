<template>
  <div :class="['page-container', cartItemsCount > 0? 'min-width-446px':'' ]">
    <Header />
    <!--
      conditionally show CartEmpty if cart is empty 
      conditionally show CartWithItems if cart is has items 
     -->
    <CartEmpty v-show="cartItemsCount === 0" />
    <CartWithItems v-show="cartItemsCount > 0" />
    <Footer/>
  </div>
</template>

<script>
// import components
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import CartEmpty from "./CartEmpty.vue"
import CartWithItems from "./CartWithItems.vue"

export default {
  components: {
    CartEmpty,
    CartWithItems,
    Header,
    Footer,
  },
  computed:{
    cartItemsCount() {
      return this.$store.getters.cartItemsCount;
    }
  }
}
</script>

<style>
/*
  if CartWithItems is rendered then make it so that 
  the page-container has min-width of 446px 
  because 
  the <b-list-group-item> in CartWithItems doesn't fit into 
  a parent with a  width of less than 446px
*/
@media (max-width: 446px) {
  .min-width-446px{
    min-width: 446px !important;
  }
}
</style>
