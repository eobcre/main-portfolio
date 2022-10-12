/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#A0A0A0",
        "light-blue": "#34C7F2",
      },
      backgroundImage: {
        webTop: "url('./img/cards.jpg')",
      },
      backgroundSize: {
        zoom: "100rem",
      },
      spacing: {
        480: "480px",
        380: "380px",
      },
    },
  },
  plugins: [],
};
