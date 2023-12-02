/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss'
import tailwindConfig from './tailwind.config.js';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

