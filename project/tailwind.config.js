/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF9E6',
          100: '#FFE4B3',
          200: '#FFD280',
          300: '#FFC14D',
          400: '#FFB01A',
          500: '#FFA500', // Orange
          600: '#E69400',
          700: '#CC8400',
          800: '#B37300',
          900: '#996200',
        },
        secondary: {
          50: '#FFF9E6',
          100: '#FFE4B3',
          200: '#FFD280',
          300: '#FFD700', // Yellow
          400: '#E6C200',
          500: '#CCAC00',
          600: '#B39700',
          700: '#998200',
          800: '#806C00',
          900: '#665700',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'carousel': 'carousel 30s linear infinite',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      spacing: {
        '1/8': '12.5%',
      },
    },
  },
  plugins: [],
};