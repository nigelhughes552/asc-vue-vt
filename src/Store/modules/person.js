import axios from "axios";

const state = {
  person: {}
};

const getters = {
  person: state => state.person
};

const actions = {
  async fetchPerson({ commit }, id) {
    const response = await axios.get(`http://192.168.1.50/api/People/${id}`);

    commit("setPerson", response.data);
  }
};

const mutations = {
  setPerson: (state, person) => (state.person = person)
};

export default {
  state,
  getters,
  actions,
  mutations
};
