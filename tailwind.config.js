/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#A0A0A0",
      },
      backgroundImage: {
        webTop: "url('./img/webTop.jpg')",
      },
      backgroundSize: {
        zoom: "100rem",
      },
    },
  },
  plugins: [],
};
