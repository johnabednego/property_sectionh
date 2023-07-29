/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: "#2a4953",
        gainsboro: {
          "100": "#dddfe2",
          "200": "#dfdcdc",
        },
        whitesmoke: {
          "100": "#f8f7f9",
          "200": "#e9ebee",
        },
        dodgerblue: {
          "100": "#5392f9",
          "200": "#488bf8",
        },
        gray: {
          "100": "#2a2a2e",
          "200": "#24262c",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        slategray: "#6b7388",
        forestgreen: {
          "100": "#32a923",
          "200": "#28871c",
        },
        dimgray: {
          "100": "#737373",
          "200": "#4e4e4e",
        },
        cornflowerblue: "#0283df",
        crimson: {
          "100": "#ff567d",
          "200": "#e12d2d",
        },
        honeydew: "#e7f9f0",
        darkgray: "#999",
        lightslategray: "#90949c",
        "resireleif-white": "#fff",
        "resirelief-secondary": "#563524",
        "resirelief-primary": "#163366",
        "resirelief-black": "#000",
        "resirelief-gray": "#f5f5f5",
      },
      fontFamily: {
        inter: "Inter",
        "roboto-serif": "'Roboto Serif'",
      },
      borderRadius: {
        "10xs": "3px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      "6xl": "25px",
      lg: "18px",
      "3xl": "22px",
      xs: "12px",
      sm: "14px",
      smi: "13px",
      xl: "20px",
      "21xl": "40px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
