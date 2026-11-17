/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f6f2',
        ink: {
          DEFAULT: '#1d1d1b',
          soft: '#55554f',
          line: '#e2e0d8',
        },
        primary: {
          50: '#f1f4ef',
          100: '#e3eadf',
          200: '#c9d6c3',
          300: '#acc0a4',
          400: '#8aa482',
          500: '#6b8a63',
          600: '#56734f',
          700: '#455c40',
          800: '#354631',
          900: '#232e21',
        },
        lavender: {
          100: '#efeaf6',
          200: '#ddd3ec',
          300: '#cbbde2',
        },
        secondary: {
          50: '#f7f6f2',
          100: '#ebe9e3',
          200: '#e2e0d8',
          300: '#c3c1b8',
          400: '#8f8d85',
          500: '#55554f',
          600: '#45453f',
          700: '#35352f',
          800: '#26261f',
          900: '#1d1d1b',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'a:focus-visible, button:focus-visible': {
          outline: `2px solid ${theme('colors.primary.600')}`,
          outlineOffset: '3px',
        },
      });
    },
  ],
}
