/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fdfb',  // Muy claro, casi blanco
          100: '#ccfbf7',
          200: '#99f7ef',
          300: '#01598b',
          400: '#034b70',
          500: '#007494', // Color principal
          600: '#034b70',
          700: '#007f73',
          800: '#00554c',
          900: '#002a26',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666', // Color secundario
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#000000',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Color de acento
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        }
      }
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
          outline: `2px solid ${theme('colors.primary.400')}`,
          outlineOffset: '2px',
        },
      });
    },
  ],
}