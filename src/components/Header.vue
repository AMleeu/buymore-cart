<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#" @click="goToHome">buy more</b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" @click="goToCart">
          <b-icon icon="cart" font-scale="1.5"></b-icon>
          &nbsp; | &nbsp;
          <b-badge variant="primary" class="header-badge">
            {{ cartItemsCount }}
          </b-badge>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.navbar-brand {
  font-family: "Bebas Neue", cursive;
  font-size: 1.75rem;
  color: rgba(0, 0, 0, 0.5) !important;
}
.header-badge {
  font-size: 0.95rem;
  margin-top: -5px !important;
}
</style>

<script>
export default {
  methods: {
    goToCart() {
      this.$router.push({ path: "/cart" });
    },
    goToHome() {
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters.cartItemsCount;
    },
  },
};
</script>
