<template>
  <svg
    class="select-none"
    style="width: 100%; height: 100%; stroke-width: 2.5px"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path :d="icon" />
  </svg>
</template>

<script>
import Icons from "../../helpers/Icons.js";
import { computed } from "vue";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const icon = computed(() => {
      return Icons[props.name];
    });

    return {
      icon,
    };
  },
};
</script>
