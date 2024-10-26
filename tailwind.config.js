/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'new': 'box-shadow: 0px 0px 16px 4px rgba(0,0,0,0.75);',
      }
    },
  },
  plugins: [],
}

