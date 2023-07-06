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
    extend: {
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-500px)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-500px)" },
          "100%": { transform: "translateX(0px)" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "slide-left":
          "slide-left 5s linear infinite alternate-reverse forwards",

        "slide-right":
          "slide-right 5s linear infinite alternate-reverse forwards",

        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
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
      h2: ["75px", { lineHeight: "auto" }],
      h3: ["48px", { lineHeight: "auto" }],
      h4: ["45px", { lineHeight: "auto" }],
      h5: ["40px", { lineHeight: "auto" }],
      h6: ["28px", { lineHeight: "auto" }],
      body1: ["26px", { lineHeight: "auto" }],
      body2: ["18px", { lineHeight: "auto" }],
      navigation: ["20px", { lineHeight: "auto" }],
      button: ["18px", { lineHeight: "auto" }],
      textButton: ["16px", { lineHeight: "auto" }],
      position: ["18px", { lineHeight: "auto" }],
      textlogo: ["30px", { lineHeight: "auto" }],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
  },
  plugins: [],
});
