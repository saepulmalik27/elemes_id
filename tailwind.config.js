/** @type {import('tailwindcss').Config} */

const colors = require('./src/config/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:colors, 
    extend: {
      fontFamily: ['Rubik', ...defaultTheme.fontFamily.sans],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "hero-pattern": "url('/assets/images/hero/hero-background.png')",
      },
      flex : {
        50 : '1 1 50%',
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
        addComponents({
          ".text-title-sm": {
            "font-size": "18px",
            "font-weight": "500",
          },
          ".text-title-4xl":{
            "font-size": "64px",
            "font-weight": "500",
            "line-height": "64px",
          },
          ".text-title-3xl":{
            "font-size": "48px",
            "font-weight": "500",
            "line-height": "48px",
          },
          ".text-title-2xl":{
            "font-size": "38px",
            "font-weight": "500",
            "line-height": "38px",
          },
          ".text-title-xl":{
            "font-size": "24px",
            "font-weight": "500",
            "line-height": "24px",
          }

        })
    })
  ]
}
