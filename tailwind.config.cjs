/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E1E',
        'primary-alt': '#222222',
        'card': '#2D2D2D',
        'pill': '#373737',
        'card-border': '#373737',
        'card-border-hover': '#1E1E1E',
        'pill-border': '#222222',
        'footer': '#121212',
      },
      fontFamily: {
        'header': ['Oswald']
      }
    }
  },
  plugins: [],
}
