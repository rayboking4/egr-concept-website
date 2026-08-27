/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          50: '#e8ecf4',
          100: '#c5cedf',
          200: '#9aaec9',
          300: '#6f8db3',
          400: '#4f74a3',
          500: '#2f5b93',
          600: '#2a5388',
          700: '#23477a',
          800: '#1d3b6b',
          900: '#1B2A4A',
        },
        amber: {
          DEFAULT: '#F2A93B',
          400: '#F2A93B',
          500: '#e09620',
        },
        charcoal: '#2D2D2D',
        offwhite: '#F5F3EF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
