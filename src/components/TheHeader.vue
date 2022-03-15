<template>
  <header class="w-full flex justify-center items-center bg-backgroundWhite">
    <div
      class="max-w-screen-2xl w-full border-b border-primary flex items-center justify-between py-3 px-3"
    >
      <figure class="w-36 justify-center">
        <img :src="logo" alt="" />
      </figure>
      <div class="flex justify-center items-center relative">
        <div
          v-if="isModalOpen"
          class="bg-backgroundWhite absolute right-0 top-full w-56 flex flex-col justify-center items-center shadow-lg p-4 divide-y divide-grayColor"
        >
          <div class="mb-2">
            <router-link to="/user" class="text-base text-textColor">
              Identificar nuevo paciente
            </router-link>
          </div>
          <div class="w-full">
            <button
              class="w-full py-2 rounded-lg bg-pink-600 text-backgroundWhite text-sm font-light mt-4"
              @click="logout"
            >
              Cerrar Sesion
            </button>
          </div>
        </div>
        <div class="w-5 h-5 flex justify-center items-center mr-2">
          <icon name="account" class="text-textColor" />
        </div>
        <p class="text-base text-textColor">{{ user }}</p>
        <button
          class="flex w-5 h-5 justify-center items-center"
          @click="activeModal"
        >
          <icon :name="arrowDirection" class="text-textColor" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Icon from "@/components/Global/Icon.vue";
import { useStore } from "vuex";
import { computed, reactive, toRefs } from "vue";
import { useRouter } from 'vue-router'
export default {
  components: {
    Icon,
  },

  setup() {
    const logo = require("@/assets/images/company/logo.png");
    const modalState = reactive({
      isModalOpen: false,
    });

    const store = useStore();
    const user = computed(() => store.getters["userAuthentication/getUser"]);

    const arrowDirection = computed(() => {
      return modalState.isModalOpen === true ? "arrowUp" : "arrowDown";
    });

    function activeModal() {
      if (modalState.isModalOpen) {
        modalState.isModalOpen = false;
      } else {
        modalState.isModalOpen = true;
      }
    }


    const router = useRouter()
    function logout() {
      router.push('/')
    }

    return {
      user,
      ...toRefs(modalState),
      activeModal,
      arrowDirection,
      logo,
      logout
    };
  },
};
</script>
