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
      white2: "#E2E3E5",
      purple: "#600060",
      transparent: "#FFF0",
    },
    fontFamily: {
      main: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      h1: ["80px", { lineHeight: "auto" }],
      'phone-h1': ["40px", { lineHeight: "auto" }],

      h2: ["75px", { lineHeight: "auto" }],
      'phone-h2': ["55px", { lineHeight: "auto" }],

      h3: ["48px", { lineHeight: "auto" }],
      'phone-h3': ["32px", { lineHeight: "auto" }],

      h4: ["45px", { lineHeight: "auto" }],
      'phone-h4': ["35px", { lineHeight: "auto" }],

      h5: ["40px", { lineHeight: "auto" }],
      'phone-h5': ["25px", { lineHeight: "auto" }],

      h6: ["28px", { lineHeight: "auto" }],
      body1: ["26px", { lineHeight: "auto" }],
      'phone-body1': ["20px", { lineHeight: "auto" }],

      body2: ["20px", { lineHeight: "auto" }],
      'phone-body2': ["16px", { lineHeight: "auto" }],

      body3: ["18px", { lineHeight: "auto" }],
      'phone-body3': ["16px", { lineHeight: "auto" }],

      navigation: ["20px", { lineHeight: "auto" }],
      'phone-navigation': ["16px", { lineHeight: "auto" }],

      footer: ["16px", {lineHeight: "auto"}],
      'phone-footer': ["14px", {lineHeight: "auto"}],

      button: ["18px", { lineHeight: "auto" }],
      'phone-button': ["14px", { lineHeight: "auto" }],

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
  plugins: [require("daisyui")],
});
