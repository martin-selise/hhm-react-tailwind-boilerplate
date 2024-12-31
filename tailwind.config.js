/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "393px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1600px",
    },
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "sans-serif"],
      },
      colors: {
        redColor: "var(--redColor)",
        whiteColor: "var(--whiteColor)",
      },
      lineHeight: {
        15: "15px",
        18: "18px",
      },
      fontSize: {
        16: "16px",
        18: "18px",
      },
    },
  },
  plugins: [],
};
