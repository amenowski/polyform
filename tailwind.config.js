/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        hoverBackground: "#232323",
        featuresBackground: "#faf6f3",
        essentialBackground1: "#e3dad5",
        essentialBackground2: "#faf6f3",
      },
    },
  },
  plugins: [],
};
