import Vue from "vue";
/*
  VueRouter related imports
*/
import VueRouter from "vue-router";
import routes from "./routes";
/*
  Vuex related imports
*/
import { store } from "./store/store";
/*
  Bootstrap related imports
*/
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootswatch/dist/spacelab/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
/*
  Local Components related imports
*/
import App from "./App.vue";

// Make BootstrapVue available throughout project
Vue.use(BootstrapVue);
// Make BootstrapVue BootstrapVue icon components available throughout project
Vue.use(IconsPlugin);
// initialize VueRouter and tell Vue to use it
Vue.use(VueRouter);

Vue.config.productionTip = false;

// instantiate Vue router
const router = new VueRouter({
  mode: "history",
  base: "/buymore-cart/",
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
