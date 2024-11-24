import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005397",
        secondary: "#000E1A",
        dark:"#183D5A",
        charcoalGray:"#2D2C2C",
        medium:"#616161",
        light:"#BFBFBF",
        gray:"#98A2B3",
        white:"#F4F4F4",
        dimwhite: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily:{
        Montserrat:["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        'blue-gradient': 'var(--blue-gradient)', // Include your custom gradient
      },
    },
        screens:{
          xs: "480px",
          ss: "620px",
          sm: "768px",
          md: "1060px",
          lg: "1200px",
          xl: "1700px",
        }
  },
  plugins: [],
} satisfies Config;
