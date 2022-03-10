<template>
  <main id="app" class="w-screen h-screen" :style="{backgroundImage: 'url(' + bgImage + ')'}" >
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const bgImage = require("./assets/images/svg/blob-scene-haikei.svg")


    return {
      bgImage
    }
  }
}
</script>

<style scoped>
#app {
  background-size: cover;
  background-origin: center;
  background-repeat: no-repeat;
}
</style>
