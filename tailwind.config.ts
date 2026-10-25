import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1a4d2e',
        'forest-dark': '#10351f',
        cream: '#f5f0e1',
        'cream-deep': '#ebe1c9',
        gold: '#c9a961',
        ink: '#24342a',
        muted: '#6d7a70',
      },
      boxShadow: {
        card: '0 16px 40px rgba(26, 77, 46, 0.08)',
        glow: '0 0 0 6px rgba(201, 169, 97, 0.14)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        urdu: ['var(--font-urdu)', 'Noto Nastaliq Urdu', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
