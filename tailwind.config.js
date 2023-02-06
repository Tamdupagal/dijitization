/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        navybl: "#050A30",
        logotext: "#3742FA",
        secondary: "#7980FC",
        // title: "#fd9b5f",
        paraclr: "#666A7B",
      },
    },
  },
  plugins: [],
};


