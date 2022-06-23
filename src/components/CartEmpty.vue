<template>
  <div class="container page-content">
    <div class="row mt-5">
      <div class="col-12 col-md-8 offset-md-2">
        <b-jumbotron
          bg-variant="light"
          text-variant="black"
          border-variant="light"
        >
          <template #header>Your Cart</template>

          <template #lead>
            it currently empty, go to homepage to browse items
          </template>

          <hr class="my-4" />

          <p class="justift-content-center">
            <b-breadcrumb>
              <b-breadcrumb-item href="#" @click="goToHome">
                <b-icon
                  icon="house-fill"
                  scale="1.25"
                  shift-v="1.25"
                  aria-hidden="true"
                ></b-icon>
                Home
              </b-breadcrumb-item>
              <b-breadcrumb-item active>Cart</b-breadcrumb-item>
            </b-breadcrumb>
          </p>
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
