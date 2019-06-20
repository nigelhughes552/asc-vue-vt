import Vuex from "vuex";
import Vue from "vue";

import responsibilities from "./modules/responsibilities";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    responsibilities
  }
});
