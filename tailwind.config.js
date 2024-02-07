/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section-4': "url('../src/assets/art.svg')",
        'section-4-mobile': "url('../src/assets/artmobile.svg')",
        'talk-cover': "url('../src/assets/talk-cover.svg')",
        'signup-section': "url('../src/assets/signup-bg.svg')",
        'gradient-1': "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F4F0FF 100%)"
      },
      fontFamily: {
        Satoshi: ['Satoshi', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },

    },
  },
  plugins: [],
}









