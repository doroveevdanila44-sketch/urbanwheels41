import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    // Брейкпоинты по ТЗ: 640 / 1024 / 1280
    // md — планшет в портретной ориентации (768–1023)
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        ink: '#0A0A0A', // основной фон
        surface: '#141414', // карточки
        line: '#262626', // границы
        muted: '#A0A0A0', // вторичный текст
        gold: {
          light: '#E0B84C',
          DEFAULT: '#D4AE39',
          dark: '#C9A227',
        },
        yandex: '#FC3F1D',
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'Impact', 'sans-serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E0B84C 0%, #C9A227 100%)',
      },
      maxWidth: {
        shell: '1280px',
      },
    },
  },
  plugins: [],
}

export default config
