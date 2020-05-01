/* eslint-disable no-unused-vars */
import axios from "axios";
import parsers from "../../utils/parsers";

const state = {
  volumes: [],
  volume: {},
};
const mutations = {
  setVolumes(state, volumes) {
    state.volumes = volumes;
  },
  setVolume(state, volume) {
    state.volume = volume;
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
  postVolume({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/volume", data)
        .then((res) => {
          console.log(res);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  fetchVolume({ commit }, id) {
    axios.get(`/volume/${id}`).then((res) => {
      console.log("vol", res.data);
      commit("setVolume", res.data);
    });
  },
  deleteVolume({ commit, state }, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/volume/${id}`)
        .then((res) => {
          console.log(res.data);
          const volumes = state.volumes.filter((vol) => vol.id !== id);
          commit("setVolumes", volumes);
        })
        .catch((err) => reject(err));
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
