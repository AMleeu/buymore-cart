import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { store } from "./store/store";
import "bootswatch/dist/united/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
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
  routes,
  mode: "history",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
