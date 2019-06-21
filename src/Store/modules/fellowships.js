import axios from "axios";

const state = {
  fellowships: []
};

const getters = {
  allFellowships: state => state.fellowships
};

const actions = {
  async fetchFellowships({ commit }, id) {
    const response = await axios.get(
      `https://localhost:44377/api/GetCurrentFellowships/${id}`
    );

    commit("setFellowships", response.data);
  }
};

const mutations = {
  setFellowships: (state, fellowships) => (state.fellowships = fellowships)
};

export default {
  state,
  getters,
  actions,
  mutations
};
