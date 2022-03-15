<template>
  <div class="w-full">
    <p class="text-center text-textColor font-light text-sm mt-8">
      Paciente no identificado
    </p>
    <h1 class="text-center text-3xl text-textColor font-medium mt-3">
      Registro de pacientes
    </h1>
    <div class="w-full max-w-md md- mt-12 mx-auto">
      <div class="w-full border-b border-primary">
        <p class="text-base text-textColor text-left font-light">
          DATOS DEL PACIENTE
        </p>
      </div>
      <!-- USER NAME AND LASTNAME -->
      <div class="w-full flex flex-wrap justify-between items-center mb-4">
        <!-- USER NAME -->
        <div class="w-full md:w-1/2">
          <label class="w-full text-xs font-medium text-textColor"> Nombre </label>
          <input
            type="name"
            v-model="name"
            placeholder="John"
            class="px-2 py-2 w-11/12 rounded-lg outline-none text-primary text-sm placeholder-grayColor border border-grayColor"
          />
        </div>
        <!-- LASTNAME -->
        <div class="w-full md:w-1/2">
          <label class="w-full text-xs font-medium text-textColor"> Apellidos </label>
          <input
            type="lastname"
            v-model="lastname"
            placeholder="Doe"
            class="px-2 py-2 w-11/12 rounded-lg outline-none text-primary text-sm placeholder-grayColor border border-grayColor"
          />
        </div>
      </div>
    </div>
  </div>
</template>
