<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-56">
      <h1 class="w-full text-center text-3xl text-textColor mb-20">Registro</h1>
      <div class="w-full flex flex-col justify-center items-center">
        <div class="w-full flex flex-col justify-center items-center mb-4">
          <!-- USER INPUT -->
          <label class="text-sm text-textColor w-full text-left mb-1">
            Usuario
          </label>
          <div
            class="w-full flex justify-center bg-backgroundWhite items-center px-3 py-3 border border-grayColor rounded-lg"
          >
            <div class="w-4 h-4 mr-2">
              <icon name="account" class="text-grayColor" />
            </div>
            <input
              type="email"
              placeholder="Escriba su usuario"
              class="placeholder-grayColor bg-backgroundWhite border-none focus:border-none outline-none text-primary w-full text-xs"
            />
          </div>
          <!-- PASSWORD INPUT -->
          <label class="text-sm text-textColor w-full text-left mb-1 mt-4">
            Contraseña
          </label>
          <div
            class="w-full flex justify-center bg-backgroundWhite items-center px-3 py-3 border border-grayColor rounded-lg"
          >
            <div class="w-4 h-4 mr-2">
              <icon name="password" class="text-grayColor" />
            </div>
            <input
              type="password"
              placeholder="Escriba su contraseña"
              class="placeholder-grayColor bg-backgroundWhite border-none focus:border-none outline-none text-primary w-full text-xs"
            />
          </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../components/Global/Icon.vue";
export default {
  components: {
    Icon,
  },
};
</script>
