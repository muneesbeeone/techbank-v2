import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        nyx: ['Nyxerin', 'sans-serif'],
        ninetea: ['Ninetea', 'sans-serif']
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(103.84deg, #330694 17.98%, #8500A6 69.45%)',
      },
      clipPath: {
        'notched-card': 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)'
      }
    },
  },
  plugins: [],
}

export default config