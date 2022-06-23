<template>
  <div class="page-container">
    <Header />
    <!--
      conditionally show CartEmpty if cart is empty 
      conditionally show CartWithItems if cart is has items 
     -->
    <CartEmpty v-show="cartItemsCount === 0" />
    <CartWithItems v-show="cartItemsCount > 0" />
    <Footer />
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
