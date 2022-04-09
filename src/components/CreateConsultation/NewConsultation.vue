<template>
  <div class="w-full">
    <div
      class="w-full flex border-b border-primary justify-between items-center px-1"
    >
      <p class="text-textColor text-sm font-light text-left">
        AGENDAMIENTO DE CITA
      </p>
    </div>
    <div class="w-full flex flex-col justify-center items-center my-14">
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
              v-for="(specialty, i) in specialities"
              :key="i"
              class="text-textColor tex-sm"
            >
              {{ specialty.es_nombre }}
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
        <!-- GET DATE -->
        <div class="w-full md:w-1/2">
          <label class="text-textColor w-full text-sm">Fecha</label>
          <select
            v-model="date"
            placeholder="Seleccionar"
            class="w-full md:w-11/12 bg-backgroundWhite border border-grayColor rounded-lg text-sm px-2 py-2"
          >
            <option disabled value="">Escoja el día</option>
            <option
              v-for="(specialty, i) in specialties"
              :key="i"
              class="text-textColor tex-sm"
            >
              {{ specialty.name }}
            </option>
          </select>
        </div>
        <!-- GET TIME -->
        <div class="w-full md:w-1/2">
          <label class="text-textColor w-full text-sm">Hora</label>
          <select
            v-model="time"
            placeholder="Seleccionar"
            class="w-full md:w-11/12 bg-backgroundWhite border border-grayColor rounded-lg text-sm px-2 py-2"
          >
            <option disabled value="">Escoja la hora</option>
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
      <div
        class="mx-auto w-11/12 flex flex-wrap justify-between items-center mt-8"
      >
        <div
          class="w-full flex border-b border-primary justify-between items-center px-1"
        >
          <p class="text-textColor text-sm font-light text-left">
            DATOS DE SEGURO
          </p>
        </div>
        <!-- GET PRODUCT -->
        <div class="w-full md:w-1/2">
          <label class="text-textColor w-full text-sm">Producto</label>
          <select
            v-model="product"
            placeholder="Seleccionar"
            class="w-full md:w-11/12 bg-backgroundWhite border border-grayColor rounded-lg text-sm px-2 py-2"
          >
            <option disabled value="">Escoja la hora</option>
            <option
              v-for="doctor in doctors"
              :key="doctor"
              class="text-textColor tex-sm"
            >
              {{ doctor }}
            </option>
          </select>
        </div>
        <!-- GET COVERAGE -->
        <div class="w-full md:w-1/2">
          <label class="text-textColor w-full text-sm">Cobertura</label>
          <select
            v-model="coverage"
            placeholder="Seleccionar"
            class="w-full md:w-11/12 bg-backgroundWhite border border-grayColor rounded-lg text-sm px-2 py-2"
          >
            <option disabled value="">Escoja la hora</option>
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
import { computed, onMounted, reactive, toRefs } from "vue";
export default {
  setup() {
    const store = useStore();

    const specialities = computed(() => {
      return store.getters["appointment/getSpecialities"];
    });

    const consultationState = reactive({
      specialty: "",
      doctor: "",
    });

    onMounted(() => {
      store.dispatch("appointment/fetchSpecialities");
    });

    const doctors = computed(() => {
      if (consultationState.specialty === "") {
        return ["Debes tomar una espacialidad"];
      } else {
        const consultationId = specialities.value.findIndex(
          (specialty) => specialty.name === consultationState.specialty
        );
        const doctors = specialities.value[consultationId].doctors;
        return doctors;
      }
    });

    return {
      ...toRefs(consultationState),
      specialities,
      doctors,
    };
  },
};
</script>
