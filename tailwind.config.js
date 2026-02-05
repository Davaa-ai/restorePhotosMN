/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#fdf2f8', // pink-50 equivalent
        'soft-green': '#f0fdf4', // green-50 equivalent
        'soft-orange': '#fff7ed', // orange-50 equivalent
        'pale-pink': '#fce7f3', // pink-100
        'pale-green': '#dcfce7', // green-100
        'pale-orange': '#ffedd5', // orange-100
      }
    },
  },
  plugins: [],
}
