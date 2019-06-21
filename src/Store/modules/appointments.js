import axios from "axios";

const state = {
  appointments: []
};

const getters = {
  allAppointments: state => state.appointments
};

const actions = {
  async fetchAppointments({ commit }, id) {
    const response = await axios.get(
      `https://localhost:44377/api/GetCurrentAppointments/${id}`
    );

    commit("setAppointments", response.data);
  }
};

const mutations = {
  setAppointments: (state, appointments) => (state.appointments = appointments)
};

export default {
  state,
  getters,
  actions,
  mutations
};