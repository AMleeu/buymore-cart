<template>
  <div class="page-container">
    <Header />
    <div class="container page-content">
      <div class="row mb-4">
        <div class="col-8 offset-2 col-sm-6 offset-sm-0 col-lg-4 mt-3" 
             v-for="item in headphones"
             :key="item.id">
          <b-card
            :title="item.name"
            :sub-title="`R ${applyformatPrice(item.price)}`"
            :img-src="item.imgUrl"
            img-alt="Card image"
            img-top
          >
            <hr />
            <b-link @click="goToitemDetails(item)" variant="secondary" class="card-link">
              more info &nbsp;
              <b-icon
                icon="info-square-fill"
                variant=""
                font-scale="1.5"
              ></b-icon>
            </b-link>
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
  components: {
    Header,
    Footer,
  },
  computed:{
    headphones() {
        return this.$store.getters.headphones
    }
  },
  methods:{
    goToitemDetails(item){
      this.$router.push({name:"item-details", params:item})
    },
    applyformatPrice(price){
      return formatPrice(price) 
    }
  },
};
</script>
