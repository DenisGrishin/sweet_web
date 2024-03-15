/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beigeColor: '#f7e4d7',
        pinkColor: '#f09bbf',
        blackColor: '#000',
        grayColor: '#e7e7e7',
        grayText: '#a2a1a1',
        darkGray: '#4e4e4e',
      },
    },
    screens: {
      xl: { max: '1399.99px' },
      // => @media (max-width: 1279px) { ... }
      xlsmall: { max: '1249.99px' },
      // => @media (max-width: 1279px) { ... }
      lg: { max: '991.99px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767.99px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
