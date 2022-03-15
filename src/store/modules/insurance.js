const state = () => ({
  company: {
    insurance: [
      {
        product: "TipoA",
        coverage: [70, 65, 30, 20],
      },
      {
        product: "TipoB",
        coverage: [70, 65, 30, 20],
      },
      {
        product: "TipoC",
        coverage: [70, 65, 30, 20],
      },
      {
        product: "TipoD",
        coverage: [70, 65, 30, 20],
      },
    ],
  },
});

const getters = {
  getCompany(state) {
    return state.company
  }
}







export default {
  namespaced: true,
  state,
  getters
}