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
      },
    },
  },
  plugins: [],
};
export default config;
