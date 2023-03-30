/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },

    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        abrilfatface: ['Abril Fatface', 'cursive'],
        cormorant: ['Cormorant', 'serif'],
        inter: ['Inter', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        paytoneone: ['Paytone One', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        schoolbell: ['Schoolbell', 'cursive'],
        tinos: ['Tinos', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  corePlugins: {
    fontFamily: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
};

module.exports = nextConfig;
