<template>
  <header class="w-full flex justify-center items-center">
    <div class="max-w-screen-2xl border border-b-primary flex items-center justify-end">
      <div class="w-5 h-5 flex justify-center items-center">
        <icon name="user" class="text-textColor" />
      </div>
      <p class="text-base text-textColor">
        {{ user }}
      </p>
      <button class="flex w-5 h-5 justify-center items-center" @click="activeModal">
        <icons name="" class="text-textColor" />
      </button>
    </div>
  </header>
</template>


<script>
import { useStore } from "vuex"
import { computed, reactive, toRefs } from "vue"
export default {
  setup() {

    const modalState = reactive({
      isModalOpen: false
    })

    const store = useStore()
    const user = computed(() => {
      return store.getters['userAuthenticatin/getUser']
    })

    const arrowDirection = computed(() => {
      return modalState.isModalOpen === true ? 'arrowUp' : 'arrowDown'
    })

    function activeModal() {
      if (modalState.isModalOpen) {
        modalState.isModalOpen = false
      } else {
        modalState.isModalOpen = true
      }
    }


    return {
      user,
      ...toRefs(modalState),
      activeModal,
      arrowDirection
    }
  }
}
</script>