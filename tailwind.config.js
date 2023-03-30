/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "primary": "#edb368",

      "secondary": "#3604ea",

      "accent": "#7ff9ba",

      "neutral": "#293338",

      "base-100": "#FFFFFF",

      "info": "#3EBEDA",

      "success": "#23AF80",

      "warning": "#C57F07",

      "error": "#EB3D46",
    },
  },
  plugins: [require("daisyui")],
}

