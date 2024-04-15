import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bgm: "url('/images/bgm.jpg')",
        bg: "url('/images/bg.jpg')",
      },
      colors: {
        transBlack: "#00000030",
      },
      animation: {
        pop: "pop 2s ease",
      },
      keyframes: {
        pop: {
          "0%": { opacity: "0", transform: "translateY(2000px)" },
          "40%": { opacity: "1", transform: "translateY(-20px)" },
          "60%": { transform: "translateY(10px)" },
          "80%": { transform: "translateY(0)", opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(2000px)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
