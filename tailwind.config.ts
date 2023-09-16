import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        growFromCenter: {
          "0%": { transform: "scaleX(0)", transformOrigin: "center" },
          "100%": { transform: "scaleX(1)", transformOrigin: "center" },
        },
        shrinkToCenter: {
          "0%": { transform: "scaleX(1)", transformOrigin: "center" },
          "100%": { transform: "scaleX(0)", transformOrigin: "center" },
        },
      },
      animation: {
        growFromCenter: "growFromCenter 0.3s forwards",
        shrinkToCenter: "shrinkToCenter 0.3s forwards",
        slideUp: "slideUp 1s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
