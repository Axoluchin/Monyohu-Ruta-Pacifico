/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        back: '#eff0f3',
        card: {
          back: '#eff0f3',
        },
        text: '#2a2a2a',
        mark: '#D93737',
        landing: '#caf0f8',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
