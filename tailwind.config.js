module.exports = {
  purge: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      sm: "0.6rem",
      base: "0.8rem",
      xl: "1rem",
      "2xl": "1.25rem",
      "3xl": "1.563rem",
      "4xl": "1.953rem",
      "5xl": "2.441rem",
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
  variants: {
    extend: {},
  },
  plugins: [],
};
