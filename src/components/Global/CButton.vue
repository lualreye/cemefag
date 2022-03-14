<template>
  <button
    class="w-56 py-3 text-xs flex justify-center items-center bg-blue text-backgroundWhite rounded-lg"
    :class="buttonDisabled"
    :disabled="disableButton"
  >
    {{ name }}
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    disableButton: {
      type: Boolean,
      required: null,
    },
  },
  setup(props) {
    const buttonDisabled = computed(() => {
      if (props.disableButton) {
        return "bg-blue-300";
      } else {
        return "bg-primary";
      }
    });

    return {
      buttonDisabled,
    };
  },
};
</script>
