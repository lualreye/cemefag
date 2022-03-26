<template>
  <div class="w-full">
    <div
      class="w-full flex border-b border-primary justify-between items-center px-1"
    >
      <p class="text-textColor text-sm font-light text-left">CITA AGENDADA</p>
    </div>
    <div class="w-full flex justify-center items-center my-14">
      <div class="w-full">
        <p
          v-if="consultationExists"
          class="text-sm text-textColor font-light text-center"
        >
          No Existe Registro
        </p>
        <p v-else class="text-textColor">Aqui ponemos la info</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const consultationExists = computed(() => {
      return Object.keys(store.getters["insurance/getCompany"]).length === 0
        ? false
        : true;
    });

    return {
      consultationExists,
    };
  },
};
</script>
