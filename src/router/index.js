
import { createRouter, createWebHistory } from "vue-router"
import Login from "../views/Login.vue"
import User from "../views/User.vue"

const routes = [
  {
    path: "/",
    name: 'Login',
    component: Login,
    meta: {
      title: "Login Home"
    }
  },
  {
    path: "/user",
    name: 'User',
    component: User,
    meta: {
      title: "User"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router