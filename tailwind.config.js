/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      sm: "2rem",
      lg: "4rem",
      xl: "20rem",
    },
    colors: {
      colors: {
        "light-very-light-gray": "hsl(0, 0%, 98%)",
        "light-very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-light-grayish-blue": "hsl(233, 11%, 84%)",
        "light-dark-grayish-blue": "hsl(236, 9%, 61%)",
        "light-very-dark-grayish-blue": "hsl(235, 19%, 35%)",

        "dark-very-dark-blue": "hsl(235, 21%, 11%)",
        "dark-very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "dark-light-grayish-blue": "hsl(234, 39%, 85%)",
        "dark-light-grayish-blue-hover": "hsl(236, 33%, 92%)", // Hover state color
        "dark-dark-grayish-blue": "hsl(234, 11%, 52%)",
        "dark-very-dark-grayish-blue": "hsl(233, 14%, 35%)",
        "dark-extra-dark-grayish-blue": "hsl(237, 14%, 26%)", 
      },
    },
    extend: {
      backgroundImage: {
        "desktop-dark": "url('./bg-desktop-dark.jpg')",
        "desktop-light": "url('./bg-desktop-light.jpg')",
        "mobile-dark": "url('./bg-mobile-dark.jpg')",
        "mobile-light": "url('./bg-mobile-light.jpg')",
        "check-background": "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
      },
    },
  },
  plugins: [],
};
