<template>
  <div class="page-container">
    <Header />
    <div class="container page-content">
      <div class="row mb-4">
        <div class="col-sm-6 col-lg-4 mt-3">
          <b-card
            title="Headphone dope dope"
            :sub-title="`R ${200}.00`"
            :img-src="headphones1"
            img-alt="Card image"
            img-top
          >
            <hr />
            <a href="#" class="card-link">add to cart</a>
            <b-link href="#" class="card-link">
              <b-icon
                icon="info-square-fill"
                variant="secondary"
                font-scale="1.5"
              ></b-icon>
            </b-link>
          </b-card>
        </div>
        <div class="col-sm-6 col-lg-4 mt-3">
          <b-card
            title="Headphone dope dope"
            :sub-title="`R ${200}.00`"
            :img-src="headphones1"
            img-alt="Card image"
            img-top
          >
            <hr />
            <a href="#" class="card-link">add to cart</a>
            <b-link href="#" class="card-link">
              <b-icon
                icon="info-square-fill"
                variant="secondary"
                font-scale="1.5"
              ></b-icon>
            </b-link>
          </b-card>
        </div>
        <div class="col-sm-6 col-lg-4 mt-3">
          <b-card
            title="Headphone dope dope"
            :sub-title="`R ${200}.00`"
            :img-src="headphones1"
            img-alt="Card image"
            img-top
          >
            <hr />
            <a href="#" class="card-link">add to cart</a>
            <b-link href="#" class="card-link">
              <b-icon
                icon="info-square-fill"
                variant="secondary"
                font-scale="1.5"
              ></b-icon>
            </b-link>
          </b-card>
        </div>
        <div class="col-sm-6 col-lg-4 mt-3">
          <b-card
            title="Headphone dope dope"
            :sub-title="`R ${200}.00`"
            :img-src="headphones1"
            img-alt="Card image"
            img-top
          >
            <hr />
            <a href="#" class="card-link">add to cart</a>
            <b-link href="#" class="card-link">
              <b-icon
                icon="info-square-fill"
                variant="secondary"
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

import headphones1 from "../assets/headphones1.webp";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      headphones1,
    };
  },
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
