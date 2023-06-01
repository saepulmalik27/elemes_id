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
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      boxShadow : {
        'custom' : '0px 8px 32px rgba(102, 107, 226, 0.35)',
      },
      
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
          },
          ".text-title-1xl":{
            "font-size": "26px",
            "font-weight": "500",
            "line-height": "50px",
          },
          ".card-shadow" : {
            "box-shadow" : "0px 11px 39px rgba(0, 0, 0, 0.07)",
            "background" : "rgba(255, 255, 255, 0.74)",
            "backdrop-filter": "blur(5.5px)"
          }

        })
    })
  ]
}
