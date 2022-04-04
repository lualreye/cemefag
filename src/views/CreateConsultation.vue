<template>
  <div class="w-full">
    <div class="w-full px-4">
      <!-- PATIENT DATA -->
      <div class="w-full max-w-2xl mb-14 px-10 py-6 mx-auto mt-16 shadow-md">
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
              {{ patient.pc_nombres.toUpperCase() }}
            </p>
            <p class="text-textColor text-sm font-normal mr-1">
              {{ patient.pc_apellidos.toUpperCase() }}
            </p>
          </div>
          <!-- PATIENT CI -->
          <div class="w-full flex justify-start items-center mt-4">
            <p class="text-textColor text-sm font-medium mr-2">Cédula:</p>
            <p class="text-textColor text-sm font-normal mr-1">
              {{ patient.pc_cedula.toUpperCase() }}
            </p>
          </div>
          <!-- PATIENT EMAIL -->
          <div class="w-full flex justify-start items-center mt-4">
            <p class="text-textColor text-sm font-medium mr-2">Email:</p>
            <p class="text-textColor text-sm font-normal mr-1">
              {{ patient.pc_mail }}
            </p>
          </div>
          <!-- PATIENT PHONE -->
          <div class="w-full flex justify-start items-center mt-4">
            <p class="text-textColor text-sm font-medium mr-2">Teléfono:</p>
            <p class="text-textColor text-sm font-normal mr-1">
              {{ patient.pc_celular }}
            </p>
          </div>
          <!-- PATIENT PHONE -->
          <div class="w-full flex justify-start items-center mt-4">
            <p class="text-textColor text-sm font-medium mr-2">
              Fecha de nacimiento:
            </p>
            <p class="text-textColor text-sm font-normal mr-1">
              {{ patient.pc_fecha_nacim }}
            </p>
          </div>
        </div>
      </div>
      <!-- CONSULT DATA -->
      <div class="w-full max-w-2xl mb-14 px-10 py-6 mx-auto mt-16 shadow-md">
        <div v-if="!isEditing" class="w-full">
          <consultation v-if="!isEditing" />
          <div class="w-56 mx-auto">
            <c-button name="Agendar cita" @click="editConsultation" />
          </div>
        </div>
        <div v-else class="w-full">
          <new-consultation />
          <div class="w-56 mx-auto">
            <c-button name="Cancelar" @click="editConsultation" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Global/Icon.vue";
import CButton from "@/components/Global/CButton.vue"
import Consultation from "@/components/CreateConsultation/Consultation.vue"
import NewConsultation from "@/components/CreateConsultation/NewConsultation.vue"
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Icon,
    CButton,
    Consultation,
    NewConsultation
  },
  setup() {
    const store = useStore();
    const patient = computed(() => {
      return store.getters["patient/getPatient"];
    });

    const editingState = reactive({
      isEditing: false,
    });

    function editConsultation() {
      if(editingState.isEditing) {
        editingState.isEditing = false
      } else {
        editingState.isEditing = true
      }
    }

    return {
      patient,
      ...toRefs(editingState),
      editConsultation
    };
  },
};
</script>
