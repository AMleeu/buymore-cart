import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import App from "./App.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

// instantiate Vue router
const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
