module.exports = {
  // content: [],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: require("daisyui/colors"),
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // styled: false,
  },
};
