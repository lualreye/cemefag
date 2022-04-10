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
            v-model="speciality"
            placeholder="Seleccionar"
            class="w-full md:w-11/12 bg-backgroundWhite border border-grayColor rounded-lg text-sm px-2 py-2"
          >
            <option disabled value="">Escoja una especialidad</option>
            <option
              v-for="(speciality, i) in specialities"
              :key="i"
              class="text-textColor tex-sm"
            >
              {{ speciality.es_nombre }}
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
              {{ doctor.value.me_nombre }}
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
              v-for="(day, i) in days"
              :key="i"
              class="text-textColor tex-sm"
            >
              {{ day.name }}
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
              v-for="appointment in appointments"
              :key="appointment"
              class="text-textColor tex-sm"
            >
              {{ appointment }}
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
              v-for="product in products"
              :key="product"
              class="text-textColor tex-sm"
            >
              {{ product }}
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
              v-for="coverage in coverages"
              :key="coverage"
              class="text-textColor tex-sm"
            >
              {{ coverage }}
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
      speciality: "",
      doctor: "",
      product: "",
      date: "",
      time: "",
      doctors: "",
      products: "",
      dates: "",
      times: "",
      coverage: "",
      coverages: "",
      days: "",
      appointments: ""
    });

    onMounted(() => {
      store.dispatch("appointment/fetchSpecialities");
    });

    const doctors = computed(() => {
      if (consultationState.speciality === "") {
        return ["Debes tomar una espacialidad"];
      } else {
        const specialityId = specialities.value.findIndex(
          (speciality) => speciality.es_nombre === consultationState.speciality
        );
        const speciality = specialities.value[specialityId].es_id
        store.dispatch("appointment/fetchDoctors", speciality)
        const doctors = store.getters["appointment/getDoctors"]
        return doctors
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
