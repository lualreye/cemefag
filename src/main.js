import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import AppLayout from "./layouts/AppLayout.vue";
import "./assets/css/reset.css";
import "./assets/css/tailwind.css";

const app = createApp(App);

app.component("app-layout", AppLayout);

app.use(router);

app.use(store);

app.mount("#app");
