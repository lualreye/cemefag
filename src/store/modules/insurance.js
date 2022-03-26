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
  specialties: [
    {
      name: "cardiologia",
      doctors: [
        "Luis Reyes",
        "Joselyne Coello",
        "Diego Reyes"
      ]
    },
    {
      name: "traumatologia",
      doctors: [
        "Christopher Jouvin",
        "Shirley Lema",
        "Shirley Guevara"
      ]
    },
    {
      name: "neurologia",
      doctors: [
        "Karla Mendoza",
        "Maria Quimi",
        "Maria Mendoza"
      ]
    },
  ]
});

const getters = {
  getCompany(state) {
    return state.company
  },
  getSpecialties(state) {
    return state.specialties
  }
}







export default {
  namespaced: true,
  state,
  getters
}