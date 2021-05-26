module.exports = {
  presets: [
    require('./tailwind.config')
  ],
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}