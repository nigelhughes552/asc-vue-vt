import axios from "axios";

const state = {
  responsibilities: []
};

const getters = {
  allResponsibilities: state => state.responsibilities
};

const actions = {
  async fetchResponsibilities({ commit }) {
    const response = await axios.get(
      "https://localhost:44377/api/GetResponsibilitiesByPerson/9"
    );

    commit("setResponsibilities", response.data);
  },
  async filterResponsibilities({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit("setResponsibilities", response.data);
  }
};

const mutations = {
  setResponsibilities: (state, responsibilities) =>
    (state.responsibilities = responsibilities)
};

export default {
  state,
  getters,
  actions,
  mutations
};
