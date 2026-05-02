/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui/index.js";

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}