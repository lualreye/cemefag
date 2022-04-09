import axios from "axios";

const state = () => ({
  specialities: [],
});

const getters = {
  getSpecialities(state) {
    return state.specialities;
  },
};

const mutations = {
  SET_SPECIALITIES(state, specialities) {
    state.specialities = specialities;
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
