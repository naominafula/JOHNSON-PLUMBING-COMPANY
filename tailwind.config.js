/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f172a',
          sky: '#0ea5e9',
          orange: '#f97316',
          light: '#f8fafc',
        },
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
}

