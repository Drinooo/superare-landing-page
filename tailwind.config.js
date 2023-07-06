/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{react,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      black: "#000000",
      white: "#FDFBFA",
      purple: "#600060",
      transparent: "#FFF0",
    },
    fontFamily: {
      main: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      h1: ["80px", { lineHeight: "auto" }],
      h2: ["76px", { lineHeight: "auto" }],
      h3: ["30px", { lineHeight: "auto" }],
      h4: ["26px", { lineHeight: "auto" }],
      h5: ["20px", { lineHeight: "auto" }],
      h6: ["30px", { lineHeight: "auto" }],
      body1: ["26px", { lineHeight: "auto" }],
      body2: ["16px", { lineHeight: "auto" }],
      navigation: ["20px", { lineHeight: "auto" }],
      button: ["18px", { lineHeight: "auto" }],
      textButton: ["16px", { lineHeight: "auto" }],
      position: ["18px", { lineHeight: "auto" }],
      textlogo: ["30px", { lineHeight: "auto" }],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    },
  },
  plugins: [],
});
