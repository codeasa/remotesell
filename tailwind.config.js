module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fwd: "#E87722",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
