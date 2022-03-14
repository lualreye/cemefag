<template>
  <div class="w-screen h-screen default" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <slot />
  </div>
</template>

<script>

export default {
  setup() {
    const bgImage = require("../assets/images/svg/blob-scene-haikei.svg");

    return {
      bgImage
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
