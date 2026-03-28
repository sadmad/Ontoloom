import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space: '#05050f',
        surface: '#0d0d1a',
      },
      animation: {
        'button-glow': 'button-glow 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'button-glow': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(124,58,237,0.5), 0 0 30px rgba(124,58,237,0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(124,58,237,0.9), 0 0 60px rgba(124,58,237,0.4)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
