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
      `http://192.168.1.50/api/GetCurrentFellowships/${id}`
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
