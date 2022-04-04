import axios from "axios"

const state =  () => ({
  patient: null
})

const getters = {
  getPatient(state) {
    return state.patient
  }
}

const mutations = {
  // TODO: params(*) state, patient
  SET_PATIENT(state, patient) {
    state.patient = patient
  },
  RESET_PATIENT(state) {
    state.patient = null
  }
}

const actions = {
  async getPatient({commit}, payload) {
    try {
      console.log(payload)
      const patientRes = await axios.get(
      `${process.env.VUE_APP_BASE_URL}/patient`,
      {
        pc_cedula: payload.id
      }
    )
    console.log(patientRes)
    const patient = { }
    commit('SET_PATIENT', {patient})
    } catch (e) {
      console.error("CANNOT_GET_PATIENT", e)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}