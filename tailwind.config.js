/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1020px',
    },
    colors: {
      'green':'#446750',
      'beige':'#fffbee',
      customColor: '#f6f0dc',
    },
    backgroundPosition: {
      'right-bottom': 'right 2rem bottom 2rem',
      'pc-rightbottom': 'right 3rem bottom 3rem',
      'center-right': 'center right 9px',
    },
    extend: {
      fontFamily:{
        pretendard : 'Pretendard',
      }
    },
  },
  plugins: [],
}
