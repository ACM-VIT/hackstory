/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cross: "#2E2E2E",
        grey: "#9A9A9A",
        ribbon: "#B8B7B7",
        logo: "#5738AF",
        background: "#1C1C1C",
        marquee: "#D0D5FF",
        fontColor1: "#FFF6E8",
        yellow: "#FABF29",
        headerbutton: "#A7A9BE",
        tracks: "#E8E8EE",
        trackstext: "#A7A9BE",
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        marquee2: 'marquee2 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-scrollbar")],
};
