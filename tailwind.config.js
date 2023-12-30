/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-pink": "hsl(var(--light-pink))",
        purple: "hsl(var(--purple))",
        "grayish-purple": "hsl(var(--grayish-purple))",
        "dark-purple": "hsl(var(--dark-purple))",
      },
    },
  },
  plugins: [],
};
