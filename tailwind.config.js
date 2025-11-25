/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#d96060",
        secondary: "#d8e7f0",
        background: "#FAFAFA",
      },

      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        round: "9999px",
      },

      
    },
  },
  plugins: [],
};
