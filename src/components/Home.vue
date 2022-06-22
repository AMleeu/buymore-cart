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
            :sub-title="`R ${item.price}.00`"
            :img-src="item.imgUrl"
            img-alt="Card image"
            img-top
          >
            <hr />
            <b-link href="#" variant="secondary" class="card-link">
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
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  computed:{
    headphones() {
        return this.$store.getters.headphones
    }
  }
};
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}
.page-content {
  padding-bottom: 2.5rem !important; /* Footer height */
}
</style>
