import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#005397",
        secondary: "#000E1A",
        dark: "#183D5A",
        charcoalGray: "#2D2C2C",
        medium: "#616161",
        light: "#BFBFBF",
        gray: "#98A2B3",
        lightgray: "#F4F4F4",
        dimwhite: "rgba(255, 255, 255, 0.7)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
        "lg-shadcn": `var(--radius)`,
        "md-shadcn": `calc(var(--radius) - 2px)`,
        "sm-shadcn": "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "custom-shadow": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "small-shadow": "0px 1px 2px 0px #3519173B",
        "medium-shadow": "0px 4px 4px 0px #1E0E0C42",
        "large-shadow": "0px 6px 6px 0px #1E0E0C47",
      },
      backgroundImage: {
        "blue-gradient": "var(--bg-blue-gradient)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
