import { createStore } from "vuex";
import userAuthentication from "./modules/userAuthentication";
import insurance from "./modules/insurance"
import patient from "./modules/patient"

const store = createStore({
  modules: {
    userAuthentication,
    insurance,
    patient
  }
});

export default store;
