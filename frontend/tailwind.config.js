/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ceylon: {
          jade: '#064E3B',
          darkjade: '#022C22',
          amber: '#D97706',
          gold: '#F59E0B',
          lightgold: '#FDE68A',
          slate: '#0F172A',
          cream: '#FDFBF7',
          card: '#111827'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif']
      }
    },
  },
  plugins: [],
}
