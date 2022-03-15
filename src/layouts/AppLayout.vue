<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import DefaultLayout from "./DefaultLayout";
import AuthLayout from "./AuthLayout.vue"
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const layout = computed(() => {
      if(route.meta !== undefined) {
        return AuthLayout
      } else {
        return DefaultLayout
      }
    })

    return {
      layout,
    };
  },
};
</script>

<style scoped>
.default {
  background-size: cover;
  background-origin: center;
  background-repeat: no-repeat;
}
</style>
