/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#282e38",
        "light-gray": "#313844",
        "off-white": "#adb5bd",
        "navy-blue": "#165474",
      },
      animation: {
        loader: "loader 0.6s infinite alternate",
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: "translate3d(0, -1rem, 0)",
          },
        },
      },
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
};
