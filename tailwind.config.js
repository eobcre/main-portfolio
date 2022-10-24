/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#808080",
        "light-blue": "#34C7F2",
        "dark-gray": "#303030",
        "off-white": "#FFFFFE",
      },
      backgroundImage: {
        webTop: "url('./img/assets/bg-main.jpg')",
        webBG: "url('./img/assets/bg-page.jpg')",
      },
      backgroundSize: {
        zoom: "100rem",
      },
      spacing: {
        380: "380px",
        600: "600px",
        minus: "-63px",
      },
      maxWidth: {
        21: "21rem",
      },
      fontSize: {
        "5xl": "2.75rem",
      },
    },
  },
  plugins: [],
};
