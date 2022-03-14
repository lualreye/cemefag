<template>
  <div>
    <the-header />
    <slot />
  </div>
</template>


<script>
import TheHeader from "../components/TheHeader.vue"
export default {
  name: "AuthLayout",
  components: {
    TheHeader
  }
}
</script>