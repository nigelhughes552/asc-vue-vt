import Vuex from "vuex";
import Vue from "vue";

import responsibilities from "./modules/responsibilities";
import fellowships from "./modules/fellowships";
import appointments from "./modules/appointments";
import person from "./modules/person";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    responsibilities,
    fellowships,
    appointments,
    person
  }
});
