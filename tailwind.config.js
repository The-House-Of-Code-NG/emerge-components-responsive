/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|orange|yellow|green|teal|blue|indigo|purple|pink|gray|black|white|fuchsia|lime|emerald|cyan|sky|violet)-200/, // Match your background colors
    },
    {
      pattern: /text-(red|orange|yellow|green|teal|blue|indigo|purple|pink|gray|black|white|fuchsia|lime|emerald|cyan|sky|violet)-800/, // Match your text colors
    },
  ],
  mode: "jit",
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









