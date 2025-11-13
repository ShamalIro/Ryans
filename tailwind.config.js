export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#D62828',
          700: '#C41E1E',
        },
        neutral: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2E2E2E',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}