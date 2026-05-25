/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#1a3d4f',
          mid: '#1e4d63',
          light: '#2a6680',
          pale: '#e8f4f8',
        },
        amber: {
          DEFAULT: '#f5a623',
          dark: '#c47d0a',
          bg: '#faeeda',
        },
        offwhite: '#f8f6f2',
        border: '#e8e4dc',
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
