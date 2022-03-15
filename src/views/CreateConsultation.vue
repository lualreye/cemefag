<template>
  <div class="w-full">
    <div class="w-full">
      <!-- PATIENT DATA -->
      <div class="w-full max-w-2xl mb-14 px-8 py-4 mx-auto mt-16 shadow-md">
        <div
          class="w-full flex border-b border-primary justify-between items-center px-1"
        >
          <p class="text-textColor text-sm font-light text-left">
            DATOS DEL PACIENTE
          </p>
          <button class="w-6 h-6 mb-1">
            <icon name="edit" class="text-primary" />
          </button>
        </div>
        <div class="w-full px-4 mt-6">
          <!-- PATIENT NAMES -->
          <div class="w-full flex justify-start items-center">
            <p class="text-textColor text-sm font-medium mr-2">Paciente:</p>
            <p class="text-textColor text-sm font-normal mr-1">
              {{ patient.name.toUpperCase() }}
            </p>
            <p class="text-textColor text-sm font-normal mr-1">
              {{ patient.lastname.toUpperCase() }}
            </p>
          </div>
          <!-- PATIENT CI -->
          <div class="w-full flex justify-start items-center mt-4">
            <p class="text-textColor text-sm font-medium mr-2">Cédula:</p>
            <p class="text-textColor text-sm font-normal mr-1">
              {{ patient.ci.toUpperCase() }}
            </p>
          </div>
          <!-- PATIENT EMAIL -->
          <div class="w-full flex justify-start items-center mt-4">
            <p class="text-textColor text-sm font-medium mr-2">Email:</p>
            <p class="text-textColor text-sm font-normal mr-1">
              {{ patient.email.toUpperCase() }}
            </p>
          </div>
        </div>
      </div>
      <!-- CONSULT DATA -->
      <div class="w-full mt-6"></div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Global/Icon.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Icon,
  },
  setup() {
    const store = useStore();
    const patient = computed(() => {
      return store.getters["userAuthentication/getPatient"];
    });

    return {
      patient,
    };
  },
};
</script>
