<template>
  <div class="w-full">
    <div
      class="w-full flex border-b border-primary justify-between items-center px-1"
    >
      <p class="text-textColor text-sm font-light text-left">
        AGENDAMIENTO DE CITA
      </p>
    </div>
    <div class="w-full flex justify-center items-center my-14">
      <div class="w-full flex flex-wrap justify-between items-center">
        <!-- GET specialty -->
        <div class="w-full md:w-1/2">
          <label class="text-textColor w-full text-sm">Especialidad</label>
          <select
            v-model="specialty"
            placeholder="Seleccionar"
            class="w-full md:w-11/12 bg-backgroundWhite border border-grayColor rounded-lg text-sm px-2 py-2"
          >
            <option disabled value="">Escoja una especialidad</option>
            <option
              v-for="(specialty, i) in specialties"
              :key="i"
              class="text-textColor tex-sm"
            >
              {{ specialty.name }}
            </option>
          </select>
        </div>
        <!-- GET DOCTOR -->
        <div class="w-full md:w-1/2">
          <label class="text-textColor w-full text-sm">Médico</label>
          <select
            v-model="doctor"
            placeholder="Seleccionar"
            class="w-full md:w-11/12 bg-backgroundWhite border border-grayColor rounded-lg text-sm px-2 py-2"
          >
            <option disabled value="">Escoja un médico</option>
            <option
              v-for="doctor in doctors"
              :key="doctor"
              class="text-textColor tex-sm"
            >
              {{ doctor }}
            </option>
          </select>
        </div>
      </div>
      <div class="w-full flex flex-wrap justify-between items-center">
        <!-- GET specialty -->
        <div class="w-full md:w-1/2">
          <label class="text-textColor w-full text-sm">Especialidad</label>
          <select
            v-model="specialty"
            placeholder="Seleccionar"
            class="w-full md:w-11/12 bg-backgroundWhite border border-grayColor rounded-lg text-sm px-2 py-2"
          >
            <option disabled value="">Escoja una especialidad</option>
            <option
              v-for="(specialty, i) in specialties"
              :key="i"
              class="text-textColor tex-sm"
            >
              {{ specialty.name }}
            </option>
          </select>
        </div>
        <!-- GET DOCTOR -->
        <div class="w-full md:w-1/2">
          <label class="text-textColor w-full text-sm">Médico</label>
          <select
            v-model="doctor"
            placeholder="Seleccionar"
            class="w-full md:w-11/12 bg-backgroundWhite border border-grayColor rounded-lg text-sm px-2 py-2"
          >
            <option disabled value="">Escoja un médico</option>
            <option
              v-for="doctor in doctors"
              :key="doctor"
              class="text-textColor tex-sm"
            >
              {{ doctor }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, reactive, toRefs } from "vue";
export default {
  setup() {
    const store = useStore();

    const specialties = computed(() => {
      return store.getters["insurance/getSpecialties"];
    });

    const consultationState = reactive({
      specialty: "",
      doctor: ""
    });

    const doctors = computed(() => {
      if (consultationState.specialty === "") {
        return ["Debes tomar una espacialidad"];
      } else {
        const consultationId = specialties.value.findIndex(
          (specialty) => specialty.name === consultationState.specialty
        );
        const doctors = specialties.value[consultationId].doctors;
        return doctors;
      }
    });

    return {
      ...toRefs(consultationState),
      specialties,
      doctors,
    };
  },
};
</script>
