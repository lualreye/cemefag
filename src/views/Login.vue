<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-56">
      <h1 class="w-full text-center text-3xl text-textColor mb-20">Registro</h1>
      <form class="w-full flex flex-col justify-center items-center">
        <div class="w-full flex flex-col justify-center items-center mb-4">
          <!-- USER INPUT -->
          <label class="text-sm text-textColor w-full text-left mb-1">
            Usuario
          </label>
          <div
            class="w-full flex justify-center bg-backgroundWhite items-center px-3 py-3 border border-grayColor rounded-lg"
          >
            <div class="w-4 h-4 mr-2">
              <icon name="account" class="text-grayColor" />
            </div>
            <input
              type="email"
              v-model="user"
              placeholder="Escriba su usuario"
              class="placeholder-grayColor bg-backgroundWhite border-none focus:border-none outline-none text-primary w-full text-xs"
            />
          </div>
          <span v-if="emailValidation" class="text-xs font-light text-pink-600"
            >Usuario no valido</span
          >
          <!-- PASSWORD INPUT -->
          <label class="text-sm text-textColor w-full text-left mb-1 mt-4">
            Contraseña
          </label>
          <div
            class="w-full flex justify-center bg-backgroundWhite items-center px-3 py-3 border border-grayColor rounded-lg"
          >
            <div class="w-4 h-4 mr-2">
              <icon name="password" class="text-grayColor" />
            </div>
            <input
              type="password"
              v-model="password"
              placeholder="Escriba su contraseña"
              class="placeholder-grayColor bg-backgroundWhite border-none focus:border-none outline-none text-primary w-full text-xs"
            />
          </div>
          <span
            v-if="!passwordValidation"
            class="text-xs font-light text-pink-600"
            >No haz introducido password</span
          >
        </div>
      </form>
      <div class="w-full flex justify-center items-center">
        <c-button
          name="Ingresar"
          :disableButton="!credentialsAreValid"
          @click="sendCredentials"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../components/Global/Icon.vue";
import CButton from "../components/Global/CButton.vue";
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Icon,
    CButton,
  },
  setup() {
    const credentials = reactive({
      user: null,
      password: null,
    });

    const store = useStore();

    const emailValidation = computed(() => {
      return  credentials.user !== null
        ? false
        : true;
    });


    // TODO params (*) email
    // function emailisValid(email) {
    //   const userRgx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    //   return userRgx.test(email);
    // }

    const passwordValidation = computed(() => {
      return credentials.password === "" || credentials.password === null
        ? false
        : true;
    });

    const credentialsAreValid = computed(() => {
      return !emailValidation.value && passwordValidation.value;
    });

    // TODO: params (*) username, password
    function sendCredentials() {
      const user = {
        us_nombre: credentials.user,
        us_clave: credentials.password,
      };
      //   "us_nombre": "userGea",
      //  "us_clave": "password"
      store.dispatch("userAuthentication/login", user);
    }

    return {
      ...toRefs(credentials),
      emailValidation,
      passwordValidation,
      credentialsAreValid,
      sendCredentials,
    };
  },
};
</script>
