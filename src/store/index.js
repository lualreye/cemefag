import { createStore } from "vuex";
import userAuthentication from "./modules/userAuthentication";

const store = createStore({
  modules: {
    userAuthentication
  }
});

export default store;
