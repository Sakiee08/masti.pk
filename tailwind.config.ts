import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF7F5',
          100: '#FAECE6',
          200: '#F5DACF',
          300: '#EDB8A4',
          400: '#E2977E',
          500: '#D96B43',
          600: '#C85A32',
          700: '#A84422',
          800: '#86351B',
          900: '#6E2D17',
          950: '#3B150A',
        },
        obsidian: {
          950: '#080706',
          900: '#110F0D',
          850: '#181512',
          800: '#221E1A',
          700: '#302A24',
          600: '#423B33',
        },
        dark: {
          950: '#080706',
          900: '#110F0D',
          850: '#181512',
          800: '#221E1A',
          700: '#302A24',
          600: '#423B33',
        },
        champagne: {
          200: '#FCF3E3',
          300: '#F7E7CD',
          400: '#EAC996',
          500: '#D4AF37',
          600: '#B58E22',
          700: '#8E6E16',
        },
        gold: {
          300: '#F7E7CD',
          400: '#EAC996',
          500: '#D4AF37',
          600: '#B58E22',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-brand': '0 0 30px -5px rgba(217, 107, 67, 0.35)',
        'glow-gold': '0 0 30px -5px rgba(212, 175, 55, 0.25)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.25)',
        'candle-glow': '0 20px 50px -15px rgba(217, 107, 67, 0.18)',
        'champagne-glow': '0 15px 40px -10px rgba(234, 201, 150, 0.18)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};

export default config;
