import axios from "axios";

const state = {
  responsibilities: []
};

const getters = {
  allResponsibilities: state => state.responsibilities
};

const actions = {
  async fetchResponsibilities({ commit }, id) {
    const response = await axios.get(
      `http://192.168.1.50/api/GetResponsibilitiesByPerson/${id}`
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
