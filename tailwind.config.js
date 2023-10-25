/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./404page.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#407BFF',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '945px',
      // => @media (min-width: 945px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

