import axios from "axios";

const state = () => ({
  patient: null,
});

const getters = {
  getPatient(state) {
    return state.patient;
  },
};

const mutations = {
  // TODO: params(*) state, patient
  SET_PATIENT(state, patient) {
    state.patient = patient;
  },
  RESET_PATIENT(state) {
    state.patient = null;
  },
};

const actions = {
  async getPatient({ commit }, payload) {
    try {
      const patientRes = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/patient/${payload}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("user-token")}`}
        }
      );
      console.log(patientRes.data.data);
      const patient = patientRes.data.data;
      commit("SET_PATIENT", { patient });
    } catch (e) {
      console.error("CANNOT_GET_PATIENT", e);
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
