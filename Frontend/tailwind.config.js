/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueColor: "#6EADFF",
        textColor: "#262626",
        headingColor: "#181A1E",
        greenColor: "#75CE9F",
        orangeColor: "#FFC06E",
      },

      boxShadow: {
        PanelShadow: '0px 4px 30px rgba(0, 0, 0, .1)',
      },
    },
  },
  plugins: [],
}

