const plugin = require("tailwindcss/plugin");
const colors = require("./src/styles/colorConstants.ts");

module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-primary": colors.theme.primary,
        "theme-secondary": colors.theme.secondary,
      },
    },
    fontSize: {
      sm: "0.6rem",
      base: "0.8rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1440px",
    },
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
    },
    container: {
      center: true,
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme("fontSize.2xl"), fontWeight: "semibold" },
        h2: { fontSize: theme("fontSize.xl"), fontWeight: "medium" },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
