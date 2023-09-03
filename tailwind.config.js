const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sm-regular": "sm-regular, sans-serif",
        "sm-bold": "sm-bold, sans-serif",
      },
      colors: {
        blue: "hsl(212, 100%, 50%)",
        "light-blue": "hsl(217, 20%, 51%)",
        "dark-blue": "hsl(217, 35%, 45%)",
        "dark-blue-darker": "hsl(222, 41%, 20%)",
        "very-dark-blue": "hsl(217, 21%, 21%)",
        "very-dark-blue-darker": "hsl(220, 40%, 13%)",
        "very-light-blue": "hsl(227, 100%, 98%)",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: "#000",
            primary: "hsl(217, 21%, 21%)",
            secondary: "hsl(217, 20%, 51%)",
          },
        },
        dark: {
          colors: {
            default: "#fff",
            primary: "hsl(220, 40%, 13%)",
            secondary: "hsl(227, 100%, 98%)",
          },
        },
      },
    }),
  ],
};
