module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundWhite: "#E5E5E5",
        backgroundLightBlue: "#7FC0FF",
        primary: "#3970A6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
