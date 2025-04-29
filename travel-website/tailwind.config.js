/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            transform: 'translateX(-50%)',
            opacity: 0
          },
          '50%': {
            opacity: 0.2
          },
          '70%': {
            opacity: 0.5
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(-0%)'
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 4s forwards',
      },  
    },
  },
  plugins: [],
}

/* TODO: finish setting up tailwind*/