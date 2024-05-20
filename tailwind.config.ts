import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bgm: "url('/images/bgm.jpg')",
        bg: "url('/images/bg.jpg')",
      },
      colors: {
        transBlack: "#00000010",
        transBlack2: "#00000080",
        bg_primary: "#fafafa",
        nav_color: "#1a237e",
        text_color: "#212121",
        primary_color: "#000000",
        secondary_color: "#171717",
        border_color: "#bdbdbd",
        card_color: "#eeeeee",
        secondary_text: "#757575",
        placeholder_text: "#9e9e9e",
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
