// import Vue THEN Vuex
import Vue from "vue";
import Vuex from "vuex";

// initialize Vuex and tell Vue to use it
Vue.use(Vuex);

/* 
    create and export store
*/
const store = new Vuex.Store({
  state: {},
});

export { store };
