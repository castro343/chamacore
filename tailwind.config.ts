import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        chama: {
          forest: '#14532D',
          emerald: '#10B981',
          soft: '#F8FAFC',
          charcoal: '#1F2937',
          gold: '#D4AF37',
          card: '#FFFFFF'
        }
      },
      boxShadow: {
        premium: '0 20px 45px -25px rgba(20, 83, 45, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
