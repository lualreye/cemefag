<template>
  <div class="w-screen h-screen flex justify-center items-center flex-col bg-backgroundWhite">
    <h1 class="w-full text-center text-3xl text-textColor mb-24">
      Identificar al paciente
    </h1>
    <div class="w-56">
      <form class="w-full flex flex-col justify-center items-center">
        <div class="w-full flex flex-col justify-center items-center mb-4">
          <!-- PASSWORD INPUT -->
          <label class="text-sm text-textColor w-full text-left mb-1 mt-4">
            Cédula
          </label>
          <div
            class="w-full flex justify-center bg-backgroundWhite items-center px-3 py-3 border border-grayColor rounded-lg"
          >
            <div class="w-4 h-4 mr-2">
              <icon name="password" class="text-grayColor" />
            </div>
            <input
              type="text"
              v-model="id"
              placeholder="Escriba su contraseña"
              class="placeholder-grayColor bg-backgroundWhite border-none focus:border-none outline-none text-primary w-full text-xs"
            />
          </div>
          <span v-if="!idValidation" class="text-xs font-light text-pink-600"
            >Solo se aceptan numeros</span
          >
        </div>
      </form>
      <div class="w-full flex justify-center items-center">
        <c-button
          name="Identificar"
          :disableButton="!idValidation"
          @click="reqUser"
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
    const user = reactive({
      id: null,
    });

    const store = useStore()

    const idValidation = computed(() => {
      return idIsValid(user.id) && user.id !== null && user.id !== "";
    });

    function idIsValid(id) {
      const idRgx = /^[0-9]{0,}$/;
      return idRgx.test(id);
    }

    function reqUser() {
      const cedula = user.id;
      store.dispatch("patient/getPatient", cedula)
    }

    return {
      ...toRefs(user),
      idValidation,
      reqUser,
    };
  },
};
</script>
