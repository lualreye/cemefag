<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
export default {
  name: "AppLayout",
  components: {
    TheHeader
  }
}
</script>