import axios from "axios";
import router from "../../router";

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
      const patient = patientRes.data.data;
      router.push("/create-consultation")
      commit("SET_PATIENT", patient);
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
