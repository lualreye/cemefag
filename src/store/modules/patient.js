import axios from "axios";
import router from "../../router";

const state = () => ({
  patient: null,
  appointment: null,
});

const getters = {
  getPatient(state) {
    return state.patient;
  },
  getAppointment(state) {
    return state.appointment;
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
  SET_APPOINTMENT(state, appointment) {
    state.appointment = appointment;
    console.los(state.appointment, appointment)
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
      const newPatientRes = await axios.post(
        `${process.env.VUE_APP_BASE_URL}/patient`,
        newPatient,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      const patient = newPatientRes.data.data;
      commit("SET_PATIENT", patient);
      router.push("/create-consultation");
    } catch (e) {
      console.error("PATIENT_NOT_CREATED", e);
    }
  },
  async getPatientAppointment({ commit }, payload) {
    try {
      const patientAppointment = await axios.get(
        `${process.env.VUE_APP_BASE_URL}/agenda/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      console.log(patientAppointment.data.agendaResult)
      commit("SET_APPOINTMENT", patientAppointment.data.agendaResult);
    } catch (err) {
      console.error("CANNOT_CREATE_DATE");
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
