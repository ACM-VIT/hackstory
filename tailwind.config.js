/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        grey: '#9A9A9A',
        ribbon: '#B8B7B7',
        logo: '#5738AF',
        background: '#1C1C1C',
        marquee: '#D0D5FF',
        cross: '#2E2E2E',
        tracks: '#E8E8EE',
      },
      colors:{
        grey: '#9A9A9A',
        ribbon: '#B8B7B7',
        logo: '#5738AF',
        background: '#1C1C1C',
        marquee: '#D0D5FF',
        timelineheading: '#FFF6E8',
        yellow: '#FABF29',
        headerbutton: '#A7A9BE',
        tracks: '#E8E8EE',
        trackstext: '#A7A9BE',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        marquee2: 'marquee2 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-scrollbar"),
  ],
};
