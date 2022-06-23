<template>
  <div class="page-container">
    <Header />
    <div class="container page-content">
      <div class="row mt-5">
        <div class="col-12 col-md-8 offset-md-2">
          <b-list-group>
            <b-list-group-item
              href="#"
              class="flex-column align-items-start"
              v-for="item in cartItems"
              :key="item.id"
            >
              <div
                class="d-flex w-100 justify-content-between align-items-center"
              >
                <small class="cart-item-name">{{ item.name }}</small>
                <b-badge variant="primary" class="cart-item-badge">
                  {{ item.quantity }}
                </b-badge>
                <small>
                  {{ `R ${item.price}.00` }}
                </small>
                <div>
                  <b-img
                    center
                    thumbnail
                    fluid
                    :src="item.imgUrl"
                    alt="Center image"
                    rounded
                    class="cart-item-image"
                  ></b-img>
                </div>
                <b-button-group>
                  <b-button variant="secondary" @click="addToCart(item)">
                    <b-icon icon="plus" font-scale="1.5"></b-icon>
                  </b-button>
                  <b-button variant="light" @click="removeFromCart(item)">
                    <b-icon icon="dash" font-scale="1.5"></b-icon>
                  </b-button>
                </b-button-group>
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
      <div class="row mb-4 mt-3">
        <div class="col-6 offset-6 col-md-4 offset-md-6 text-right">
            <b-alert show variant="light">total is: <hr/> R {{total}}.00</b-alert>
        </div>
      </div>
    </div>
    <Footer />
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
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    total(){
        let total = this.$store.getters.cartItems.reduce((currentTotal, item)=>{
            return currentTotal += item.price * item.quantity;
        }, 0)

        return total
    }
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addToCart", item);
    },
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
  },
};
</script>
<style scoped>
.cart-item-image {
  width: 49px !important;
  height: 49px !important;
}
.cart-item-badge {
  transform: scale(1.2);
}


small.cart-item-name {
  font-weight: bold;
  min-width: 135.17px !important;
  text-align: left;
}
@media (min-width: 768px) {
  small.cart-item-name {
    font-weight: normal;
    transform: scale(1.12);
    min-width: 146.75px !important;
  }
}
</style>
