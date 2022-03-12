module.exports = {
  purge: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "768px",
      md: "992x",
      lg: "1200px",
      xl: "1440px",
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
