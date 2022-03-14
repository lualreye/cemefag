const state = () => ({
  user: 'Luis'
})

const getters = {
  getUser(state) {
    return state.user
  }
}




export default {
  namespaced: true,
  state,
  getters
}