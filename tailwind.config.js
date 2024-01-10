import { nextui } from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
        "open-sans": ["Open Sans", ...defaultTheme.fontFamily.serif],
        nunito: ["Nunito", ...defaultTheme.fontFamily.serif],
      },
      spacing: {
        12.5: "3.125rem",
        97: "24.25rem",
      },
      colors: {
        foreground: "#1e1e1e",
        primary: "#565abb",
        success: "#4de1c1",
      },
    },
  },
  plugins: [nextui()],
};
