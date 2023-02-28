/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "random": 'url("https://source.unsplash.com/random")',
      },
      colors: {
        primary: {
          200: "#a4fc4c",
          300: "#94e344",
          400: "#87cf3e",
          500: "#74b336",
          600: "#61962d",
          700: "#528026",
          800: "#466e20",
          900: "#385919",
          yellow: "#C1D602",
          green: "#1B7A24",
          blue: "#1B4D82",
        },
      },
    },
  },
  plugins: [],
};
