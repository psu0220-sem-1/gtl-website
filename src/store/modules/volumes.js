import axios from "axios";
import parsers from "../../utils/parsers";

const state = {
  volumes: [],
};
const mutations = {
  setVolumes(state, volumes) {
    state.volumes = volumes;
  },
};
const actions = {
  fetchVolumes({ commit }) {
    axios.get("/volume").then((res) => {
      console.log(res.data);
      const volumes = parsers.parseVolumes(res.data);
      commit("setVolumes", volumes);
    });
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
