/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'fem': {
                  100: 'hsl(185, 75%, 39%)',
                  200: 'hsl(229, 23%, 23%)',
                  300: 'hsl(227, 10%, 46%)',
                  400: 'hsl(0, 0%, 59%)',
              }
          },
          backgroundImage: {
            'bg-card': "url('/src/images/bg-pattern-top.svg')",
          },
          fontFamily: {
              'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
          },
          screens: {
          },
      },
  },
  plugins: [],
}
