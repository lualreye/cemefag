import { createStore } from "vuex";
import userAuthentication from "./modules/userAuthentication";
import insurance from "./modules/insurance"
import patient from "./modules/patient"
import appointment from "./modules/appointment"

const store = createStore({
  modules: {
    userAuthentication,
    insurance,
    patient,
    appointment
  }
});

export default store;
