import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        glow: {
          pink:   '#ec4899',
          violet: '#a855f7',
          cyan:   '#06b6d4',
          soft:   '#fff0f8',
          card:   '#ffffff',
          border: '#fce7f3',
          text:   '#2d1a2e',
          muted:  '#9333ea',
        },
      },
      fontFamily: {
        display: ['"Fredoka One"', 'cursive'],
        body:    ['Nunito', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'sparkle':    'sparkle 3s linear infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px 4px #ec489966, 0 0 60px 10px #a855f733',
          },
          '50%': {
            boxShadow: '0 0 40px 12px #a855f788, 0 0 80px 20px #06b6d422',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%':   { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%':  { opacity: '1', transform: 'scale(1) rotate(180deg)' },
          '100%': { opacity: '0', transform: 'scale(0) rotate(360deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}

export default config
