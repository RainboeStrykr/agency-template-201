/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js,css}"],
  theme: {
    screens: {
      ss: "411px",
      default: "472px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xlA: "1300px",
      xl2: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "2rem",
        lg: "40px",
        xl: "60px",
        xl2: "120px",
      },
    },

    extend: {
      backgroundImage: {
        aboutBg: "url('/assets/chatting.jpg')",
      },
      fontFamily: {
        helvetica: "Helvetica",
      },
    },
  },
  plugins: [],
};
