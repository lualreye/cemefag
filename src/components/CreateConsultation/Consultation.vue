<template>
  <div class="w-full">
    <div
      class="w-full flex border-b border-primary justify-between items-center px-1"
    >
      <p class="text-textColor text-sm font-light text-left">CITA AGENDADA</p>
    </div>
    <div class="w-full flex justify-center items-center my-14">
      <div class="w-full">
        <div v-if="consultationExists" class="w-full">
          <p class="text-sm text-textColor font-light text-center">
            No Existe Registro
          </p>
        </div>
        <div v-else class="w-full flex justify-between items-center">
          <div class="flex flex-col justify-between items-start">
            <p class="text-sm text-primary font-medium mb-4">Médico</p>
            <p class="text-xs font-light text-textColor">
              {{ appointment.doctor.me_nombre }}
            </p>
          </div>
          <div class="flex flex-col justify-between items-start">
            <p class="text-sm text-primary font-medium mb-4">Especialidad</p>
            <p class="text-xs font-light text-textColor">
              {{ appointment.speciality.es_nombre }}
            </p>
          </div>
          <div class="flex flex-col justify-between items-start">
            <p class="text-sm text-primary font-medium mb-4">Producto</p>
            <p class="text-xs font-light text-textColor">
              {{ appointment.product.pr_nombre }}
            </p>
          </div>
          <div class="flex flex-col justify-between items-start">
            <p class="text-sm text-primary font-medium mb-4">Fecha</p>
            <p class="text-xs font-light text-textColor">
              {{ appointment.data.ag_fecha_age.substr(0, 10) }}
            </p>
          </div>
          <div class="flex flex-col justify-between items-start">
            <p class="text-sm text-primary font-medium mb-4">Hora</p>
            <p class="text-xs font-light text-textColor">
              {{ appointment.data.ag_fecha_age.substr(11, 5) }}
            </p>
          </div>
          <div class="flex flex-col justify-between items-center">
            <p class="text-sm text-primary font-medium mb-4">Eliminar</p>
            <button class="w-6 h-6 flex justify-center items-center">
              <Icon name="erase" class="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../Global/Icon.vue"
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Icon
  },
  setup() {
    const store = useStore();
    const consultationExists = computed(() => {
      return appointment.value === null ? true : false;
    });

    const patientId = computed(() => {
      return store.getters["patient/getPatient"];
    });

    const appointment = computed(() => {
      return store.getters["patient/getAppointment"];
    });

    onMounted(() => {
      getAppointment();
    });

    // 0907550974

    function getAppointment() {
      console.log(patientId.value.pc_id);
      store.dispatch("patient/getPatientAppointment", patientId.value.pc_id);
    }

    return {
      consultationExists,
      patientId,
      appointment,
    };
  },
};
</script>
