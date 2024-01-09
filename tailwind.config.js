/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      animation: {
        'fade-and-slide': 'fadeAndSlide 1.5s ease-in-out forwards',
        'slide-rigth': 'slide 1.5s ease-in-out forwards',
        'slide-left': 'slideLeft 1.5s ease-in-out forwards',
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'slide-up-1': 'slideUp 2s 1.5s ease-in-out forwards',
        'slide-up-2': 'slideUp 2s 1.2s ease-in-out forwards',
        'slide-up-3': 'slideUp 2s 0.8s ease-in-out forwards',
        'slide-up-4': 'slideUp 2s 0.5s ease-in-out forwards'
      },
      keyframes: {
        fadeAndSlide: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slide: {
          '0%': { opacity: '0', transform: 'translateX(-50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      colors: {
        'ip-light': 'rgb(236,236,236)',
        'ip-gray': 'rgb(242,242,242)',
        'ip-light-gray': 'rgb(215,215,215)',
        'ip-purple': 'rgb(86,81,251)',
        'ip-dark-blue': 'rgb(32,29,77)',
        'ip-green': 'rgb(44,121,101)',
        'bg-dark-blue': 'rgb(19,18,33)',
        'bg-purple': 'rgb(43,38,113)',
        'bg-green': 'rgb(16,69,55)',
        'bg-dark-gray': 'rgb(119,119,119)',
        'op-green': 'rgba(59,59,59,0.39)',
        'br-gray': 'rgb(112,112,112)',
        'ft-purple': 'rgb(86,81,251)',
        'ft-black': 'rgb(0,0,0)',
        'ft-white': 'rgb(255,255,255)',
        'ft-gray': 'rgb(184,184,184)',
        'ft-green': 'rgb(45,121,101)',
        'ft-dark-green': 'rgb(10,39,41)',
        'ft-light-green': 'rgb(201,247,84)',
        'ft-muted': 'rgb(163,163,163)'
      },
      spacing: {
        100: '450px',
        500: '500px',
        120: '700px',
        22: '22px',
        50: '50px',
        214: '214px'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
