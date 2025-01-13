/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c1831',
        secondary: '#4779c4',
        dark: '#1b2d48',
        light: '#eeeeee',
      },
    },
  },
  plugins: [],
}


