<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import DefaultLayout from "./DefaultLayout"
import { markRaw, watchEffect } from "vue"
import { useRoute } from 'vue-router'
export default {
  setup() {
    const layout = markRaw(DefaultLayout)
    const route = useRoute()

    watchEffect(
      () => route.meta,
      async meta => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`)
          layout.value = component?.default || DefaultLayout
        } catch (error) {
          layout.value = DefaultLayout
        }
      },
      { immediate: true }
    )

    return {
      layout
    }
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
