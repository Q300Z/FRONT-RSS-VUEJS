import rss from "@/api/rss";

const state = () => ({
  flux: [],
  currentFlux: "",
});

const getters = {};

const actions = {
  async getFlux({ commit }) {
    const flux = await rss.getFlux();
    commit("setFlux", flux);
    return flux;
  },

  setCurrentFlux({ commit }, idFlux) {
    commit("setCurrentFluxMutation", idFlux);
  },
};

const mutations = {
  setFlux(state, flux) {
    state.flux = flux;
  },

  setCurrentFluxMutation(state, idFlux) {
    state.currentFlux = idFlux;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
