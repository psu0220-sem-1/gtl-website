import Vue from "vue";
import Vuex from "vuex";
import volumes from "./modules/volumes";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    volumes,
  },
});
