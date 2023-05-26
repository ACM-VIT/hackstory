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
    },
  },
  plugins: [require("tailwindcss-scrollbar")],
};
