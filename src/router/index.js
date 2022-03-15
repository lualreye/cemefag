import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import User from "../views/User.vue";
import NewPatient from "@/views/NewPatient";
import CreateConsultation from "@/views/CreateConsultation.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      title: "Login Home",
      layout: "DefaultLayout",
    },
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: {
      title: "User",
      layout: "AuthLayout",
    },
  },
  {
    path: "/new-patient",
    name: "newPatient",
    component: NewPatient,
    meta: {
      title: "Nuevo paciente",
      layout: "AuthLayout",
    },
  },
  {
    path: "/create-consultation",
    name: "createNewConsultation",
    component: CreateConsultation,
    meta: {
      title: "Nueva consulta",
      layout: "AuthLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
