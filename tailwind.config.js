/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
      },

      screens: {
        '2xl': {'max': '2095px'},
        // => @media (max-width: 1535px) { ... }
  
        'desk': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'desklappy': {'max': '1129px'},
        // => @media (max-width: 1129px) { ... }
  
        'lappy': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'tab': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'phone': {'max': '639px'},
        // => @media (max-width: 639px) { ... }

        'iphone': {'max': '400px'},
        // => @media (max-width: 639px) { ... }

        'sphone': {'max': '320px'},
        // => @media (max-width: 681px) { ... }
      },
      plugins: [],
    }
  }
} 
  