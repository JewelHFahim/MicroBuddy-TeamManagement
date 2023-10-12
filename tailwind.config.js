/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Manrope: ["Manrope", "sans-serif"],
      Urbanist: ["Urbanist", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#8E5CBC",
        secondary: "#273240",
        textColor: "#464E5F",
      },
    },
  },
  plugins: [],
};
