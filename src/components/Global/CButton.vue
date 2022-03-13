<template>
  <button
    class="w-56 py-3 text-xs flex justify-center items-center bg-blue text-backgroundWhite rounded-lg"
    :class="buttonDisabled"
    :disabled="disabled"
    @click="$emit('click')"
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
    disabled: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const buttonDisabled = computed(() => {
      if (props.disabled) {
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
