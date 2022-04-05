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
      commit("RESET_PATIENT");
      const patientRes = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/patient/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      const patient = patientRes.data.data;
      if (!patient) {
        commit("SET_PATIENT");
        router.push("/new-patient");
        return;
      }
      commit("SET_PATIENT", patient);
      router.push("/create-consultation");
    } catch (e) {
      console.error("CANNOT_GET_PATIENT", e);
    }
  },
  async createPatientUp({ commit }, payload) {
    try {
      const newPatient = {
      pc_cedula: payload.ci,
      pc_apellidos: payload.lastname,
      pc_nombres: payload.name,
      pc_celular: payload.phone,
      pc_mail: payload.email,
      pr_producto: 0,
      pr_fecha_nacim: payload.birthday,
    };
    console.log(newPatient);
    const newPatientRes = await axios.post(
      `${process.env.VUE_APP_BASE_URL}/patient`,
      newPatient,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      }
    );
    console.log(newPatientRes);
    const patient = newPatientRes.data.data;
    commit("SET_PATIENT", patient);
    router.push("/create-consultation");
    } catch (e) {
      console.error("PATIENT_NOT_CREATED", e)
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
