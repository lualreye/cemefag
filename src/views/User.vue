<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-56">
      <h1 class="w-full text-center text-3xl text-textColor mb-24">Registro</h1>
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
              type="Number"
              v-model="id"
              placeholder="Escriba su contraseña"
              class="placeholder-grayColor bg-backgroundWhite border-none focus:border-none outline-none text-primary w-full text-xs"
            />
          </div>
          <span
            v-if="idValidation"
            class="text-xs font-light text-pink-600"
            ></span
          >
        </div>
      </form>
      <div class="w-full flex justify-center items-center">
        <c-button
          name="Identificar"
          :disabled="idValidation"
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
export default {
  components: {
    Icon,
    CButton,
  },
  setup() {
    const user = reactive({
      id: null,
    });

    const idValidation = computed(() => {
      return idIsValid(user.id) ? true : false;
    });

    function idIsValid(id) {
      const idRgx = /^[0-9]{0,}$/
      return idRgx.test(id)
    }

    function reqUser() {
      console.log('Estamos identificando usuario');
    }

    return {
      ...toRefs(user),
      idValidation,
      reqUser
    };
  },
};
</script>
