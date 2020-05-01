import Vue from "vue";
import Vuex from "vuex";
import volumes from "./modules/volumes";
import address from "./modules/address";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    volumes,
    address,
  },
});
