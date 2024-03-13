/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('nick-fewings-VfWpvJAshN0-unsplash.jpg')",
        'footer-texture': "url('nick-fewings-VfWpvJAshN0-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}

