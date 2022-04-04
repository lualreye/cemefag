import axios from "axios";

const state = () => ({
  user: null,
  // patient: null,
  isLoading: false,
  patient: {
    name: "Luis",
    lastname: "Reyes",
    ci: "0924756018",
    birthday: "1995-01-27",
    email: "lualreye@gmail.com",
    phone: "0960952970",
  },
  consultation: {
    specialty: "traumatologia",
    date: "27/01/1995",
    time: "13:00",
    doctor: "Luis Reyes",
  },
});

const getters = {
  getUser(state) {
    return state.user;
  },
  getPatient(state) {
    return state.patient;
  },
  getLoading(state) {
    return state.isLoading;
  },
};

const mutations = {
  SET_PATIENT(state, patient) {
    state.patient = patient;
  },
  SET_LOADING(state, boolean) {
    state.isLoading = boolean;
  },
  SET_USER(state, user) {
    state.user = user
  }
};

const actions = {
  async createPatientUp({ commit }, payload) {
    commit("SET_LOADING", true);
    commit("SET_PATIENT", payload);
    commit("SET_LOADING", false);
  },
  async login({ commit }, payload) {
    try {
      commit("SET_LOADING", true);
      const response = await axios.post(
        `${process.env.VUE_APP_BASE_URL}/auth/login`,
        {
          us_nombre: payload.us_nombre,
          us_clave: payload.us_clave,
        }
      );
      commit("SET_USER", response.data.data.user)
      commit("SET_LOADING", false);
    } catch (err) {
      console.error("ERROR_LOGIN_USER", err);
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
