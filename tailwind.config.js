import { defaults } from "autoprefixer"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeIne: 'fadeIne 2s ease-in-out',
        spintwo: 'spintwo 2s linear infinite',
        slideIn: 'slideIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', 
            transform: 'translateY(100px)' },
            '100%': { opacity: '1', 
              transform: 'translateY(0)'},

            },
          },
        
        keyframes: {
          fadeIne: {
            '0%': { opacity: '0'},
            '100%': { opacity: '1'}
          },
        },
      

      keyframes: {
        spintwo: {
          
           '0%': {transform: 'rotate(0deg)' },
           '100%': {transform: 'rotate(360deg) '},
        },
      },

      keyframes: {
        slideIn: {

           '0%': {transform:'translateX(-50%)'},
           '100%': {transform:'translateX(0)'},
        }
      },
    },
  plugins: [],
},
}

