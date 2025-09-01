module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#144dbb",
        "soft-blue": "#e9f4fd"
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}