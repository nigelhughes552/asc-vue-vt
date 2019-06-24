import axios from "axios";

const state = {
  personThumb: String
};

const getters = {
  personThumb: state => state.personThumb
};

const actions = {
  async fetchPersonThumb({ commit }, id) {
    try {
      const response = await axios.get(
        `http://192.168.1.50/api/GetPersonThumbnail/${id}`
      );

      commit("setPersonThumb", response.data);
    } catch (e) {
      commit("setPersonThumb", "/avatar.png");
    }
  }
};

const mutations = {
  setPersonThumb: (state, personThumb) => (state.personThumb = personThumb)
};

export default {
  state,
  getters,
  actions,
  mutations
};
