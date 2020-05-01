/* eslint-disable no-unused-vars */
import axios from "axios";
import parsers from "../../utils/parsers";

const state = {
  addresses: [],
};
const mutations = {
  setAddresses(state, addresses) {
    state.addresses = addresses;
  },
};
const actions = {
  fetchAddresses({ commit }) {
    axios.get("/address").then((res) => {
      console.log(res.data);
      // const addresses = parsers.parseVolumes(res.data);
      commit("setAddresses", parsers.parseAddresses(res.data));
    });
  },
  postAddress({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/address", data)
        .then((res) => {
          console.log(res);
          resolve();
        })
        .catch((err) => {
          console.log("err", err.response.data);
          reject("Error. Maybe use a different zip.");
        });
    });
  },
  deleteAddress({ commit, state }, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/address/${id}`)
        .then(() => {
          const addresses = state.addresses.filter(
            (address) => address.id != id
          );
          commit("setAddresses", addresses);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
const getters = {
  oneLineAddresses: (state) => {
    return state.addresses.map((address) => {
      return {
        id: address.addressId,
        info: `${address.street}, ${address.additionalInfo}, ${address.zipCode}`,
      };
    });
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
