module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundWhite: "#F0F4F5",
        backgroundLightblue: "#7FC0FF",
        textColor: "#001217",
        grayColor: "#9D9E9E",
        primary: "#3970A6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
