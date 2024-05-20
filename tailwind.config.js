/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#000000",
          2: "#74BAF1",
          3: "#59B0F4",
          4: "#0C8EF3",
          5: "#0B7DD6",
          6: "#FF98E2",
          7:"#070909"
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#E9EDF0",
          3: "#0A1619",
          4: "#E4E5E6",
          5: "#C9CBCD",
          6: "#B8B9BA",
          7: "#A0A1A2",
          8: "#052239",
          9: "#5C6B76",
      
        },
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
        roboto: "var(--font-roboto)",
        poetsen: "var(--font-poetsen)",
        playfair: "var(--font-playfair)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[74.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[84.5rem]":
            {},
        },
        ".hero": {
          "@apply max-w-[78.5rem] mx-auto px-5 md:px-8 lg:px-12 xl:max-w-[88.5rem]":
            {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
