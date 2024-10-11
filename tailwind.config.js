/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html', // Adjust the path according to your Django project
    './**/*.html',
    './static/**/*.js',
    './static/**/*.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
