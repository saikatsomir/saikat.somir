/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        neue: ['neue'],
        neueBold: ['neueBold'],
        neueMed: ['neueMed'],
        neueLight: ['neueLight'],
        sloop: ['sloop'],
        bonefesta: ['bonefesta'],
      },
      colors: {
        purpleLitest: '#f0e7ef',
        purpleLight: '#d1b6cf',
        purpleBg: '#00000f',
        // purpleBg: '#140313',
        purpleBlur: '#74256f',
        purpleBold: '#280526',
        purpleNormal: '#640d5f',
        purpleDark: '#1e041c',
        purpleDarkest: '#140313',
        purpleBtn: '#320730',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-extraSlow': 'spin 10s linear infinite',
        'cell-ripple': 'cell-ripple  3s ease-out infinite',
        'bounce-slow': ' bounce 3s linear infinite',
      },
      keyframes: {
        'cell-ripple': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-motion')],
};
