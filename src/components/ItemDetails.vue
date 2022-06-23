<template>
  <div class="page-container">
    <Header />
    <div class="container page-content">
      <div class="row mb-4">
        <div class="col-8 offset-2 mt-3">
          <h4>{{ item.name }}</h4>
          <b-button-group class="mb-3">
            <b-button variant="secondary" @click="addToCart">
                add to cart
            </b-button>
            <b-button variant="light" @click="goToCart">
                <b-icon icon="cart" font-scale="1.5"></b-icon>
            </b-button>
            <b-button variant="light" @click="removeFromCart">
                <b-icon icon="dash" font-scale="1.5"></b-icon>
            </b-button>
          </b-button-group>
          <b-card
            :img-src="item.imgUrl"
            img-alt="Card image"
            img-bottom
            :footer="`R ${applyformatPrice(item.price)}`"
            footer-tag="header"
          >
            <b-card-text> {{ item.desc }} </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import components
import Header from "./Header.vue";
import Footer from "./Footer.vue";
// import filters
import {formatPrice} from "../filters/filters"

export default {
  data() {
    return {
      item: this.$route.params,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods:{
    addToCart(){
      this.$store.commit("addToCart", this.item)
    },
    goToCart(){
      this.$router.push({path:"/cart"})
    },
    removeFromCart(){
      this.$store.commit("removeFromCart", this.item)
    },
    applyformatPrice(price){
      return formatPrice(price) 
    }
  },
};
</script>
