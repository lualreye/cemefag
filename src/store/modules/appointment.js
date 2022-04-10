import axios from "axios";

const state = () => ({
  specialities: [],
  doctors: [],
});

const getters = {
  getSpecialities(state) {
    return state.specialities;
  },
  getDoctors(state) {
    return state.doctors;
  },
};

const mutations = {
  SET_SPECIALITIES(state, specialities) {
    state.specialities = specialities;
  },
  SET_DOCTORS(state, doctors) {
    state.doctors = doctors;
  },
  RESET_DOCTORS(state) {
    state.doctors = [];
  },
};

const actions = {
  async fetchSpecialities({ commit }) {
    try {
      const specialitiesResponse = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/speciality`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      commit("SET_SPECIALITIES", specialitiesResponse.data.data);
    } catch (err) {
      console.error("CANNOT_GET_SPECIALITIES", err);
    }
  },
  async fetchDoctors({ commit }, payload) {
    try {
      const doctorsResponses = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/speciality/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      commit("SET_DOCTORS", doctorsResponses.data.doctors);
    } catch (err) {
      console.error("CANNOT_GET_DOCTORS", err);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
