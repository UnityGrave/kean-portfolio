import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#141413",
        foreground: "#faf9f5",
        card: "#1c1b1a",
        "card-foreground": "#faf9f5",
        border: "#2a2927",
        muted: "#242321",
        "muted-foreground": "#b0aea5",
        "accent-orange": "#d97757",
        "accent-blue": "#6a9bcc",
        "accent-green": "#788c5d",
      },
      borderRadius: {
        xl: "0.75rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
