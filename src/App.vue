<template>
  <main id="app" class="w-screen h-screen">
    <app-layout>
      <router-view />
    </app-layout>
  </main>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue"
export default {
  name: "App",
  components: {
    AppLayout
  },
};
</script>
