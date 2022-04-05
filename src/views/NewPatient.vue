<template>
  <div class="w-full px-2">
    <p class="text-center text-textColor font-light text-sm mt-8">
      Paciente no identificado
    </p>
    <h1 class="text-center text-3xl text-textColor font-medium mt-3">
      Registro de pacientes
    </h1>
    <div class="w-full max-w-md md- mt-12 mx-auto">
      <div class="w-full border-b border-primary">
        <p class="text-base text-textColor text-left font-light">
          DATOS DEL PACIENTE
        </p>
      </div>
      <!-- USER NAME AND LASTNAME -->
      <div class="w-full flex flex-wrap justify-between items-center">
        <!-- USER NAME -->
        <div class="w-full md:w-1/2">
          <label class="w-full text-xs font-medium text-textColor">
            Nombre
          </label>
          <input
            type="name"
            v-model="name"
            placeholder="John"
            class="px-2 py-2 w-11/12 rounded-lg outline-none text-primary text-sm placeholder-grayColor border border-grayColor"
          />
        </div>
        <!-- LASTNAME -->
        <div class="w-full md:w-1/2">
          <label class="w-full text-xs font-medium text-textColor">
            Apellidos
          </label>
          <input
            type="lastname"
            v-model="lastname"
            placeholder="Doe"
            class="px-2 py-2 w-11/12 rounded-lg outline-none text-primary text-sm placeholder-grayColor border border-grayColor"
          />
        </div>
      </div>
      <!-- CI AND USER BIRTHDAY -->
      <div class="w-full flex flex-wrap justify-between items-center">
        <!-- USER CI -->
        <div class="w-full md:w-1/2">
          <label class="w-full text-xs font-medium text-textColor">
            Cédula
          </label>
          <input
            type="text"
            v-model="ci"
            placeholder="011223344"
            class="px-2 py-2 w-11/12 rounded-lg outline-none text-primary text-sm placeholder-grayColor border border-grayColor"
          />
        </div>
        <!-- BIRTHDAT -->
        <div class="w-full md:w-1/2">
          <label class="w-full text-xs font-medium text-textColor">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            v-model="birthday"
            placeholder="27/01/95"
            class="px-2 py-2 w-11/12 rounded-lg outline-none text-primary text-sm placeholder-grayColor border border-grayColor"
          />
        </div>
      </div>
      <!-- User email and phone -->
      <div class="w-full flex flex-wrap justify-between items-center">
        <!-- USER EMAIL -->
        <div class="w-full md:w-1/2">
          <label class="w-full text-xs font-medium text-textColor">
            Email del paciente
          </label>
          <input
            type="email"
            v-model="email"
            placeholder="juanito@piguave.com"
            class="px-2 py-2 w-11/12 rounded-lg outline-none text-primary text-sm placeholder-grayColor border border-grayColor"
          />
        </div>
        <!-- USER PHONE -->
        <div class="w-full md:w-1/2">
          <label class="w-full text-xs font-medium text-textColor">
            Teléfono
          </label>
          <input
            type="tel"
            v-model="phone"
            placeholder="099999999"
            class="px-2 py-2 w-11/12 rounded-lg outline-none text-primary text-sm placeholder-grayColor border border-grayColor"
          />
        </div>
      </div>
      <!-- BUTTONS SECTION -->
      <div class="w-full flex flex-wrap justify-between items-center mt-8">
        <div class="w-full md:w-1/2 flex justify-start items-center">
          <button
            name="Cancelar"
            class="text-textColor rounded-lg border border-primary py-3 text-sm focus:bg-gray-300 md:w-11/12"
            @click="redirectionToUser"
          >
            Cancelar
          </button>
        </div>
        <div class="w-full md:w-1/2 flex justify-start items-center">
          <c-button
            name="Guardar"
            :disableButton="!userValidation"
            class="md:w-11/12"
            @click="createPatient"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from "@/components/Global/CButton.vue";
import { computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
export default {
  components: {
    CButton,
  },
  setup() {
    const userState = reactive({
      name: null,
      lastname: null,
      ci: null,
      birthday: null,
      email: null,
      phone: null,
    });

    const userName = computed(() => {
      return userState.name !== "" && userState.name !== null;
    });

    const userLastname = computed(() => {
      return userState.lastname !== "" && userState.lastname !== null;
    });

    const userCi = computed(() => {
      return (
        userState.ci !== "" && userState.ci !== null && ciIsValid(userState.ci)
      );
    });

    function ciIsValid(ci) {
      const ciRgx = /^[0-9]{0,}$/;
      return ciRgx.test(ci);
    }

    const userBirthday = computed(() => {
      return userState.birthday !== "" && userState.birthday !== null;
    });

    const userEmail = computed(() => {
      return (
        emailIsValid(userState.email) &&
        userState.email !== null &&
        userState.email !== ""
      );
    });

    function emailIsValid(email) {
      const emailRgx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      return emailRgx.test(email);
    }

    const userPhone = computed(() => {
      return userState.phone !== "" && userState.phone !== null;
    });

    const router = useRouter();

    function redirectionToUser() {
      router.push("/user");
    }

    const userValidation = computed(() => {
      return (
        userName,
        userLastname.value &&
          userCi.value &&
          userBirthday.value &&
          userEmail.value &&
          userPhone.value
      );
    });

    const store = useStore()

    function createPatient() {
      const user = {
        ...userState
      }
      console.log(user)
      store.dispatch("patient/createPatientUp", user)
    }

    return {
      ...toRefs(userState),
      userValidation,
      redirectionToUser,
      createPatient
    };
  },
};
</script>

<style scoped>
input[type="text"] {
  border-radius: 8px;
}
</style>
