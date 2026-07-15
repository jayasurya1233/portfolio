/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F19',
          card: '#151D30',
          text: '#F3F4F6'
        },
        primary: {
          light: '#4F46E5', // Indigo
          DEFAULT: '#6366F1',
          dark: '#4338CA'
        }
      }
    },
  },
  plugins: [],
}