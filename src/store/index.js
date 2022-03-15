import { createStore } from "vuex";
import userAuthentication from "./modules/userAuthentication";
import insurance from "./modules/insurance"

const store = createStore({
  modules: {
    userAuthentication,
    insurance
  }
});

export default store;
